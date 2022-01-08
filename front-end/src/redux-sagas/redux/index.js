import { combineReducers } from 'redux'
import loginReducer from './loginSlice'
import signupReducer from './signupSlice'
import allsubjectReducer from './allSubjectSlice'
import addsubjectReducer from './addSubjectSlice'
import getOwnTeacherReducer from './ownSubjectSlice'
import updateSubjectReducer from './updateSubjectSlice'
import deleteSubjectReducer from './deleteSlice'
import enrollSubjectReducer from './enrollSubjectSlice'
import ownEnrollReducer from './ownEnrolledSlice'
import viewStudentReducer from './viewStudentSlice'
import editReducer from './editStudentSlice'

const rootReducer = combineReducers(
  {
    login: loginReducer,
    signup: signupReducer,
    allSub: allsubjectReducer,
    addSub: addsubjectReducer,
    ownSubTeacher: getOwnTeacherReducer,
    updateSub: updateSubjectReducer,
    deleteSub: deleteSubjectReducer,
    enrollSubject: enrollSubjectReducer,
    ownEnroll: ownEnrollReducer,
    viewStudent: viewStudentReducer,
    edit: editReducer,
  },
)

export default rootReducer
