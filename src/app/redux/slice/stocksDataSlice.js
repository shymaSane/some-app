import {createSlice} from '@reduxjs/toolkit';
import {api_key} from '../../assets/keys';

const initialState = {
  stocksData: {},
  isLoading: false,
  hasError: false,
};

export const stocksDataSlice = createSlice({
  name: 'stocksData',
  initialState,
  reducers: {
    getStocksData: (state) => {
      state.isLoading = true;
    },
    getStocksDataSuccess: (state, {payload}) => {
      (state.stocksData = payload),
        (state.isLoading = false),
        (state.hasError = false);
    },
    getStocksDataFailure: (state) => {
      (state.isLoading = false), (state.hasError = true);
    },
  },
});

export const {
  getStocksData,
  getStocksDataSuccess,
  getStocksDataFailure,
} = stocksDataSlice.actions;

//when we use selector we call the recuder name in combineReducer
export const stocksDataSelector = (state) => state.homeStocks;

export default stocksDataSlice.reducer;

export const fetchStockData = () => {
  return async (dispatch) => {
    dispatch(getStocksData());

    try {
      const response = await fetch(
        `https://cloud.iexapis.com/stable/stock/market/batch?&types=quote,logo&symbols=AAPL,AMZN,NFLX,GOOG,MSFT,FLAC,FLACU,FLC,LND,LNSR,PDCO,SESN,SFBC,SRE,SRLP&token=${api_key}`,
      );
      const json = await response.json();
      dispatch(getStocksDataSuccess(json));
    } catch {
      dispatch(getStocksDataFailure());
    }
  };
};
