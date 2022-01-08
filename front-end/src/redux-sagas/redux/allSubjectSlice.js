import { createSlice } from '@reduxjs/toolkit'

const fetchData = createSlice({
  name: 'fetchData',
  initialState: {
    fetch: false,
    data: [],
    error: null,
  },
  reducers: {
    subjectRequest: (state) => ({
      ...state,
      fetch: true,
      error: null,
    }),
    subjectRequestSuccess: (state, { payload }) => ({
      ...state,
      fetch: false,
      data: payload,
    }),
    subjectRequestFailure: (state, { payload }) => ({
      ...state,
      fetch: false,
      data: null,
      error: payload,
    }),
  },
})

export const {
  subjectRequest,
  subjectRequestSuccess,
  subjectRequestFailure,
} = fetchData.actions

export default fetchData.reducer
