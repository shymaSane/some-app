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
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <View>
        <Image
          source={require('../assets/images/home-light.png')}
          resizeMode="contain"
          style={{width: 30, height: 30, color: COLORS.decrease}}
        />
        <Text>HOME</Text>
      </View>
    </TouchableOpacity>
  );
};

const Tab = createBottomTabNavigator();

export default TabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          height: 70,
          borderTopWidth: 1,
          borderTopColor: COLORS.primary,
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
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
