import { View, Image, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Colors } from "../../constants/Colors";
import moment from 'moment';
import FlightInfo from '../../components/TripDetails/FlightInfo';
import HotelList from '../../components/TripDetails/HotelList';
import PlannedTrip from '../../components/TripDetails/PlannedTrip';

const TripDetails = () => {

  const formateData = (data) => {
    return JSON.parse(data);
  }

  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();

  const [tripDetails, setTripDetails] = useState([]);

  useEffect(() => {

    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    });

    setTripDetails(JSON.parse(trip));
  }, [])

  return (
    <ScrollView
      style={{
        height: '100%',
        backgroundColor: Colors.WHITE,
      }}
    >
      <Image source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + formateData(tripDetails?.tripData)?.locationInfo?.photoRef + '&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY }}
        style={{
          width: '100%',
          height: 400,
        }}
      />

      <ScrollView style={{
        padding: 15,
        paddingTop: 25,
        backgroundColor: Colors.WHITE,
        marginTop: -30,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35
      }}>

        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 28,
          color: Colors.PRIMARY
        }}>
          {tripDetails?.tripPlan?.trip_details?.destination}
        </Text>

        <View style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 5,
          alignItems: 'center',
          marginTop: 5
        }}>
          <Text style={{
            fontFamily: 'outfit',
            fontSize: 18,
            color: Colors.GRAY
          }}>{moment(JSON.parse(tripDetails?.tripData)?.startDate).format('DD-MM-YYYY')}
          </Text>

          <Text style={{
            fontFamily: 'outfit',
            fontSize: 18,
            color: Colors.GRAY
          }}> - {moment(JSON.parse(tripDetails?.tripData)?.endDate).format('DD-MM-YYYY')}
          </Text>
        </View>

        <Text style={{
          fontSize: 18,
          color: Colors.GRAY
        }}>
          <Text style={{
            fontSize: 23,
            color: Colors.GRAY
          }}>🚌</Text> {formateData(tripDetails.tripData)?.traveler.title}
        </Text>

        <FlightInfo flightData={tripDetails?.tripPlan?.flight_details} />

        <HotelList hotelList={tripDetails?.tripPlan?.hotel_options} />

        <PlannedTrip details={tripDetails?.tripPlan?.daily_plan} />

      </ScrollView>

    </ScrollView>
  )
}

export default TripDetails
