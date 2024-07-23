import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from "../../context/CreateTripContext"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const Search_place = () => {

  const navigation = useNavigation();
  const router = useRouter();

  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Search'
    })
  }, []);

  useEffect(() => {
    // console.log(tripData);
  }, [tripData]);

  return (
    <View style={{
      padding: 25,
      paddingTop: 100,
      height: '100%',
      backgroundColor: Colors.WHITE
    }}>
      
      <GooglePlacesAutocomplete
        styles={{
          textInputContainer: {
            marginTop: 30,

          }
        }}

        placeholder='Search Place'
        fetchDetails={true}
        onPress={(data, details = null) => {
          
          console.log(details)

          setTripData({
            locationInfo: {
              name: data.description,
              coordinates: details?.geometry.location,
              photoRef: details?.photos[0]?.photo_reference,
              url: details?.url
            }
          });

          router.push('/create-trip/select-traveller')

        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: 'en',
        }}
      />

    </View>
  )
}

export default Search_place