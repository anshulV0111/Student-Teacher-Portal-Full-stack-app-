import { createSlice } from '@reduxjs/toolkit'

const fetchData = createSlice({
  name: 'ownEnroll',
  initialState: {
    fetch: false,
    data: [],
    error: null,
  },
  reducers: {
    enrollSubjectRequest: (state) => ({
      ...state,
      fetch: true,
      error: null,
    }),
    enrollSubjectRequestSuccess: (state, { payload }) => ({
      ...state,
      fetch: false,
      data: payload,
    }),
    enrollSubjectRequestFailure: (state, { payload }) => ({
      ...state,
      fetch: false,
      data: null,
      error: payload,
    }),
  },
})

export const {
  enrollSubjectRequest,
  enrollSubjectRequestSuccess,
  enrollSubjectRequestFailure,
} = fetchData.actions

export default fetchData.reducer
