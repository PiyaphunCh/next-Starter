'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface nameState {
  name: String
}

const initialState: nameState = {
  name: 'ss'
}

const setName = createSlice({
  name: 'setName',
  initialState,
  reducers: {
    setNameReducer: (state, action: PayloadAction<String>) => {
      state.name = action.payload
    }
  }
})

export const { setNameReducer } = setName.actions
export default setName.reducer
