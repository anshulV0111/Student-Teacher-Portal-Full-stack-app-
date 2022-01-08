/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import { takeLatest, call, put } from 'redux-saga/effects'
// import axios from 'axios'
import { loginRequest, loginRequestSuccess, loginRequestFailure } from '../redux/loginSlice'
import { login } from '../../utils/axios/axios'

export default function* watcherSaga() {
  yield takeLatest(loginRequest.type, workerSaga)
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

function* workerSaga({ payload }) {
  try {
    const { username, password, history } = payload
    const response = yield call(login, { username, password })
    localStorage.setItem('response', JSON.stringify(response))
    localStorage.setItem('user', JSON.stringify(response.data.user))
    localStorage.setItem('token', response.data.jwtToken)
    localStorage.setItem('username', response.data.user.firstName)
    localStorage.setItem('type', response.data.user.type)
    localStorage.setItem('respId', response.data.respId)
    yield put(loginRequestSuccess(null))
    // yield response.data.user.type === 'student' ? window.location.href = '/student' : window.location.href = '/teacher'
    yield response.data.user.type === 'student' ? history.push('/user/allSubjects') : history.push('/user/allSubjects')
  } catch (error) {
    yield put(loginRequestFailure(error))
  }
}
