import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { SelectTravelleList } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { CreateTripContext } from "../../context/CreateTripContext"

const selectTraveller = () => {

  const [selectTraveler, setSelectedTraveler] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);

  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    })
  }, []);

  useEffect(() => {
    setTripData({
      ...tripData,
      traveler: selectTraveler
    })
  }, [selectTraveler]);

  useEffect(() => {
    console.Console;
  }, [tripData]);

  return (
    <View style={{
      padding: 25,
      paddingTop: 100,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <Text style={{
        fontSize: 35,
        fontFamily: 'outfit-bold',
        marginTop: 20,
        color: Colors.PRIMARY
      }}>Who's Travelling?</Text>

      <View>
        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 23,
          marginTop: 20,
          color: Colors.LIME
        }}>Choose your traveles</Text>

        <FlatList
          data={SelectTravelleList}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => setSelectedTraveler(item)} style={{
              marginVertical: 10,
            }}>
              <OptionCard option={item} selectedOption={selectTraveler} />
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
        onPress={() => router.push('/create-trip/select-dates')}
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

export default selectTraveller