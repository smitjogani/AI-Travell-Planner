import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '@/constants/Colors'
import { useNavigation, useRouter } from 'expo-router'

const Login = () => {

  const router = useRouter();

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, []);

  return (
    <View>
      <Image source={require('@/assets/images/login.jpg')} style={{
        width: '100%',
        height: 530
      }} />

      <View style={styles.container}>
        <Text
          style={{
            fontSize: 32,
            fontFamily: 'outfit-bold',
            textAlign: 'center',
            color: Colors.PRIMARY
          }}
        >AI Travel Planner</Text>

        <Text style={{
          fontFamily: 'outfit',
          fontSize: 18,
          textAlign: 'center',
          color: Colors.GRAY,
          marginTop: 20
        }}>
          Discover Your next adventure effortlessly.Pesonalized itineraries at your fingertips.Travel smarter with AI-driven insights.
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push('auth/sign-in')}>
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: 'center',
              fontSize: 17,
              fontFamily: 'outfit'
            }}
          >Get Started</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -18,
    height: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: '20%'
  }
})

export default Login