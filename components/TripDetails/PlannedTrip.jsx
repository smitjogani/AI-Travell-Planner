import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const PlannedTrip = ({ details }) => {

    return (
        <View style={{
            marginTop: 20
        }}>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 20
            }}>
                🏕️ Plan Details
            </Text>

            {Object.entries(details).map(([day, details]) => (
                <View style={{
                    backgroundColor: '#fff',
                    borderWidth: 1,
                    borderColor: Colors.LIGHT_GRAY,
                    padding: 15,
                    marginTop: 20,
                    borderRadius: 15
                }}>
                    <Text style={{
                        fontFamily: 'outfit-medium',
                        fontSize: 22,
                    }}>
                        Day {parseInt(day) + 1}
                    </Text>
                    
                    {details.plan.map((place, index) => (
                        <View style={{
                            marginVertical: 10
                        }}>
                            <Text style={{
                                fontFamily: 'outfit-medium',
                                fontSize: 20,
                                color: Colors.GRAY
                            }}>
                                <Text style={{
                                    fontFamily: 'outfit-bold',
                                    color: Colors.PRIMARY
                                }}>
                                    Activity {index + 1} :
                                </Text>
                                {" " + place?.activity}</Text>

                            <Text style={{
                                fontFamily: 'outfit',
                                fontSize: 16,
                                color: Colors.GRAY
                            }}>
                                <Text style={{
                                    fontFamily: 'outfit-bold',
                                    fontSize: 20,
                                    color: Colors.PRIMARY
                                }}>
                                    Duration :
                                </Text>
                                {" " + place?.duration}
                            </Text>

                            <Text style={{
                                fontFamily: 'outfit',
                                fontSize: 16,
                                color: Colors.GRAY
                            }}>
                                <Text style={{
                                    fontFamily: 'outfit-bold',
                                    fontSize: 20,
                                    color: Colors.PRIMARY
                                }}>
                                    Time :
                                </Text>
                                {" " + place?.time}</Text>
                        </View>
                    ))}
                </View>
            ))}
        </View>
    )
}

export default PlannedTrip