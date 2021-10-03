import React from 'react'
import {View, Text,TouchableHighlight} from 'react-native'


const About = ({navigation}) => {
    return (
        <View>
            <Text>about us</Text>
            <TouchableHighlight
                onPress={() => navigation.openDrawer()} 
            >
                <Text>ktnl</Text>
            </TouchableHighlight>
        </View>
    )
}

export default About
