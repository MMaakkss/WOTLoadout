import { authApi } from '@/api/authApi.ts'
import { vehicleApi } from '@/api/vehicleApi'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [vehicleApi.reducerPath]: vehicleApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, vehicleApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
