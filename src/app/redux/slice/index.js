import {combineReducers} from 'redux';
import stocksDataSlice from './stocksDataSlice';

const rootReducer = combineReducers({
  homeStocks: stocksDataSlice,
});

export default rootReducer;
