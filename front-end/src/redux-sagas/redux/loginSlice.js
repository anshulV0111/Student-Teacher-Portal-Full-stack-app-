import { createSlice } from '@reduxjs/toolkit'

const login = createSlice({
  name: 'login',
  initialState: {
    fetch: false,
    error: null,
    isLogin: false,
  },
  reducers: {
    logoutRequest: (state) => ({
      ...state,
      isLogin: false,
    }),
    loginRequest: (state) => ({
      ...state,
      fetch: true,
      error: null,
    }),
    loginRequestSuccess: (state) => ({
      ...state,
      fetch: false,
      error: null,
      isLogin: true,
    }),
    loginRequestFailure: (state, { payload }) => ({
      ...state,
      fetch: false,
      error: payload,
      isLogin: false,
    }),
  },
})

export const {
  logoutRequest,
  loginRequest,
  loginRequestSuccess,
  loginRequestFailure,
} = login.actions

export default login.reducer
