/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-alert */
// import axios from 'axios'
import { takeLatest, call, put } from 'redux-saga/effects'
import { updateSubRequest, updateSubRequestSuccess, updateSubRequestFailure } from '../redux/updateSubjectSlice'
// import { updateSubject } from '../../utils/axios/axios'
import { putRequest } from '../../utils/axios/axios'

export default function* watcherSaga() {
  yield takeLatest(updateSubRequest.type, workerSaga)
}

const commanUrl = process.env.REACT_APP_PORTAL
const updateSubject = ({
  name, description, subjectcode, passingmarks,
}, subjectId) => putRequest(`${ commanUrl }/teacher/updatesubject/${ subjectId }`, {
  name,
  description,
  subjectcode,
  passingmarks,
})

function* workerSaga({ payload }) {
  try {
    const subjectId = localStorage.getItem('subjectId')
    console.log('i am teacherId')
    console.log(subjectId)
    const response = yield call(updateSubject, payload, subjectId)
    alert('Subject Added')
    yield put(updateSubRequestSuccess(response.data))
  } catch (error) {
    yield put(updateSubRequestFailure(error))
  }
}
