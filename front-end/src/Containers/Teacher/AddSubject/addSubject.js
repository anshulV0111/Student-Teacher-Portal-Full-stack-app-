/* eslint-disable no-alert */
import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { red } from '@material-ui/core/colors'
import Paper from '@material-ui/core/Paper'
import Collapse from '@material-ui/core/Collapse'
import { Alert } from '@material-ui/lab'
import { addSubRequest } from '../../../redux-sagas/redux/addSubjectSlice'

const AddSubject = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const onSubmit = (signupData) => {
    // history.push('/teacher')
    alert(JSON.stringify(signupData))
    dispatch(addSubRequest(signupData))
  }
  const error = useSelector((state) => state.addSub.error)
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    myError: {
      color: red,
    },
    paperStyle: {
      padding: '1px 20px',
      width: 500,
      margin: '200px auto',
    },
  }))

  const classes = useStyles()

  return (
    <Container component='main' maxWidth='xs'>
      <Paper elevation={ 20 } className={ classes.paperStyle }>
        <CssBaseline />
        <div className={ classes.paper }>
          <Typography component='h1' variant='h5'>
            Add Subject
          </Typography>
          <form className={ classes.form } noValidate onSubmit={ handleSubmit(onSubmit) }>
            <Grid container spacing={ 2 }>
              <Grid item xs={ 12 } sm={ 6 }>
                <TextField
                  autoComplete='subname'
                  name='name'
                  variant='outlined'
                  required
                  fullWidth
                  id='name'
                  label='Subject Name'
                  autoFocus
                  inputRef={ register() }
                />
              </Grid>
              <Grid item xs={ 12 } sm={ 12 }>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='Description'
                  label='Description'
                  name='description'
                  autoComplete='description'
                  inputRef={ register }
                />
              </Grid>
              <Grid item xs={ 8 }>
                <TextField
                  autoComplete='subjectcode'
                  name='subjectcode'
                  variant='outlined'
                  required
                  fullWidth
                  id='age'
                  label='SubjectCode'
                  autoFocus
                  inputRef={ register }
                />
              </Grid>
              <Grid item xs={ 3 }>
                <TextField
                  autoComplete='marks'
                  name='passingmarks'
                  variant='outlined'
                  required
                  fullWidth
                  id='passingmarks'
                  label='Passing Marks'
                  autoFocus
                  inputRef={ register }
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={ classes.submit }
            >
              Add Subject
            </Button>
            <Collapse in={ error }>
              <Alert severity='error'>
                INVALID
              </Alert>
            </Collapse>
          </form>
        </div>
      </Paper>
    </Container>
  )
}
export default AddSubject
