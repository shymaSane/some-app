import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/AppStyle';
import StandardIcon from '../StandardIcon';

const SecondaryHeader = () => {
  return (
    <View>
      <View style={styles.secondaryHeader}>
        <View style={styles.secondaryHeaderLeftButtons}>
          <Text style={styles.secondaryHeaderTitle}> My Watchlist </Text>
          <StandardIcon name="down" size={15} color="#3d3f4b" />
        </View>
        <View style={styles.headerRightButtons}>
          <StandardIcon name="filter" size={20} color="#3d3f4b" />
          <StandardIcon name="setting" size={20} color="#3d3f4b" />
        </View>
      </View>
    </View>
  );
};

export default SecondaryHeader;
