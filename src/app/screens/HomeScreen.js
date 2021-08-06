import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Text, View, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


class HomeScreen extends Component {
   
    render() {
        return (
            <View>
                <StatusBar backgroundColor="#3d3f4b" />
                <TouchableOpacity onPress = {() => 
                    this.props.navigation.navigate('ProfileScreen', {name: 'shyma', id: 123})}>
                    <Text>Go to Profile</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default HomeScreen