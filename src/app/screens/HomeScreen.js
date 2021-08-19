import React, { Component } from 'react'
import { api_key } from '../assets/keys'
import { Text, View, StatusBar, FlatList, ActivityIndicator } from 'react-native'
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
            const response = await fetch(`https://cloud.iexapis.com/stable/stock/market/batch?&types=quote&symbols=AAPL,AMZN,NFLX,GOOG,MSFT,FLAC,FLACU,FLC,LND,LNSR,PDCO,SESN,SFBC,SRE,SRLP&token=${ api_key }` ) 
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
                   renderItem={({ item }) => <Text>{data[item].quote.change}</Text>}
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