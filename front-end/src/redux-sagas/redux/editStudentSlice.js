import { createSlice } from '@reduxjs/toolkit'

const signup = createSlice({
  name: 'editStudent',
  initialState: {
    fetch: false,
    data: [],
    error: null,
  },
  reducers: {
    editRequest: (state) => ({
      ...state,
      fetch: true,
    }),
    editRequestSuccess: (state, { payload }) => ({
      ...state,
      fetch: false,
      data: payload,
    }
    ),
    editRequestFailure: (state, { payload }) => ({
      ...state,
      fetch: false,
      data: null,
      error: payload,
    }),
  },
})

export const {
  editRequest,
  editRequestSuccess,
  editRequestFailure,
} = signup.actions

export default signup.reducer
