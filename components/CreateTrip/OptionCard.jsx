import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from "../../constants/Colors"

const OptionCard = ({ option, selectedOption }) => {
    return (
        <View style={[{
            padding: 25,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
        }, selectedOption?.id == option.id && {
            borderWidth: 4,
            borderColor: Colors.LIME
        }]}>
            <View>
                <Text style={{
                    fontSize: 20,
                    fontFamily: 'outfit-bold',
                    color: Colors.LIME
                }}>{option?.title}</Text>

                <Text style={{
                    fontSize: 17,
                    fontFamily: 'outfit',
                    color: Colors.WHITE
                }}>{option?.desc}</Text>
            </View>

            <View>
                <Text style={{
                    fontSize: 35
                }}>{option?.icon}</Text>
            </View>
        </View>
    )
}

export default OptionCard