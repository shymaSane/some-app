import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './src/app/redux/store'
import RootNavigator from './src/app/navigation/RootNavigator'


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootNavigator />
            </Provider>
        )
    }
}


