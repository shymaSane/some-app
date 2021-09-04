import React, {Component} from 'react';
import {Image} from 'react-native';
import {COLORS} from '../assets/colors';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
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
// const TabNav = createBottomTabNavigator();

// export const tabNavigator = ({navigation}) => {
//   return (
//     <TabNav.Navigator
//       initialRouteName="HomeScreen"
//       tabBarOptions={{
//         showLabel: false,
//         style: {
//           color: COLORS.white,
//           backgroundColor: COLORS.primary,
//           position: 'absolute',
//           bottom: 25,
//           left: 20,
//           right: 20,
//           height: 90,
//           borderRadius: 15,
//           //only for android
//           elevation: 10,
//         },
//       }}
//       // screenOptions={({route}) => ({
//       //   tabBarIcon: ({focused}) => {
//       //     let iconName;

//       //     if (route.name === 'HomeScreen') {
//       //       iconName = focused
//       //         ? require('../assets/images/home-dark.png')
//       //         : require('../assets/images/home-light.png');
//       //     } else if (route.name === 'ProfileScreen') {
//       //       iconName = focused
//       //         ? require('../assets/images/profile-dark.png')
//       //         : require('../assets/images/profile-light.png');
//       //     }

//       //     return (
//       //       <Image
//       //         source={iconName}
//       //         style={{width: 20, height: 20}}
//       //         resizeMode="contain"
//       //       />
//       //     );
//       //   },
//       // })}
//     >
//       <TabNav.Screen name="HomeScreen" component={HomeScreen} />
//       <TabNav.Screen
//         name="ProfileScreen"
//         component={ProfileScreen}
//         options={navOptions}
//       />
//       <TabNav.Screen
//         name="ProfileScreen"
//         component={ProfileScreen}
//         options={navOptions}
//       />
//       <TabNav.Screen
//         name="ExploreScreen"
//         component={ExploreScreen}
//         options={navOptions}
//       />
//     </TabNav.Navigator>
//   );
// };

// stack navigator:

const HomeStack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="bottomHome"
        component={TabNavigator}
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
