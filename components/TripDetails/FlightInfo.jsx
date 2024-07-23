import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const FlightInfo = ({ flightData }) => {

    return (
        <View style={{
            marginTop: 20,
        }}>
            <View styl={{
                display: 'flex',
                flexDirection: 'row',
                gap: 5,
                alignItems: 'center',
            }}>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: 10,
                    paddingVertical: 10,
                    paddingRight: '2%',
                    justifyContent: 'space-between',
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    borderWidth: 2,
                    borderColor: Colors.LIGHT_GRAY,
                }}>

                    <View>
                        <Text style={{
                            fontFamily: 'outfit-bold',
                            fontSize: 22,
                            color: Colors.PRIMARY
                        }}>
                            ✈ Flight
                        </Text>
                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 17,
                            marginTop: 7
                        }}>
                            <Text style={{ fontFamily: 'outfit-medium' }}>Airline :</Text> Delta
                        </Text>

                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 17
                        }}>
                            <Text style={{ fontFamily: 'outfit-medium' }}>From :</Text> {flightData.flight_from}

                        </Text>

                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 17
                        }}>
                            <Text style={{ fontFamily: 'outfit-medium' }}>To :</Text> {flightData.flight_to}
                        </Text>

                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 17
                        }}>
                            <Text style={{ fontFamily: 'outfit-medium' }}>Price:</Text> {flightData.flight_price}
                        </Text>
                    </View>

                    <View>
                        <TouchableOpacity style={{
                            backgroundColor: Colors.PRIMARY,
                            padding: 7,
                            width: 100,
                            borderRadius: 7,
                            marginTop: 7,
                            marginLeft: 22
                        }}
                            onPress={() => Linking.openURL(flightData.booking_url)}
                        >
                            <Text style={{
                                fontFamily: 'outfit',
                                color: Colors.WHITE,
                                textAlign: 'center'
                            }}>
                                Book Here
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default FlightInfo