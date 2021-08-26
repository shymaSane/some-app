import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Header from './Header';
import store from '../redux/store';
import {Provider} from 'react-redux';

const Stack = createStackNavigator();

export default class NavigationIndex extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                header: () => <Header />,
              }}
            />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
