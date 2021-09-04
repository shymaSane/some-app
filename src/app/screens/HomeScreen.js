import React, {useEffect} from 'react';
import {View, StatusBar, FlatList, ActivityIndicator, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  fetchStockData,
  stocksDataSelector,
} from '../redux/slice/stocksDataSlice';
import HomeStocks from '../components/HomeStocks';
import styles from '../styles/AppStyle';
import Header from '../components/header/Header';

export default function HomeScreen() {
  const dispatch = useDispatch();

  //we are fetching these data from rootreducer
  const {stocksData, isLoading, hasError} = useSelector(stocksDataSelector);
  // console.log(stocksData);

  // dispatches thunk when component first mounts
  useEffect(() => {
    dispatch(fetchStockData());
  }, [dispatch]);
  
  return (
    <View>
      <StatusBar backgroundColor="#3d3f4b" />
      <Header />
      <View style={styles.homeBanner}>
        <View>
          <Text style={styles.homeBannerSecondary}>MARKETS</Text>
        </View>

        <View style={styles.homeBannerPrimary}>
          <Text style={styles.homeBannerSecondary}>SELL</Text>
          <Text style={styles.homeBannerSecondary}>BUY</Text>
        </View>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={Object.keys(stocksData)}
            renderItem={({item}) => (
              <HomeStocks
                logo={stocksData[item].logo.url}
                symbole={stocksData[item].quote.symbol}
                name={stocksData[item].quote.companyName}
                change={stocksData[item].quote.change}
                changePercent={stocksData[item].quote.changePercent}
                buying={stocksData[item].quote.iexAskPrice}
                selling={stocksData[item].quote.iexBidPrice}
              />
            )}
          />
        )}
      </View>
    </View>
  );
}
