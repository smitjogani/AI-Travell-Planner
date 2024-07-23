import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const Profile = () => {
  return (
    <View style={{
      padding: 10,
      paddingTop: '80%'
    }}>
      <TouchableOpacity style={{
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        marginTop: 35,
        width: '100%'
      }}>
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: 'center',
            fontSize: 16,
            fontFamily: 'outfit'
          }}
        >Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile