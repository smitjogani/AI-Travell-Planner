import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../../constants/Colors';

// firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../../configs/FirebaseConfig";

const Signup = () => {

    const navigation = useNavigation();
    const router = useRouter();

    const [fullname, setFullName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    // Email Validater
    const checkEmail = (emailid) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(emailid);
    }

    const onCreateAccount = () => {

        if (!email && !password && !fullname) {
            ToastAndroid.show('Please Enter All Details', ToastAndroid.BOTTOM);
            return;
        }

        if(!checkEmail(email)){
            ToastAndroid.show('Enter Valid Email', ToastAndroid.BOTTOM);
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                router.replace('/mytrip');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
                ToastAndroid.show(errorMessage, ToastAndroid.BOTTOM);
            });
    }

    return (
        <View style={{
            padding: 30,
            paddingTop: 120,
            height: '100%',
            backgroundColor: Colors.WHITE
        }}>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 36,
                color: Colors.PRIMARY
            }}>Create New Account</Text>


            <Text style={{
                fontFamily: "outfit",
                fontSize: 36,
                color: Colors.GRAY,
                marginTop: 35
            }}>
                Welcome,
            </Text>


            <View style={{
                display: 'flex',
                flexDirection: "row",
                gap: 5,
                alignItems: 'center',
            }}>
                <Text style={{
                    fontFamily: "outfit",
                    fontSize: 36,
                    color: Colors.GRAY,
                }}>
                    Plane Your Journey
                </Text>

                <Image source={require('../../../assets/images/signup.png')}
                    style={{
                        height: 50,
                        width: 50,
                    }} />
            </View>

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
                    Name
                </Text>
                <TextInput keyboardType='email-address' placeholder='Enter Your Full Name' style={styles.input}
                    onChangeText={(value) => setFullName(value)}
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
                <TouchableOpacity style={styles.button} onPress={onCreateAccount}>
                    <Text
                        style={{
                            color: Colors.WHITE,
                            textAlign: 'center',
                            fontSize: 16,
                            fontFamily: 'outfit'
                        }}
                    >Create Account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2} onPress={() => router.push('auth/sign-in')}>
                    <Text
                        style={{
                            color: Colors.PRIMARY,
                            textAlign: 'center',
                            fontSize: 16,
                            fontFamily: 'outfit'
                        }}
                    >Signin</Text>
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
        marginTop: 35
    },
    button2: {
        padding: 15,
        borderRadius: 15,
        marginTop: 10,
        backgroundColor: Colors.WHITE,
        borderWidth: 1,
    },
})

export default Signup