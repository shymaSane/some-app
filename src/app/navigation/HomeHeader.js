import React from 'react'
import { View} from 'react-native';
import styles from '../styles/AppStyle';
import StandardIcon from '../components/StandardIcon'

const HomeHeader = () => {
    return (
        <View>
            <View style = { styles.header }>
                <View style = { styles.headerLeftButtons }>
                        <StandardIcon name = 'bars' size = {25} color= "#FFFFFF" />
                    </View>
                    <View style = { styles.headerRightButtons }>
                        <StandardIcon name = 'search1' size = {25} color= "#FFFFFF" />
                        <StandardIcon name = 'form' size = {25} color= "#FFFFFF" />
                        <StandardIcon name = 'earth' size = {25} color= "#FFFFFF" />
                    </View>
               
            </View>
        </View>
    )
}

export default HomeHeader