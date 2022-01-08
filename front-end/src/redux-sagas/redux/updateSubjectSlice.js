import { createSlice } from '@reduxjs/toolkit'

const signup = createSlice({
  name: 'updateSubject',
  initialState: {
    fetch: false,
    data: [],
    error: null,
  },
  reducers: {
    updateSubRequest: (state) => ({
      ...state,
      fetch: true,
    }),
    updateSubRequestSuccess: (state, { payload }) => ({
      ...state,
      fetch: false,
      data: payload,
    }
    ),
    updateSubRequestFailure: (state, { payload }) => ({
      ...state,
      fetch: false,
      data: null,
      error: payload,
    }),
  },
})

export const {
  updateSubRequest,
  updateSubRequestSuccess,
  updateSubRequestFailure,
} = signup.actions

export default signup.reducer
