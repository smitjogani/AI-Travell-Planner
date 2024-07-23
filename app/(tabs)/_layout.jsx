import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

// Icons
import Ionicons from '@expo/vector-icons/Ionicons';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#33524C",
      tabBarActiveBackgroundColor: "#edfaf7",
      tabBarInactiveBackgroundColor:'#edfaf7',
      tabBarStyle:{
        height: 49,
        paddingBottom: 5
      }
        }}>
      <Tabs.Screen name="mytrip" options={{
        tabBarIcon: () => <Ionicons name="location-sharp" size={24} color="#33524C"/>, 
      }} />
      <Tabs.Screen name="discover" options={{
        tabBarIcon: () => <Ionicons name="globe-sharp" size={24} color="#33524C" />
      }} />
      <Tabs.Screen name="profile" options={{
        tabBarIcon: () => <Ionicons name="people-circle" size={24} color="#33524C" />
      }} />
    </Tabs>
  )
}

export default TabLayout