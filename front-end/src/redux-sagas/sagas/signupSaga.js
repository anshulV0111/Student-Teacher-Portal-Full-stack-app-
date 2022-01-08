/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { signupRequest, signupRequestSuccess, signupRequestFailure } from '../redux/signupSlice'
import { signup } from '../../utils/axios/axios'

export default function* watcherSaga() {
  yield takeLatest(signupRequest.type, workerSaga)
}

/* const userSubmit = ({
  username, email, password, firstName, lastName, gender, age, type,
}) => (
  axios({
    method: 'post',
    url: 'http://localhost:8080/users/signup',
    data: {
      username,
      email,
      password,
      firstName,
      lastName,
      gender,
      age,
      type,
    },
  })
) */

function* workerSaga({ payload }) {
  try {
    const response = yield call(signup, payload)
    alert('Sucess for', response.data.username)
    localStorage.setItem('username', response.data.username)
    window.location.href = '/'
    yield put(signupRequestSuccess(response.data))
  } catch (error) {
    yield put(signupRequestFailure(error))
  }
}
