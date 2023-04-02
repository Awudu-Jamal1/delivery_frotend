import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userAcc/users'

export default configureStore({
  reducer: {
    user: userReducer
  },
})