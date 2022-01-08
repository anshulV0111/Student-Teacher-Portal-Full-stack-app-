import { all } from 'redux-saga/effects'
import loginSaga from './loginSaga'
import signupSaga from './signupSaga'
import allsubjectSaga from './allSubjectSaga'
import addsubjectSaga from './addSubjectSaga'
import ownSubjectSaga from './ownSubjectSaga'
import updateSubjectSaga from './updateSubjectSaga'
import deleteSubjectSaga from './deleteSaga'
import enrollSubjectSaga from './enrollSubjectSaga'
import ownEnrollSaga from './ownEnrollSaga'
import viewStudentSaga from './viewStudentSaga'
import editStudentSaga from './editStudentSaga'

export default function* rootSaga() {
  yield all([
    loginSaga(),
    signupSaga(),
    allsubjectSaga(),
    addsubjectSaga(),
    ownSubjectSaga(),
    updateSubjectSaga(),
    deleteSubjectSaga(),
    enrollSubjectSaga(),
    ownEnrollSaga(),
    viewStudentSaga(),
    editStudentSaga(),
  ])
}
