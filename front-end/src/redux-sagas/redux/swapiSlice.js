import { createSlice } from '@reduxjs/toolkit'

const fetchData = createSlice({
  name: 'fetchData',
  initialState: {
    fetch: false,
    data: [],
    error: null,
  },
  reducers: {
    peopleRequest: (state) => ({
      ...state,
      fetch: true,
      error: null,
    }),
    peopleRequestSuccess: (state, { payload }) => ({
      ...state,
      fetch: false,
      data: payload,
    }),
    peopleRequestFailure: (state, { payload }) => ({
      ...state,
      fetch: false,
      data: null,
      error: payload,
    }),
  },
})

export const {
  peopleRequest,
  peopleRequestSuccess,
  peopleRequestFailure,
} = fetchData.actions

export default fetchData.reducer
