import React, {Component} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="drawer" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
