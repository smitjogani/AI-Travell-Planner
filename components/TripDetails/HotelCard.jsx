import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { GetPhotoRef } from '../../services/GooglePlaceApi'

const HotelCard = ({ item }) => {

    const [photoRef, setPhotoRef] = useState();

    useEffect(() => {
        GetGooglePhotoRef();
    }, []);

    const GetGooglePhotoRef = async () => {
        const result = await GetPhotoRef(item.hotel_name);
        setPhotoRef(result?.results[0]?.photos[0]?.photo_reference);
    }


    return (
        <View style={{
            marginRight: 10,
            width: 200,
            backgroundColor: '#fff',
            borderRadius: 15,
            padding: 5,
            width: 212,
            borderWidth: 1,
            borderColor: Colors.LIGHT_GRAY
        }}>
            <Image
                source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + photoRef + '&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY }}
                style={{
                    width: 200,
                    height: 120,
                    borderRadius: 10
                }}
                resizeMode="cover"
            />
            <View style={{
                padding: 5
            }}>
                <Text style={{
                    fontFamily: 'outfit-medium',
                    fontSize: 18,
                    color: Colors.PRIMARY
                }}>
                    {item.hotel_name}

                </Text>
                <Text style={{
                    fontFamily: 'outfit',
                    color: Colors.PRIMARY
                }}>
                    ⭐ {item.rating}
                </Text>

                <Text style={{
                    color: Colors.PRIMARY,
                    fontFamily: 'outfit'
                }}>
                    💰 {item.hotel_price}
                </Text>

            </View>
        </View>
    )
}

export default HotelCard