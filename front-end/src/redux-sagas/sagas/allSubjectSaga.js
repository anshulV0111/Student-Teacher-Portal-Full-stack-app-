/* eslint-disable max-len */
/* eslint-disable no-console */
import { takeLatest, call, put } from 'redux-saga/effects'
import { subjectRequest, subjectRequestSuccess, subjectRequestFailure } from '../redux/allSubjectSlice'
// import { getAll } from '../../utils/axios/axios'
import { getRequest } from '../../utils/axios/axios'

export default function* watcherSaga() {
  yield takeLatest(subjectRequest.type, workerSaga)
}

const commanUrl = process.env.REACT_APP_PORTAL

const getAll = (page, rowsPerPage, order, orderBy, minMarks, maxMarks) => getRequest(`${ commanUrl }/users/all?page=${ page }&pageSize=${ rowsPerPage }&orderBy=${ orderBy }&order=${ order }&minPassMarks=${ minMarks }&maxPassMarks=${ maxMarks }`)

function* workerSaga({ payload }) {
  try {
    const {
      page, rowsPerPage, order, orderBy, minMarks, maxMarks,
    } = payload
    console.log(payload)
    console.log(page)
    console.log(rowsPerPage)
    const response = yield call(getAll, page, rowsPerPage, order, orderBy, minMarks, maxMarks)
    localStorage.setItem('response', JSON.stringify(response.data))
    console.log(response.data)
    yield put(subjectRequestSuccess(response.data))
  } catch (error) {
    yield put(subjectRequestFailure(error))
  }
}
