import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from "../../../constants/Colors"

// firebase
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/FirebaseConfig';

const Signin = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, []);

  const onSignin = () => {

    if (!email && !password) {
      ToastAndroid.show('Please Enter All Details', ToastAndroid.BOTTOM);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.replace('/mytrip');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode == 'auth/invalid-credential') {
          ToastAndroid.show("Login Fail", ToastAndroid.LONG);
        }
      });
  }

  return (
    <View style={{
      padding: 30,
      height: '100%',
      paddingTop: 120,
      backgroundColor: Colors.WHITE
    }}>

      <Text style={{
        fontFamily: "outfit-bold",
        fontSize: 36,
        color: Colors.PRIMARY
      }}>
        Let's Sign You In
      </Text>

      <View style={{
        display: 'flex',
        flexDirection: "row",
        gap: 5,
        alignItems: 'center',
        marginTop: 35
      }}>
        <Text style={{
          fontFamily: "outfit",
          fontSize: 36,
          color: Colors.GRAY,
        }}>
          Welcome Back
        </Text>

        <Image source={require('../../../assets/images/hi.png')}
          style={{
            height: 45,
            width: 45,
          }} />
      </View>

      <Text style={{
        fontFamily: "outfit",
        fontSize: 36,
        color: Colors.GRAY,
      }}>
        You've been missed.
      </Text>

      <View style={{
        marginTop: 50
      }}>
        <Text style={{
          fontFamily: 'outfit',
          color: Colors.PRIMARY,
          fontSize: 16,
          marginBottom: 6,
          paddingLeft: 2
        }}>
          Email
        </Text>
        <TextInput keyboardType='email-address' placeholder='Enter Your Email' style={styles.input}
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      <View style={{
        marginTop: 16
      }}>
        <Text style={{
          fontFamily: 'outfit',
          color: Colors.PRIMARY,
          fontSize: 16,
          marginBottom: 6,
          paddingLeft: 2
        }}>
          Password
        </Text>
        <TextInput secureTextEntry={true} placeholder='Enter Password' style={styles.input}
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      <View style={{
        marginTop: 25
      }}>
        <TouchableOpacity style={styles.button} onPress={onSignin}>
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: 'center',
              fontSize: 16,
              fontFamily: 'outfit'
            }}
          >Signin</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={() => router.push('auth/sign-up')}>
          <Text
            style={{
              color: Colors.PRIMARY,
              textAlign: 'center',
              fontSize: 16,
              fontFamily: 'outfit'
            }}
          >Create Account</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 12,
    borderWidth: 1,
    color: Colors.PRIMARY,
    borderColor: Colors.PRIMARY,
    fontSize: 18,
    borderRadius: 15,
    fontFamily: 'outfit'
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 15,
    marginTop: 10
  },
  button2: {
    padding: 15,
    borderRadius: 15,
    marginTop: 10,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
  },
})

export default Signin