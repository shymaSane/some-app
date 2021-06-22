import React,{ Component } from 'react';
import { Text,  View } from 'react-native';
import Landing from './components/auth/Landing'

class App extends Component{
  render() {
    return(
      <View>
          <Landing />
      </View>
    )
  }
}

export default App; 