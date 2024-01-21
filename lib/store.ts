import { configureStore } from '@reduxjs/toolkit'
import setName from './features/setName/setNameSlice'

export const store = configureStore({
  reducer: {
    setName
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
