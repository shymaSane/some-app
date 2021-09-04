import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ExploreScreen from '../screens/ExploreScreen';
import {COLORS} from '../assets/colors';

//tab bar
export const TabIcon = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Home')}
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../assets/images/home-light.png')}
          resizeMode="contain"
          style={{width: 25, height: 25, marginBottom: 2}}
        />
        <Text style={{fontSize: 10}}>HOME</Text>
      </View>
    </TouchableOpacity>
  );
};

const Tab = createBottomTabNavigator();

export default TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          height: 70,
          // borderTopWidth: 1,
          // borderTopColor: COLORS.primary,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => {
          return {
            tabBarIcon: () => <TabIcon navigation={navigation} />,
          };
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={({navigation}) => {
          return {
            tabBarIcon: () => <TabIcon navigation={navigation} />,
          };
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({navigation}) => {
          return {
            tabBarIcon: () => <TabIcon navigation={navigation} />,
          };
        }}
      />
    </Tab.Navigator>
  );
};
