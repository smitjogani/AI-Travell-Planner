import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const Loder = () => {
  return (
    <View style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.PRIMARY,
        paddingBottom: '200%'
    }}>
      <Text 
        style={{
            color: Colors.WHITE,
            fontFamily: 'outfit-medium',
            fontSize : 26
        }}
      >Organize Your Vacations.</Text>
    </View>
  )
}

export default Loder