import {
  NavigationContainer,
  NavigationHelpersContext,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import styles from '../../styles/AppStyle';
import StandardIcon from '../StandardIcon';

export default function MainHeader() {
  const navigation = useNavigation();
  const onOpenDrawer = () => navigation.openDrawer();

  return (
    <View>
      <View style={styles.mainHeader}>
        <View style={styles.mainHeaderLeftButtons}>
          <StandardIcon
            onOpenDrawer={onOpenDrawer}
            name="bars"
            size={25}
            color="#FFFFFF"
          />
        </View>
        <View style={styles.headerRightButtons}>
          <StandardIcon name="search1" size={25} color="#FFFFFF" />
          <StandardIcon name="form" size={25} color="#FFFFFF" />
          <StandardIcon name="earth" size={25} color="#FFFFFF" />
        </View>
      </View>
    </View>
  );
}
