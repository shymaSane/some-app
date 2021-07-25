import React, { Component } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

export default class NavigationIndex extends Component {
    render() {
        return (
            <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>
        )
    }
}




// const AppNavigator = createStackNavigator({
//     Home: {
//         screen: HomeScreen
//     },
//     Profile: {
//         screen: ProfileScreen
//     }
// })