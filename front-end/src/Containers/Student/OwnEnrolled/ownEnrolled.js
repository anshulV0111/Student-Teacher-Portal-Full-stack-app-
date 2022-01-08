import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TableComponent from '../../../Components/Table/index'
import { enrollSubjectRequest } from '../../../redux-sagas/redux/ownEnrolledSlice'

const OwnEnrolled = () => {
  const [ page, setPage ] = useState(0)
  const [ rowsPerPage, setRowsPerPage ] = useState(5)
  const [ order, setOrder ] = useState('asc')
  const [ orderBy, setOrderBy ] = useState('id')
  const [ minAtten, setMinAtten ] = useState(0)
  const [ maxAtten, setMaxAtten ] = useState(300)
  const [ minMarks, setMinMarks ] = useState(0)
  const [ maxMarks, setMaxMarks ] = useState(100)
  const orderByMap = [ 'id', 'name', 'attendance', 'marks' ]
  const dispatch = useDispatch()
  const ownEnrollData = useSelector((state) => state.ownEnroll.data)

  useEffect(() => (
    minAtten > maxAtten || minMarks > maxMarks
      ? <></>
      : dispatch(enrollSubjectRequest({
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
      label: 'Marks',
      value: 'marks',
    },
    {
      id: 5,
      label: 'Attendance',
      value: 'attendance',
    },
  ]
  if (ownEnrollData) {
    row = ownEnrollData.map((subject) => ({
      subjectId: subject.id,
      subjectname: subject.name,
      desc: subject.description,
      marks: subject.enrolledsubjects.marks,
      attendance: subject.enrolledsubjects.attendance,

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
      minAtten={ minAtten }
      maxAtten={ maxAtten }
      minMarks={ minMarks }
      maxMarks={ maxMarks }
      handleMinAtten={ handleMinAtten }
      handleMaxAtten={ handleMaxAtten }
      handleMinMarks={ handleMinMarks }
      handleMaxMarks={ handleMaxMarks }
    />
  )
}

export default OwnEnrolled
