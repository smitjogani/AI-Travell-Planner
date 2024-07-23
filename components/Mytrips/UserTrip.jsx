import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import moment from 'moment'
import UserTripCard from './UserTripCard'
import { useRouter } from 'expo-router'


const UserTrip = ({ userTrips }) => {

    const LatestTrip = JSON.parse(userTrips[0]?.tripData);

    const router = useRouter();

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{
                marginTop: 20,
                borderWidth: 2,
                borderColor: Colors.LIGHT_GRAY,
                borderRadius: 17,
                paddingBottom: 6,
                backgroundColor: '#fff',
                shadowColor: "#000",
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
            }}>
                {LatestTrip?.locationInfo?.photoRef ?
                    <Image source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + LatestTrip?.locationInfo?.photoRef + '&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY }}
                        style={{
                            height: 220,
                            width: '100%',
                            objectFit: 'cover',
                            borderRadius: 15,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0
                        }}
                    />
                    :
                    <Image source={require('../../assets/images/city.jpg')}
                        style={{
                            height: 220,
                            width: '100%',
                            objectFit: 'cover',
                            borderRadius: 15,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0
                        }}
                    />}
                <View style={{
                    marginTop: 10,
                }}>
                    <Text style={{
                        color: Colors.PRIMARY,
                        fontFamily: 'outfit-medium',
                        fontSize: 24,
                        marginHorizontal: 6
                    }}>
                        {userTrips[0]?.tripPlan?.trip_details?.destination}
                    </Text>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginHorizontal: 6
                    }}>
                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 17,
                            color: Colors.GRAY
                        }}>{moment(LatestTrip.startDate).format('DD-MM-YYYY')}
                        </Text>


                        <View style={{
                            display: 'flex',
                            gap: 2,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingBottom: 5,
                            marginBottom: 5
                        }}>
                            <Text style={{
                                fontSize: 23,
                                color: Colors.GRAY
                            }}>
                                🚌
                            </Text>
                            <Text style={{
                                fontSize: 17,
                                paddingTop: 6,
                                color: Colors.GRAY
                            }}> {LatestTrip.traveler.title}
                            </Text>
                        </View>

                    </View>
                </View>
            </View>
            <TouchableOpacity style={{
                backgroundColor: Colors.PRIMARY,
                borderRadius: 15,
                width: '100%',
                padding: 15,
                marginTop: 16,
            }}
                onPress={() => router.push({
                    pathname: '/trip-details', params: {
                        trip: JSON.stringify(userTrips[0])
                    }
                })}
            >
                <Text style={{
                    color: Colors.WHITE,
                    fontFamily: 'outfit-medium',
                    textAlign: 'center',
                    fontSize: 17,
                }}>See Your Plan</Text>
            </TouchableOpacity>

            {userTrips.map((trip, index) => (
                <TouchableOpacity
                    onPress={() => router.push({
                        pathname: '/trip-details', params: {
                            trip: JSON.stringify(trip)
                        }
                    })}
                >
                    <UserTripCard trip={trip} key={index} />
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

export default UserTrip