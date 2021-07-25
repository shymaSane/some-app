import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class HomeScreen extends Component {
    constructor (props){
        super(props)
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('ProfileScreen')} >
                    <Text>Go to Profile</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default HomeScreen