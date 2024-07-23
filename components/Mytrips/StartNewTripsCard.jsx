import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'

// icon
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { useNavigation, useRouter } from 'expo-router';

const StartNewTripsCard = () => {

    const router = useRouter();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])


    return (
        <View style={{
            padding: 20,
            marginTop: '50%',
            display: 'flex',
            alignItems: 'center',
            gap: 20,
        }}>

            <Ionicons name="location-sharp" size={30} color={Colors.PRIMARY} />

            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 30,
            }}>
                No trip planned yet
            </Text>

            <Text style={{
                fontFamily: 'outfit',
                fontSize: 20,
                textAlign: 'center',
                color: Colors.GRAY
            }}>
                Look like its time to plan a new travel experience! Get started below
            </Text>

            <TouchableOpacity style={{
                padding: 15,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 15,
                paddingHorizontal: 30
            }}
                onPress={() => router.push('/create-trip/search-place')}
            >
                <Text style={{
                    color: Colors.WHITE,
                    fontFamily: 'outfit-medium',
                    fontSize: 17
                }}>Start a new trip</Text>
            </TouchableOpacity>

        </View>
    )
}

export default StartNewTripsCard