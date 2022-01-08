/* eslint-disable max-len */
/* eslint-disable no-console */
import { takeLatest, call, put } from 'redux-saga/effects'
import { enrollSubjectRequest, enrollSubjectRequestSuccess, enrollSubjectRequestFailure } from '../redux/ownEnrolledSlice'
// import { getOwnEnroll } from '../../utils/axios/axios'
import { getRequest } from '../../utils/axios/axios'

export default function* watcherSaga() {
  yield takeLatest(enrollSubjectRequest.type, workerSaga)
}

const commanUrl = process.env.REACT_APP_PORTAL
const getOwnEnroll = (studentId, page, rowsPerPage, order, orderBy, minAtten, maxAtten, minMarks, maxMarks) => getRequest(`${ commanUrl }/student/enrolledSubjects/${ studentId }?page=${ page }&pageSize=${ rowsPerPage }&orderBy=${ orderBy }&order=${ order }&minMarks=${ minMarks }&maxMarks=${ maxMarks }&minAtten=${ minAtten }&maxAtten=${ maxAtten }`)

function* workerSaga({ payload }) {
  try {
    const {
      page, rowsPerPage, order, orderBy, minAtten, maxAtten, minMarks, maxMarks,
    } = payload
    const studentId = localStorage.getItem('respId')
    console.log('i am teacherId in own saga')
    console.log(studentId)
    const response = yield call(getOwnEnroll, studentId, page, rowsPerPage, order, orderBy, minAtten, maxAtten, minMarks, maxMarks)
    localStorage.setItem('response', JSON.stringify(response.data))
    console.log(response.data)
    yield put(enrollSubjectRequestSuccess(response.data.subjects))
  } catch (error) {
    yield put(enrollSubjectRequestFailure(error))
  }
}
