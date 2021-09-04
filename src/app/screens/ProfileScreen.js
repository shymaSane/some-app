import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from '../components/header/Header';

class ProfileScreen extends Component {
  render() {
    return (
      <View>
        <Header />
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default ProfileScreen;
