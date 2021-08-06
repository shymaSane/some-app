import React from 'react'
import { View, Text } from 'react-native';
import styles from '../styles/AppStyle';
import Icon from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeHeader = () => {
    return (
        <View>
            <View style ={styles.header}>
                    <View style={styles.headerRightButtons}>
                        <TouchableOpacity>
                            <Icon name='bars' size={25} color= "#FFFFFF" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerLeftButtons}>
                        <TouchableOpacity>
                            <Icon name='search1' size={25} color= "#FFFFFF" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name='form' size={25} color= "#FFFFFF" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name='earth' size={25} color= "#FFFFFF" />
                        </TouchableOpacity>
                    </View>
               
            </View>
        </View>
    )
}

export default HomeHeader