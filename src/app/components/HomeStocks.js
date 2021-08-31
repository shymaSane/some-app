import React from 'react';
import {View, Text, Image} from 'react-native';

const HomeStocks = (props) => {
  return (
    <View>
      {/* ask price buying
            bid price selling  */}
      <Image source={props.logo ? {uri: props.logo } : null} style={{width: 50, height: 50}} />
      <Text>{props.symbol}</Text>
      <Text>{props.name}</Text>
      <Text>{props.change}</Text>
      <Text>{props.changePercent}</Text>
      <Text>{props.buying}</Text>
      <Text>{props.selling}</Text>
    </View>
  );
};

export default HomeStocks;
