import { createSlice } from '@reduxjs/toolkit'

const signup = createSlice({
  name: 'addSubject',
  initialState: {
    fetch: false,
    data: [],
    error: null,
  },
  reducers: {
    addSubRequest: (state) => ({
      ...state,
      fetch: true,
    }),
    addSubRequestSuccess: (state, { payload }) => ({
      ...state,
      fetch: false,
      data: payload,
    }
    ),
    addSubRequestFailure: (state, { payload }) => ({
      ...state,
      fetch: false,
      data: null,
      error: payload,
    }),
  },
})

export const {
  addSubRequest,
  addSubRequestSuccess,
  addSubRequestFailure,
} = signup.actions

export default signup.reducer
