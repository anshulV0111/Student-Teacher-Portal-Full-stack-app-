/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-alert */
// import axios from 'axios'
import { takeLatest, call, put } from 'redux-saga/effects'
import { editRequest, editRequestSuccess, editRequestFailure } from '../redux/editStudentSlice'
// import { editStudent } from '../../utils/axios/axios'
import { putRequest } from '../../utils/axios/axios'

export default function* watcherSaga() {
  yield takeLatest(editRequest.type, workerSaga)
}

const commanUrl = process.env.REACT_APP_PORTAL
const editStudent = ({ attendance, marks }, enId) => putRequest(`${ commanUrl }/teacher/editSubjectStudent/${ enId }`, {
  attendance,
  marks,
})

function* workerSaga({ payload }) {
  try {
    const enId = localStorage.getItem('enId')
    console.log('i am editId')
    console.log(enId)
    const response = yield call(editStudent, payload, enId)
    alert('Subject Added')
    yield put(editRequestSuccess(response.data))
  } catch (error) {
    yield put(editRequestFailure(error))
  }
}
