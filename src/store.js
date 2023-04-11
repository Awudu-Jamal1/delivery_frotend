import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userAcc/users'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig={
  key:'root',
  version:1,
  storage
}
const reducer = combineReducers({
  user:userReducer
})
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
})
export const persistor= persistStore(store)