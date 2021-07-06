import 'react-native-gesture-handler';
import React,{ Component } from 'react';
import { Text,  View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
class App extends Component{
  render() {
    return(
     <Text>Hello</Text>
    )
  }
  
}

export default App; 