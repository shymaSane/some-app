import React from 'react'
import { View, Text } from 'react-native';
import styles from '../styles/AppStyle';
import Icon from 'react-native-vector-icons/Entypo'
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeHeader = () => {
    return (
        <View style ={styles.header}>
            <View>
                <TouchableOpacity>
                    <Icon name='menu' size={30} color= "#900" />
                </TouchableOpacity>
                <Text>this is home header</Text>
            </View>
        </View>
    )
}

export default HomeHeader