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
        state.user =null
        state.logged=false
        state.token=null
    }
}
})

export const {login,logout,setTokens} = userInfo.actions
export const selectUser =(state)=>state.user
// export const setToken =(state) =>state.

export default userInfo.reducer;