import React from 'react'
import { Route } from 'react-router-dom'
import Welcome from '../Containers/User/Welocme/index'
import LoginForm from '../Containers/User/Login/login'
import SignUp from '../Containers/User/SignUp/signup'
import AddSubject from '../Containers/Teacher/AddSubject/addSubject'
import UpdateSubject from '../Containers/Teacher/UpdateSubject/updateSubject'
import OwnSubject from '../Containers/Teacher/OwnSubject/ownSubject'
import AllSubject from '../Containers/User/AllSubject/allSubject'
import OwnEnrolled from '../Containers/Student/OwnEnrolled/ownEnrolled'
import ViewStudents from '../Containers/Teacher/ViewStudents/viewStudents'
import EditStudent from '../Containers/Teacher/EditStudent/editStudent'

const Routes = () => (
  <ul>
    <Route
      exact
      path='/login'
      render={ () => <LoginForm /> }
    />
    <Route
      exact
      path='/signup'
      render={ () => <SignUp /> }
    />
    <Route
      exact
      path='/'
      render={ () => <Welcome /> }
    />
    <Route
      exact
      path='/teacher/addSubject'
      render={ () => <AddSubject /> }
    />
    <Route
      exact
      path='/user/allSubjects'
      render={ () => <AllSubject /> }
    />
    <Route
      exact
      path='/teacher/updateSubject'
      render={ () => <UpdateSubject /> }
    />
    <Route
      exact
      path='/teacher/editStudent'
      render={ () => <EditStudent /> }
    />
    <Route
      exact
      path='/teacher/ownsubjects'
      render={ () => <OwnSubject /> }
    />
    <Route
      exact
      path='/teacher/addsubjects'
      render={ () => <AddSubject /> }
    />
    <Route
      exact
      path='/student/ownEnrolled'
      render={ () => <OwnEnrolled /> }
    />
    <Route
      exact
      path='/teacher/viewStudents'
      render={ () => <ViewStudents /> }
    />
  </ul>
)

export default Routes
