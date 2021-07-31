import React, { Component } from 'react'
import { Text, View } from 'react-native'

class ProfileScreen extends Component {
    render() {
        console.log(this.props.route.params)

        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

export default ProfileScreen;