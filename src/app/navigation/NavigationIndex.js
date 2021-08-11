import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MainHeader from './MainHeader';

const Stack = createStackNavigator();

export default class NavigationIndex extends Component {
    render() {
        return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={{
                    header: () => <MainHeader />,
                }} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        )
    }
}
