import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
export const loginSlice=createSlice({
    name:'login',

    initialState:{
        user:null
    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
        },
        logout:(state,action)=>{
            state.user=null;
        }
    }
})

export const {login,logout}=loginSlice.actions;

export const selectUser=(state)=>state.user
export default loginSlice.reducer;