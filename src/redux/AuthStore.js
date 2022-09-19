
import {configureStore} from '@reduxjs/toolkit'
import useReducer from './AuthSlice'
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
const userDataPersistConfig = {
    key: 'userAuth',
    storage: storage,
  };
export default configureStore({
    reducer:{
        user:persistReducer(userDataPersistConfig, useReducer),
    },
})

