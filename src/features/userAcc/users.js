import { createSlice } from '@reduxjs/toolkit'

export const userInfo= createSlice({
    name:'users',
initialState:{
    user:null,
    logged:false,
    token:null
},
reducers:{
    login:(state,action)=>{
        state.user =action.payload

    },
    setTokens:(state,action)=>{
        state.logged=true
        state.token=action.payload
    },
    logout:(state,action)=>{
        state.user =action.payload
        state.logged=false
        state.token=action.payload
    }
}
})

export const {login,logout,setTokens,logged} = userInfo.actions
export const selectUser =(state)=>state.user.user


export default userInfo.reducer;