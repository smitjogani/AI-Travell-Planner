import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from "../../constants/Colors";
import CalendarPicker from 'react-native-calendar-picker';
import moment from "moment"
import { CreateTripContext } from '../../context/CreateTripContext';

const selectDates = () => {

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const { tripData, setTripData } = useContext(CreateTripContext);

  const navigator = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigator.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    })
  }, []);

  const onDateChange = (date, type) => {
    if (type == 'START_DATE') {
      setStartDate(moment(date));
    }
    else {
      setEndDate(moment(date));
    }

  }

  const OnDateSelectionContinue = () => {
    if (!startDate && !endDate) {
      ToastAndroid.show('Please Select Date', ToastAndroid.LONG);
    }
    const totalNoOfDays = endDate.diff(startDate, 'days');
    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
      totalNoOfDays: totalNoOfDays + 1
    });
    router.push('/create-trip/select-budget')
  }

  return (
    <View style={{
      padding: 25,
      paddingTop: 100,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 35,
        marginTop: 20,
        color: Colors.PRIMARY
      }}>Travel Dates</Text>

      <View style={{
        marginTop: 30,
      }}>
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={Date.now()}
          maxRangeDuration={7}
          selectedRangeStyle={{
            backgroundColor: Colors.PRIMARY
          }}
          selectedDayTextColor={Colors.WHITE}
        />
      </View>

      <TouchableOpacity style={{
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        paddingHorizontal: 30,
        marginTop: 30
      }}
        onPress={OnDateSelectionContinue}
      >
        <Text style={{
          color: Colors.WHITE,
          fontFamily: 'outfit-medium',
          fontSize: 17,
          textAlign: 'center'
        }}>Continue</Text>

      </TouchableOpacity>

    </View>
  )
}

export default selectDates