//creating redux store
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './slice/index';

export default configureStore({
  reducer: rootReducer,
});
