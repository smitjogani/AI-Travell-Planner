import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { selectBudgetList } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { CreateTripContext } from '../../context/CreateTripContext';

const selectBudget = () => {

    const [selectedOption, setSelectedOption] = useState();
    const { tripData, setTripData } = useContext(CreateTripContext);

    const router = useRouter();
    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        })
    }, []);

    useEffect(() => {
        selectedOption && setTripData({
            ...tripData,
            budget: selectedOption?.title
        })
    }, [selectedOption]);

    const onClickContinue = () => {
        if(!selectedOption){
            ToastAndroid.show("Select Your Budget", ToastAndroid.LONG);
            return;
        }
        router.push('/create-trip/review-trip')
    }

    return (
        <View style={{
            height: '100%',
            backgroundColor: Colors.WHITE,
            padding: 25,
            paddingTop: 100
        }}>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 35,
                marginTop: 20,
                color: Colors.PRIMARY
            }}>
                Budget
            </Text>

            <View>
                <Text style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 23,
                    marginTop: 20,
                    color: Colors.LIME
                }}>Choose spanding habits </Text>

                <FlatList
                    data={selectBudgetList}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => setSelectedOption(item)} style={{
                            marginVertical: 10,
                        }}>
                            <OptionCard option={item} selectedOption={selectedOption} />
                        </TouchableOpacity>
                    )}
                />
            </View>

            <TouchableOpacity style={{
                padding: 15,
                borderWidth: 2,
                borderColor: Colors.PRIMARY,
                borderRadius: 15,
                paddingHorizontal: 30,
                marginTop: 20
            }}
                onPress={() => onClickContinue()}
            >
                <Text style={{
                    color: Colors.PRIMARY,
                    fontFamily: 'outfit-medium',
                    fontSize: 17,
                    textAlign: 'center'
                }}>Continue</Text>
            </TouchableOpacity>

        </View>
    )
}

export default selectBudget