import { createSlice } from '@reduxjs/toolkit'

const login = createSlice({
  name: 'deleteSubject',
  initialState: {
    fetch: false,
    error: null,
  },
  reducers: {
    deleteRequest: (state) => ({
      ...state,
      fetch: true,
      error: null,
    }),
    deleteRequestSuccess: (state) => ({
      ...state,
      fetch: false,
      error: null,
    }),
    deleteRequestFailure: (state, { payload }) => ({
      ...state,
      fetch: false,
      error: payload,
    }),
  },
})

export const {
  deleteRequest,
  deleteRequestSuccess,
  deleteRequestFailure,
} = login.actions

export default login.reducer
