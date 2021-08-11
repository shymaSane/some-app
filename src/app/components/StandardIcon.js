import React from 'react'
import { View} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign'
import styles from '../styles/AppStyle'

const StandardIcon = (props) => {
    return (
        <View style = { styles.iconContainer }>  
            <TouchableOpacity>
                <Icon name = { props.name } size = { props.size } color = { props.color } />
            </TouchableOpacity>
        </View>
    )
}

export default StandardIcon;
