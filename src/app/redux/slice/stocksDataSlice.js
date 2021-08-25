import {createSlice} from '@reduxjs/toolkit';

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

//when we use selector we call the recuder name in combine reducer
export const stocksDataSelector = (state) => state.homeStocks;

export default stocksDataSlice.reducer;

// // const getInitialData = (state, action) =>{

// // }

// export default reducerRoot = (state = initialState, action) => {
//   switch (action.type) {
//     case 'GET_DATA': {
//       return {
//         ...state,
//       };
//     }
//   }
// };
