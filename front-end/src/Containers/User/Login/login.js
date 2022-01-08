import React from 'react'
import { useForm } from 'react-hook-form'
import {
  Typography, TextField, Button, Container,
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import Collapse from '@material-ui/core/Collapse'
import { Alert } from '@material-ui/lab'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { loginRequest } from '../../../redux-sagas/redux/loginSlice'
import loginSchema from '../../../utils/validation/login'
import style from './loginStyle.module.css'

const useStyles = makeStyles(() => ({
  paper: {
    padding: '30px 20px',
    width: 300,
    margin: '200px auto',
  },
}))

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const error = useSelector((state) => state.login.error)
  // const history = useHistory()
  // console.log(error)

  const onSubmit = async ({ username, password }) => {
    dispatch(loginRequest({ username, password, history }))
  }
  const classes = useStyles()
  return (
    <Container className={ style.container }>
      <Paper elevation={ 20 } className={ classes.paper }>
        <Typography variant='h5'>Login</Typography>
        <Typography component='h1' variant='h5'>
          Don't have an account?
          {' '}
          <Link to='/signup'>SignUp </Link>
        </Typography>
        <br />
        <br />
        <form onSubmit={ handleSubmit(onSubmit) }>
          <TextField
            name='username'
            variant='outlined'
            inputRef={ register({ required: true }) }
            label='Enter Username'
            color='primary'
          />
          <p><Typography color='error'>{errors.username?.message}</Typography></p>
          <br />
          <br />
          <TextField
            name='password'
            variant='outlined'
            type='password'
            inputRef={ register({ required: true }) }
            label='Enter Password'
            color='primary'
          />
          <p><Typography color='error'>{errors.password?.message}</Typography></p>
          <br />
          <br />
          <Button
            variant='contained'
            color='primary'
            type='submit'
          >
            LOGIN
          </Button>
          <Collapse in={ error }>
            <Alert severity='error'>
              INCORRECT CREDENTIALS
            </Alert>
          </Collapse>
        </form>
      </Paper>
    </Container>
  )
}

export default Login
