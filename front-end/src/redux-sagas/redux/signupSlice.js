import { createSlice } from '@reduxjs/toolkit'

const signup = createSlice({
  name: 'signup',
  initialState: {
    fetch: false,
    data: [],
    error: null,
  },
  reducers: {
    signupRequest: (state) => ({
      ...state,
      fetch: true,
    }),
    signupRequestSuccess: (state, { payload }) => ({
      ...state,
      fetch: false,
      data: payload,
    }
    ),
    signupRequestFailure: (state, { payload }) => ({
      ...state,
      fetch: false,
      data: null,
      error: payload,
    }),
  },
})

export const {
  signupRequest,
  signupRequestSuccess,
  signupRequestFailure,
} = signup.actions

export default signup.reducer
