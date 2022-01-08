import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import { Alert } from '@material-ui/lab'
import Box from '@material-ui/core/Box'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import IconButton from '@material-ui/core/IconButton'
import TableComponent from '../../../Components/Table/index'
import { enrollRequest } from '../../../redux-sagas/redux/enrollSubjectSlice'
import { subjectRequest } from '../../../redux-sagas/redux/allSubjectSlice'
import style from './allSubject.module.css'

const AllSubject = () => {
  const [ page, setPage ] = useState(0)
  const [ rowsPerPage, setRowsPerPage ] = useState(5)
  const [ order, setOrder ] = useState('asc')
  const [ orderBy, setOrderBy ] = useState('id')
  const [ minMarks, setMinMarks ] = useState(0)
  const [ maxMarks, setMaxMarks ] = useState(100)
  const orderByMap = [ 'id', 'name' ]
  const data = useSelector((state) => state.allSub.data)
  const type = localStorage.getItem('type')
  const dispatch = useDispatch()
  const error = useSelector((state) => state.enrollSubject.error)

  const handleEnrollSubject = (id) => {
    localStorage.setItem('subjectId', id)
    dispatch(enrollRequest())
  }

  useEffect(() => (
    minMarks > maxMarks
      ? <></>
      : dispatch(subjectRequest({
        page, rowsPerPage, order, orderBy, minMarks, maxMarks,
      }))
  ), [ page, rowsPerPage, order, orderBy, minMarks, maxMarks ])

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
      label: 'SubjectId',
      value: 'subjectId',
    },
    {
      id: 2,
      label: 'Name',
      value: 'subjectname',
    },
    {
      id: 3,
      label: 'Description',
      value: 'desc',
    },
    {
      id: 4,
      label: 'PassingMarks',
      value: 'passingMarks',
    },
    {
      id: 5,
      label: 'Teacher',
      value: 'teacher',
    },
    {
      id: 6,
      label: '',
      value: 'button',
    },
    {
      id: 7,
      label: '',
      value: 'action',
    },
  ]
  if (data) {
    row = data.map((subject) => ({
      subjectId: subject.id,
      subjectname: subject.name,
      desc: subject.description,
      passingMarks: subject.passingmarks,
      teacher: subject.teacher.user.firstName,
      button:
    type === 'student' ? (
      <IconButton aria-label='delete' onClick={ () => handleEnrollSubject(subject.id) }>
        <AddCircleIcon fontSize='large' />
      </IconButton>
    )
      : '',
    }))
  }
  return (
    <Box>
      <Collapse in={ error }>
        <Alert severity='error'>
          ALREADY ENROLLED
        </Alert>
      </Collapse>
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
        minMarks={ minMarks }
        maxMarks={ maxMarks }
        handleMinMarks={ handleMinMarks }
        handleMaxMarks={ handleMaxMarks }
      />
    </Box>
  )
}

export default AllSubject
