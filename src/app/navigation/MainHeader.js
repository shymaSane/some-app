import React from 'react';
import {View} from 'react-native';
import styles from '../styles/AppStyle';
import StandardIcon from '../components/StandardIcon';
import SecondaryHeader from './SecondaryHeader';

const MainHeader = () => {
  return (
    <View>
      <View style={styles.mainHeader}>
        <View style={styles.mainHeaderLeftButtons}>
          <StandardIcon name="bars" size={25} color="#FFFFFF" />
        </View>
        <View style={styles.headerRightButtons}>
          <StandardIcon name="search1" size={25} color="#FFFFFF" />
          <StandardIcon name="form" size={25} color="#FFFFFF" />
          <StandardIcon name="earth" size={25} color="#FFFFFF" />
        </View>
      </View>
      <SecondaryHeader />
    </View>
  );
};

export default MainHeader;
