/* eslint-disable max-len */
/* eslint-disable no-console */
import { takeLatest, call, put } from 'redux-saga/effects'
import { ownSubjectRequest, ownSubjectRequestSuccess, ownSubjectRequestFailure } from '../redux/ownSubjectSlice'
// import { getOwnTeacher } from '../../utils/axios/axios'
import { getRequest } from '../../utils/axios/axios'

export default function* watcherSaga() {
  yield takeLatest(ownSubjectRequest.type, workerSaga)
}

const commanUrl = process.env.REACT_APP_PORTAL
const getOwnTeacher = ({
  teacherId, page, rowsPerPage, order, orderBy, minMarks, maxMarks,
}) => getRequest(`${ commanUrl }/teacher/ownSubjects/${ teacherId }?page=${ page }&pageSize=${ rowsPerPage }&orderBy=${ orderBy }&order=${ order }&minPassMarks=${ minMarks }&maxPassMarks=${ maxMarks }`)

function* workerSaga({ payload }) {
  try {
    const {
      page, rowsPerPage, order, orderBy, minMarks, maxMarks,
    } = payload
    const teacherId = localStorage.getItem('respId')
    console.log('i am teacherId in own saga')
    console.log(teacherId)
    console.log(page)
    console.log(rowsPerPage)
    const response = yield call(getOwnTeacher, {
      teacherId, page, rowsPerPage, order, orderBy, minMarks, maxMarks,
    })
    // yield put(ownSubjectRequestSuccess(response.data))
    localStorage.setItem('response', JSON.stringify(response.data))
    console.log(response.data)
    yield put(ownSubjectRequestSuccess(response.data))
  } catch (error) {
    yield put(ownSubjectRequestFailure(error))
  }
}
