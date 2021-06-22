import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import Styles from './Styles'

class Landing extends Component {
    render() {
        return (
            <View style = {Styles.container}>
                <Image source={require('../../utilities/yes-bank-logo.png')} style={Styles.landingImage}/>
                <TouchableOpacity style={Styles.landingButton}>
                    <Text style={Styles.landingButtonText}>English</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Landing;