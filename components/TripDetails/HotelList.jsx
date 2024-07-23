import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../../constants/Colors'
import { GetPhotoRef } from '../../services/GooglePlaceApi'
import HotelCard from './HotelCard'

const HotelList = ({ hotelList }) => {
    return (
        <View>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 22,
                marginTop: 20
            }}>
                🏨 Hotel Recommendation
            </Text>

            <FlatList
                style={{
                    marginTop: 8
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={hotelList}
                renderItem={({ item, index }) => (
                    <HotelCard item={item}/>
                )}
            />

        </View>
    )
}

export default HotelList