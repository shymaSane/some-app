import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


class HomeScreen extends Component {
   
    render() {
        return (
            <View>
                <TouchableOpacity onPress = {() => 
                    this.props.navigation.navigate('ProfileScreen', {name: 'shyma', id: 123})}>
                    <Text>Go to Profile</Text>
                    <Icon name='rocket' size={30} color= "#900" />
                </TouchableOpacity>
            </View>
        )
    }
}

export default HomeScreen