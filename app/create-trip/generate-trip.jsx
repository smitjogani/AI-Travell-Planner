import { View, Text, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Colors } from "../../constants/Colors"
import { useNavigation, useRouter } from 'expo-router';
import { CreateTripContext } from "../../context/CreateTripContext"
import { AI_PROMPT, } from '../../constants/Options';
import { chatSession } from "../../configs/AiModel";
import { auth, db } from "../../configs/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore"; 

const generateTrip = () => {

    const navigation = useNavigation();
    const router = useRouter();
    const user = auth.currentUser;

    const { tripData, setTripData } = useContext(CreateTripContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        GenerateAiTrip();
    }, []);

    const GenerateAiTrip = async () => {
        setLoading(true);
        const FINAL_PROMPT = AI_PROMPT
            .replace('{location}', tripData?.locationInfo?.name)
            .replace('{totalDays}', tripData?.totalNoOfDays)
            .replace('{totalNights}', tripData?.totalNoOfDays - 1)
            .replace('{traveler}', tripData?.traveler?.title)
            .replace('{budget}', tripData?.budget)
            .replace('{totalDays}', tripData?.totalNoOfDays)
            .replace('{totalNights}', tripData?.totalNoOfDays - 1);

        console.log(FINAL_PROMPT);

        const result = await chatSession.sendMessage(FINAL_PROMPT);
        // console.log(result.response.text());

        const tripResp = JSON.parse(result.response.text());

        setLoading(false);

        const docId = (Date.now()).toString();
        
        const result_ = await setDoc(doc(db, "UserTrips", docId), {
            userEmail: user.email,
            tripPlan: tripResp,//AI Result 
            tripData: JSON.stringify(tripData),//User Selection Data
            docId: docId
        });

        router.push('(tabs)/mytrip');

    }

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <View
            style={{
                padding: 25,
                paddingTop: 75,
                backgroundColor: Colors.WHITE,
                height: '100%'
            }}>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 35,
                textAlign: 'center',
                color: Colors.PRIMARY
            }}>
                Please Wait...
            </Text>

            <Image
                source={require('../../assets/images/plane.gif')}
                style={{
                    width: '70%',
                    height: 250,
                    display: 'flex',
                    alignSelf: 'center'
                }}
            />

            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 20,
                textAlign: 'center',
                color: Colors.PRIMARY
            }}>
                We are working to generate your dream trip
            </Text>
        </View>
    )
}

export default generateTrip