/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-alert */
// import axios from 'axios'
import { takeLatest, call, put } from 'redux-saga/effects'
import { addSubRequest, addSubRequestSuccess, addSubRequestFailure } from '../redux/addSubjectSlice'
// import { addSub } from '../../utils/axios/axios'
import { postRequest } from '../../utils/axios/axios'

export default function* watcherSaga() {
  yield takeLatest(addSubRequest.type, workerSaga)
}

const commanUrl = process.env.REACT_APP_PORTAL

const addSub = ({
  name, description, subjectcode, passingmarks,
}, teacher) => postRequest(`${ commanUrl }/teacher/add`, {
  name,
  description,
  subjectcode,
  passingmarks,
  teacherId: teacher,
})

function* workerSaga({ payload }) {
  try {
    const teacherId = localStorage.getItem('respId')
    console.log('i am teacherId')
    console.log(teacherId)
    const response = yield call(addSub, payload, teacherId)
    alert('Subject Added')
    yield put(addSubRequestSuccess(response.data))
  } catch (error) {
    yield put(addSubRequestFailure(error))
  }
}
