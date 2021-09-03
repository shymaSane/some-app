import React, {Component} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FilterScreen from '../screens/FilterScreen';
import WritePostScreen from '../screens/WritePostScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SearchScreen from '../screens/SettingsScreen';
import MyWatchList from '../screens/MyWatchList';
//Navigation options:
const navOptions = () => ({
  headerShown: false,
});

//notes:
// tab navigator is nested in home and profile
//i want to access drawer from any screen
//i want to acess the main header from any screen except drawer

///Tab Navigator
const TabNav = createBottomTabNavigator();

export const tabNavigator = () => {
  return (
    <TabNav.Navigator>
      <TabNav.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={navOptions}
      />
      <TabNav.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={navOptions}
      />
    </TabNav.Navigator>
  );
};

// stack navigator:

const HomeStack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="bottomHome"
        component={tabNavigator}
        options={navOptions}
      />
      <HomeStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={navOptions}
      />
      <HomeStack.Screen
        name="WritePostScreen"
        component={WritePostScreen}
        options={navOptions}
      />
      <HomeStack.Screen
        name="FilterScreen"
        component={FilterScreen}
        options={navOptions}
      />
      <HomeStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={navOptions}
      />
      <HomeStack.Screen
        name="MyWatchList"
        component={MyWatchList}
        options={navOptions}
      />
    </HomeStack.Navigator>
  );
};

//drawer

const Drawer = createDrawerNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="drawer" component={HomeStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
