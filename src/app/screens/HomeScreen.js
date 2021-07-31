import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


class HomeScreen extends Component {
   
    render() {
        return (
            <View>
                <TouchableOpacity onPress = {() => 
                    this.props.navigation.navigate('ProfileScreen', {name: 'shyma', id: 123})}>
                    <Text>Go to Profile</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default HomeScreen