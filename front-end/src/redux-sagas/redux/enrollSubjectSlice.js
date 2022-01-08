import { createSlice } from '@reduxjs/toolkit'

const login = createSlice({
  name: 'enroll',
  initialState: {
    fetch: false,
    error: null,
  },
  reducers: {
    enrollRequest: (state) => ({
      ...state,
      fetch: true,
      error: null,
    }),
    enrollRequestSuccess: (state) => ({
      ...state,
      fetch: false,
      error: null,
    }),
    enrollRequestFailure: (state, { payload }) => ({
      ...state,
      fetch: false,
      error: payload,
    }),
  },
})

export const {
  enrollRequest,
  enrollRequestSuccess,
  enrollRequestFailure,
} = login.actions

export default login.reducer
