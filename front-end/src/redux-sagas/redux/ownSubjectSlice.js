import { createSlice } from '@reduxjs/toolkit'

const fetchData = createSlice({
  name: 'ownData',
  initialState: {
    fetch: false,
    data: [],
    error: null,
  },
  reducers: {
    ownSubjectRequest: (state) => ({
      ...state,
      fetch: true,
      error: null,
    }),
    ownSubjectRequestSuccess: (state, { payload }) => ({
      ...state,
      fetch: false,
      data: payload,
    }),
    ownSubjectRequestFailure: (state, { payload }) => ({
      ...state,
      fetch: false,
      data: null,
      error: payload,
    }),
  },
})

export const {
  ownSubjectRequest,
  ownSubjectRequestSuccess,
  ownSubjectRequestFailure,
} = fetchData.actions

export default fetchData.reducer
