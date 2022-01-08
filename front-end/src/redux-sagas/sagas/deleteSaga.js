/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import { takeLatest, call, put } from 'redux-saga/effects'
import { deleteRequest, deleteRequestSuccess, deleteRequestFailure } from '../redux/deleteSlice'
// import { deleteSubject } from '../../utils/axios/axios'
import { deleteReq } from '../../utils/axios/axios'

export default function* watcherSaga() {
  yield takeLatest(deleteRequest.type, workerSaga)
}

const commanUrl = process.env.REACT_APP_PORTAL

const deleteSubject = (deleteId) => deleteReq(`${ commanUrl }/teacher/deleteSubject/${ deleteId }`)

function* workerSaga({ payload }) {
  try {
    console.log('delete subject saga', payload)
    console.log(payload)
    // const deleteId = localStorage.getItem('deleteId')
    const response = yield call(deleteSubject, payload)
    alert('subject was deleted')
    yield put(deleteRequestSuccess(null))
  } catch (error) {
    yield put(deleteRequestFailure(error))
  }
}
