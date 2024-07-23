import { View, Text } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';

import { CreateTripContext } from "../../context/CreateTripContext";
import moment from 'moment';
import { TouchableOpacity } from 'react-native';

const reviewTrip = () => {

  const navigation = useNavigation();
  const router = useRouter();

  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: '',
      headerTransparent: true
    })
  }, []);

  const onButtonClick = () => {
    router.replace('/create-trip/generate-trip')
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
      }}>Review Your Trip</Text>

      <View>
        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 23,
          marginTop: 25,
          color: Colors.LIME
        }}>Before generating your trip, please review your selection</Text>
      </View>

      <View style={{
        paddingRight: 10
      }}>
        {/* Place */}
        <View style={{
          marginTop: 40,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 20
        }}>
          <Text style={{
            fontSize: 30
          }}>📍</Text>
          <View>
            <Text
              style={{
                fontFamily: 'outfit',
                fontSize: 20,
                color: Colors.GRAY
              }}
            >
              Destination
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'outfit-medium',
                color: Colors.PRIMARY
              }}
            >
              {tripData?.locationInfo?.name}
            </Text>

          </View>
        </View>

        {/* Date */}
        <View style={{
          marginTop: 25,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 20
        }}>
          <Text style={{
            fontSize: 30
          }}>📅</Text>
          <View>
            <Text
              style={{
                fontFamily: 'outfit',
                fontSize: 20,
                color: Colors.GRAY
              }}
            >
              Travel Date
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'outfit-medium',
                color: Colors.PRIMARY
              }}
            >
              {moment(tripData?.startDate).format('DD-MM-YYYY') + " to " + moment(tripData?.endDate).format('DD-MM-YYYY') + " "}
              ({tripData?.totalNoOfDays} days)
            </Text>

          </View>
        </View>

        {/* With whom? */}
        <View style={{
          marginTop: 25,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 20
        }}>
          <Text style={{
            fontSize: 30
          }}>🚌</Text>
          <View>
            <Text
              style={{
                fontFamily: 'outfit',
                fontSize: 20,
                color: Colors.GRAY
              }}
            >
              Who is travelling
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'outfit-medium',
                color: Colors.PRIMARY
              }}
            >
              {tripData?.traveler?.title}
            </Text>

          </View>
        </View>

        {/* Budget */}
        <View style={{
          marginTop: 25,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 20
        }}>
          <Text style={{
            fontSize: 30
          }}>💰</Text>
          <View>
            <Text
              style={{
                fontFamily: 'outfit',
                fontSize: 20,
                color: Colors.GRAY
              }}
            >
              Budget
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'outfit-medium',
                color: Colors.PRIMARY
              }}
            >
              {tripData?.budget}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={{
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        paddingHorizontal: 30,
        marginTop: 75
      }}
        onPress={() => onButtonClick()}
      >
        <Text style={{
          color: Colors.WHITE,
          fontFamily: 'outfit-medium',
          fontSize: 17,
          textAlign: 'center'
        }}>Build My Trip</Text>
      </TouchableOpacity>
    </View>
  )
}

export default reviewTrip