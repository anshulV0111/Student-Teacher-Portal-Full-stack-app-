import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import UpdateIcon from '@material-ui/icons/Update'
import VisibilityIcon from '@material-ui/icons/Visibility'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { ownSubjectRequest } from '../../../redux-sagas/redux/ownSubjectSlice'
import { deleteRequest } from '../../../redux-sagas/redux/deleteSlice'
import TableComponent from '../../../Components/Table/index'

const OwnSubject = () => {
  const [ page, setPage ] = useState(0)
  const [ rowsPerPage, setRowsPerPage ] = useState(5)
  const [ order, setOrder ] = useState('asc')
  const [ orderBy, setOrderBy ] = useState('id')
  const [ minMarks, setMinMarks ] = useState(0)
  const [ maxMarks, setMaxMarks ] = useState(100)
  const [ open, setOpen ] = useState(false)
  const orderByMap = [ 'id', 'name' ]
  const ownData = useSelector((state) => state.ownSubTeacher.data)
  const history = useHistory()
  const handleUpdateSubject = (id) => {
    localStorage.setItem('subjectId', id)
    // console.log(localStorage.getItem('subjectId'))
    history.push('/teacher/updateSubject')
  }
  const dispatch = useDispatch()
  const handleDeleteSubject = (id) => {
    // localStorage.setItem('deleteId', id)
    dispatch(deleteRequest(id))
    setOpen(false)
  }

  const viewStudents = (id) => {
    localStorage.setItem('subjectId', id)
    history.push('/teacher/viewStudents')
    // dispatch(viewStudentRequest())
  }

  useEffect(() => (
    minMarks > maxMarks
      ? <></>
      : dispatch(ownSubjectRequest({
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

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
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
      value: 'update',
    },
    {
      id: 7,
      label: '',
      value: 'delete',
    },
    {
      id: 7,
      label: '',
      value: 'button',
    },
  ]
  if (ownData) {
    row = ownData.map((subject) => ({
      subjectId: subject.id,
      subjectname: subject.name,
      desc: subject.description,
      passingMarks: subject.passingmarks,
      teacher: subject.teacher.user.firstName,
      update:
  <IconButton aria-label='delete' onClick={ () => handleUpdateSubject(subject.id) }>
    <UpdateIcon fontSize='large' />
  </IconButton>,
      delete:
  <>
    <IconButton aria-label='delete' onClick={ handleClickOpen }>
      <DeleteIcon fontSize='large' color='error' />
    </IconButton>
    <Dialog
      open={ open }
      onClose={ handleClose }
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>
        DO YOU REALLY WANT TO DELETE &nbsp;&nbsp;
        { subject.name }
        ?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          SUBJECT WILL BE DELETED PERMANENTLY
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={ handleClose } color='primary'>
          NO
        </Button>
        <Button onClick={ () => handleDeleteSubject(subject.id) } color='primary' autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  </>,
      button:
  <IconButton aria-label='delete' onClick={ () => viewStudents(subject.id) }>
    <VisibilityIcon fontSize='large' />
  </IconButton>,

    }))
  }

  return (
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
  )
}

export default OwnSubject
