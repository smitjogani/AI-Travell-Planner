import { View, Text, Image } from 'react-native'
import React from 'react'
import moment from 'moment'
import { Colors } from "../../constants/Colors"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'

const UserTripCard = ({ trip }) => {

  const formateData = (data) => {
    return JSON.parse(data);
  }

  return (
      <View
      style={{
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: "#fff",
        borderRadius: 15,
        overflow: 'hidden'
      }}>
        <Image source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + formateData(trip.tripData)?.locationInfo?.photoRef + '&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY }}
          style={{
            height: 110,
            width: 110,
            objectFit: 'cover',
            borderRadius: 15,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          }}
        />
        <View style={{
          width: '100%'
        }}>

          <Text style={{
            fontFamily: 'outfit-medium',
            fontSize: 22,
            color: Colors.PRIMARY
          }}>{trip?.tripPlan?.trip_details?.destination}</Text>

          <Text style={{
            fontFamily: 'outfit',
            fontSize: 16,
            color: Colors.GRAY
          }}>{moment(formateData(trip.tripData).startDate).format('DD-MM-YYYY')} </Text>

          <Text style={{
            color: Colors.GRAY
          }}><Text style={{
            color: Colors.PRIMARY,
            fontFamily: 'outfit-medium',
            fontSize: 16,
          }}>Traveling : </Text>{formateData(trip.tripData).traveler.title}</Text>
        </View>
      </View>
  )
}

export default UserTripCard