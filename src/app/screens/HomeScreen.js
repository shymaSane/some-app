import React, { Component } from 'react'
import { api_key } from '../assets/keys'
import { Text, View, StatusBar, FlatList, ActivityIndicator, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'


class HomeScreen extends Component {
    constructor (props){
        super(props)
        this.state ={
            data: [],
            isLoading: true, 
        }
    }
    
   getStocks = async () => {
        try{
            const response = await fetch(`https://cloud.iexapis.com/stable/stock/market/batch?&types=quote,logo&symbols=AAPL,AMZN,NFLX,GOOG,MSFT,FLAC,FLACU,FLC,LND,LNSR,PDCO,SESN,SFBC,SRE,SRLP&token=${ api_key }` ) 
            const json = await response.json()
            this.setState({data: json})
        }
        catch (error) {
            console.log(error)
        }
        finally{
            this.setState({isLoading: false})
        }
    }

    componentDidMount() {
        this.getStocks();
      }


    
    render() {
        const {data, isLoading} = this.state
        return (
            <View>
                <StatusBar backgroundColor="#3d3f4b" />
                {isLoading ? <ActivityIndicator /> :(
                   <FlatList
                   data={Object.keys(data)}
                   renderItem={({ item }) => (
                    <View> 
                        {/* ask price buying
                        bid price selling */}
                        <Image source={{uri: `${data[item].logo.url}`}} style = {{width: 100, height: 100}}/>
                        <Text>{data[item].quote.symbol}</Text>
                        <Text>{data[item].quote.companyName}</Text>
                        <Text>{data[item].quote.change}</Text>
                        <Text>{data[item].quote.changePercent}</Text>
                        <Text>{data[item].quote.iexAskPrice}</Text>
                        <Text>{data[item].quote.iexBidPrice}</Text>
                    </View>
                   
                   )}
                 />
                )}
                
                
            </View>
        )
    }
}

export default HomeScreen



            // function resolveData (obj) {
            //     Object.keys(obj).forEach(function (key) {
            //         if (typeof obj[key] === 'object') {
            //             return resolveData(obj[key]);
            //         }
            //         obj[key] = 0;
            //     });
            // }