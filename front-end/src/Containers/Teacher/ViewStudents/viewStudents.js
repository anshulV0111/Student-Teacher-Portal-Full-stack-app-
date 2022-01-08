import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'
import TableComponent from '../../../Components/Table/index'
import { viewStudentRequest } from '../../../redux-sagas/redux/viewStudentSlice'

const ViewStudents = () => {
  const [ page, setPage ] = useState(0)
  const [ rowsPerPage, setRowsPerPage ] = useState(2)
  const [ order, setOrder ] = useState('asc')
  const [ orderBy, setOrderBy ] = useState('id')
  const [ minAtten, setMinAtten ] = useState(0)
  const [ maxAtten, setMaxAtten ] = useState(300)
  const [ minMarks, setMinMarks ] = useState(0)
  const [ maxMarks, setMaxMarks ] = useState(100)
  const orderByMap = [ 'id', 'username', 'marks', 'attendance' ]
  const getStudents = useSelector((state) => state.viewStudent.data)
  const history = useHistory()
  const dispatch = useDispatch()
  const handleEditStudent = (id) => {
    localStorage.setItem('enId', id)
    history.push('/teacher/editStudent')
  }
  useEffect(() => (
    minAtten > maxAtten || minMarks > maxMarks
      ? <></>
      : dispatch(viewStudentRequest({
        page, rowsPerPage, order, orderBy, minAtten, maxAtten, minMarks, maxMarks,
      }))
  ), [ page, rowsPerPage, order, orderBy, minAtten, maxAtten, minMarks, maxMarks ])

  const onPrev = () => {
    setPage(page - 1)
  }

  const onNext = () => {
    setPage(page + 1)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value)
    setPage(0)
  }
  const handleOrderByChange = (event) => {
    setOrderBy(event.target.value)
  }

  const handleOrderChange = (event) => {
    setOrder(event.target.value)
  }

  const handleMinAtten = (event) => {
    setMinAtten(event.target.value)
  }

  const handleMaxAtten = (event) => {
    setMaxAtten(event.target.value)
  }

  const handleMinMarks = (event) => {
    setMinMarks(event.target.value)
  }

  const handleMaxMarks = (event) => {
    setMaxMarks(event.target.value)
  }
  let row = []
  let header = []
  header = [
    {
      id: 1,
      label: 'StudentId',
      value: 'studentId',
    },
    {
      id: 2,
      label: 'Name',
      value: 'studentname',
    },
    {
      id: 3,
      label: 'Marks',
      value: 'marks',
    },
    {
      id: 4,
      label: 'Attendance',
      value: 'attendance',
    },
    {
      id: 5,
      label: '',
      value: 'button',
    },
  ]

  if (getStudents) {
    row = getStudents.map((student) => ({
      studentId: student.id,
      studentname: student.user.username,
      marks: student.enrolledsubjects.marks,
      attendance: student.enrolledsubjects.attendance,
      button:
  <IconButton aria-label='delete' onClick={ () => handleEditStudent(student.enrolledsubjects.id) }>
    <EditIcon fontSize='large' />
  </IconButton>,

    }))
  }
  return (
    <Box>
      <TableComponent
        row={ row }
        header={ header }
        handlePrev={ onPrev }
        handleNext={ onNext }
        handleChangeRowsPerPage={ handleChangeRowsPerPage }
        page={ page }
        rowsPerPage={ rowsPerPage }
        order={ order }
        orderBy={ orderBy }
        handleOrderChange={ handleOrderChange }
        handleOrderByChange={ handleOrderByChange }
        orderByMap={ orderByMap }
        minAtten={ minAtten }
        maxAtten={ maxAtten }
        minMarks={ minMarks }
        maxMarks={ maxMarks }
        handleMinAtten={ handleMinAtten }
        handleMaxAtten={ handleMaxAtten }
        handleMinMarks={ handleMinMarks }
        handleMaxMarks={ handleMaxMarks }
      />
    </Box>
  )
}

export default ViewStudents
