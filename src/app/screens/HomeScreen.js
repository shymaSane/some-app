import React, {Component} from 'react';
import {api_key} from '../assets/keys';
import {
  Text,
  View,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import HomeStocks from '../components/HomeStocks';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  getStocks = async () => {
    try {
      const response = await fetch(
        `https://cloud.iexapis.com/stable/stock/market/batch?&types=quote,logo&symbols=AAPL,AMZN,NFLX,GOOG,MSFT,FLAC,FLACU,FLC,LND,LNSR,PDCO,SESN,SFBC,SRE,SRLP&token=${api_key}`,
      );
      const json = await response.json();
      this.setState({data: json});
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({isLoading: false});
    }
  };

  componentDidMount() {
    this.getStocks();
  }

  render() {
    const {data, isLoading} = this.state;
    return (
      <View>
        <StatusBar backgroundColor="#3d3f4b" />
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={Object.keys(data)}
            renderItem={({item}) => (
              <HomeStocks
                logo={data[item].logo.url}
                symbole={data[item].quote.symbol}
                name={data[item].quote.companyName}
                change={data[item].quote.change}
                changePercent={data[item].quote.changePercent}
                buying={data[item].quote.iexAskPrice}
                selling={data[item].quote.iexBidPrice}
              />
            )}
          />
        )}
      </View>
    );
  }
}

export default HomeScreen;
