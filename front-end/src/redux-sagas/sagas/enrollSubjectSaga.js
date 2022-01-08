/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import { takeLatest, call, put } from 'redux-saga/effects'
// import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { enrollRequest, enrollRequestSuccess, enrollRequestFailure } from '../redux/enrollSubjectSlice'
// import { enrollSubject } from '../../utils/axios/axios'
import { putRequest } from '../../utils/axios/axios'

export default function* watcherSaga() {
  yield takeLatest(enrollRequest.type, workerSaga)
}

/* const userSubmit = ({ username, password }) => (
  axios({
    method: 'post',
    url: 'http://localhost:8080/users/login',
    data: {
      username,
      password,
    },
  })
) */
const commanUrl = process.env.REACT_APP_PORTAL
const enrollSubject = (attendance, marks, studentId, subjectId) => putRequest(`${ commanUrl }/student/enrollSubject/`, {
  attendance,
  marks,
  studentId,
  subjectId,
})

function* workerSaga({ payload }) {
  try {
    console.log('in enroll worker saga')
    const studentId = localStorage.getItem('respId')
    const subjectId = localStorage.getItem('subjectId')
    const attendance = 0
    const marks = 0
    console.log(studentId)
    console.log(subjectId)
    const response = yield call(enrollSubject, attendance, marks, studentId, subjectId)
    alert('subject was added')
    yield put(enrollRequestSuccess(null))
  } catch (error) {
    yield put(enrollRequestFailure(error))
  }
}
