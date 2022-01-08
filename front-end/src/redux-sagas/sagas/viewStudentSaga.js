/* eslint-disable max-len */
/* eslint-disable no-console */
import { takeLatest, call, put } from 'redux-saga/effects'
import { viewStudentRequest, viewStudentRequestSuccess, viewStudentRequestFailure } from '../redux/viewStudentSlice'
// import { getStudents } from '../../utils/axios/axios'
import { getRequest } from '../../utils/axios/axios'

export default function* watcherSaga() {
  yield takeLatest(viewStudentRequest.type, workerSaga)
}

const commanUrl = process.env.REACT_APP_PORTAL
const getStudents = (subjectId, page, rowsPerPage, order, orderBy, minAtten, maxAtten, minMarks, maxMarks) => getRequest(`${ commanUrl }/teacher/ownStudents/${ subjectId }?page=${ page }&pageSize=${ rowsPerPage }&orderBy=${ orderBy }&order=${ order }&minMarks=${ minMarks }&maxMarks=${ maxMarks }&minAtten=${ minAtten }&maxAtten=${ maxAtten }`)

function* workerSaga({ payload }) {
  try {
    const {
      page, rowsPerPage, order, orderBy, minAtten, maxAtten, minMarks, maxMarks,
    } = payload
    const subjectId = localStorage.getItem('subjectId')
    console.log('i am viewStudentRequest in own saga')
    console.log(subjectId)
    const response = yield call(getStudents, subjectId, page, rowsPerPage, order, orderBy, minAtten, maxAtten, minMarks, maxMarks)
    localStorage.setItem('response', JSON.stringify(response.data))
    console.log(response.data[ 0 ].students)
    yield put(viewStudentRequestSuccess(response.data[ 0 ].students))
  } catch (error) {
    yield put(viewStudentRequestFailure(error))
  }
}
