import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from "../../constants/Colors"
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from "../../configs/FirebaseConfig"
import Loader from "../../components/Loder"
// Icon
import { Ionicons } from '@expo/vector-icons';
import StartNewTripsCard from '../../components/Mytrips/StartNewTripsCard';
import { useNavigation, useRouter } from 'expo-router';
import UserTrip from '../../components/Mytrips/UserTrip';

const MyTrip = () => {

  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const router = useRouter();
  const user = auth.currentUser;

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  useEffect(() => {
    user && GetMyTrips();
  }, [user]);

  const GetMyTrips = async () => {
    setLoading(true);
    setUserTrips([]);
    const q = query(collection(db, 'UserTrips'), where('userEmail', '==', user?.email));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setUserTrips(prev => [...prev, doc.data()])
    });
    setLoading(false);
  }

  return (
    <View>
      {loading&& <Loader/>}
      <View style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.WHITE,
        height: '100%'
      }}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Text style={{
            fontFamily: 'outfit-bold',
            fontSize: 35,
            color: Colors.PRIMARY
          }}>My Trips</Text>
          <Ionicons name="add-circle" size={45} color={Colors.PRIMARY} onPress={() => router.push('/create-trip/search-place')} />
        </View>
        {
          userTrips?.length == 0 ?
            <StartNewTripsCard />
            :
            <UserTrip userTrips={userTrips}/>
        }
      </View>
    </View>
  )
}

export default MyTrip