import { createSlice } from '@reduxjs/toolkit'

const fetchData = createSlice({
  name: 'ownData',
  initialState: {
    fetch: false,
    data: [],
    error: null,
  },
  reducers: {
    viewStudentRequest: (state) => ({
      ...state,
      fetch: true,
      error: null,
    }),
    viewStudentRequestSuccess: (state, { payload }) => ({
      ...state,
      fetch: false,
      data: payload,
    }),
    viewStudentRequestFailure: (state, { payload }) => ({
      ...state,
      fetch: false,
      data: null,
      error: payload,
    }),
  },
})

export const {
  viewStudentRequest,
  viewStudentRequestSuccess,
  viewStudentRequestFailure,
} = fetchData.actions

export default fetchData.reducer
