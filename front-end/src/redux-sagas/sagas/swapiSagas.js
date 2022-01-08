import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { peopleRequest, peopleRequestSuccess, peopleRequestFailure } from '../redux/swapislice'

export default function* watcherSaga() {
  yield takeLatest(peopleRequest.type, workerSaga)
}

const fetchResult = () => (
  axios({
    method: 'get',
    url: process.env.REACT_APP_SWAPI,
  })
)

function* workerSaga() {
  try {
    const response = yield call(fetchResult)
    const data = response.data.results

    yield put(peopleRequestSuccess(data))
  } catch (error) {
    yield put(peopleRequestFailure(error))
  }
}
