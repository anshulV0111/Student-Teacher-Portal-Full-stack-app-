/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { Typography } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { useDispatch } from 'react-redux'
import { logoutRequest } from '../../redux-sagas/redux/loginSlice'
import style from './indexStyles.module.css'

const TeacherNav = () => {
  const history = useHistory()
  const allSub = () => {
    history.push('/user/allSubjects')
    // dispatch(subjectRequest({ page, rowsPerPage }))
  }
  const addSub = () => {
    history.push('/teacher/addSubject')
  }
  const ownSub = () => {
    history.push('/teacher/ownsubjects')
  }

  return (
    <Box>
      <Button
        className={ style.buStyle }
        variant='contained'
        style={ { margin: '10px' } }
        onClick={ allSub }
      >
        GET ALL SUBJECTS
      </Button>
      <Button
        className={ style.buStyle }
        variant='contained'
        style={ { margin: '10px' } }
        onClick={ addSub }
      >
        ADD SUBJECT
      </Button>
      <Button
        className={ style.buStyle }
        variant='contained'
        style={ { margin: '10px' } }
        onClick={ ownSub }
      >
        VIEW OWN SUBJECTS
      </Button>
    </Box>
  )
}

const StudentNav = () => {
  const history = useHistory()
  const allSub = () => {
    history.push('/user/allSubjects')
    // dispatch(subjectRequest({ page, rowsPerPage }))
  }
  const ownEnroll = () => {
    history.push('/student/ownEnrolled')
    // dispatch(subjectRequest({ page, rowsPerPage }))
  }
  return (
    <Box>
      <Button
        variant='contained'
        onClick={ allSub }
        style={ { margin: '10px' } }
        className={ style.buStyle }
      >
        GET ALL SUBJECTS
      </Button>
      <Button
        variant='contained'
        onClick={ ownEnroll }
        style={ { margin: '10px' } }
        className={ style.buStyle }
      >
        VIEW OWN ENROLLED SUBJECTS
      </Button>
    </Box>
  )
}

const Header = ({ reset, setReset }) => {
  const [ student, setStudent ] = useState(true)
  const history = useHistory()
  const dispatch = useDispatch()
  const teacherName = localStorage.getItem('username')
  const type = localStorage.getItem('type')
  const logOut = () => {
    localStorage.clear()
    dispatch(logoutRequest())
    history.push('/login')
    setReset(!reset)
  }

  useEffect(() => {
    if (type === 'student') {
      setStudent(true)
    } else setStudent(false)
  }, [ student ])

  return (
    <Container>
      <AppBar position='absolute'>
        <Toolbar className={ style.container }>
          <Typography component='h1' variant='h6' color='inherit' fontWeight='fontWeightBold'>
            Welcome
            {' '}
            { type }
            &nbsp;
          </Typography>
          <Typography component='h1' variant='h6' color='error'>
            { teacherName }
            &nbsp;&nbsp;
          </Typography>
          <Box>
            { student ? <StudentNav /> : <TeacherNav /> }
          </Box>
          <Box>
            <Button variant='contained' className={ style.logoutButton } onClick={ logOut }>LOGOUT</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default Header
