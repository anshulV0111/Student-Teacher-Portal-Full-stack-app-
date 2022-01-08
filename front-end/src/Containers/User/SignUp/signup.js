import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { red } from '@material-ui/core/colors'
import Paper from '@material-ui/core/Paper'
import Collapse from '@material-ui/core/Collapse'
import { Alert } from '@material-ui/lab'
import { signupRequest } from '../../../redux-sagas/redux/signupSlice'
import signUpSchema from '../../../utils/validation/signUp'
import style from './signupStyle.module.css'

const SignUp = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signUpSchema),
  })
  const onSubmit = (signupData) => {
    dispatch(signupRequest(signupData))
  }

  const error = useSelector((state) => state.signup.error)

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
      margin: '100px auto',
    },
  }))

  const classes = useStyles()

  return (
    <Container component='main' maxWidth='xs' className={ style.container }>
      <Paper elevation={ 20 } className={ classes.paperStyle }>
        <CssBaseline />
        <div className={ classes.paper }>
          <Avatar className={ classes.avatar } />
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Typography component='h1' variant='h5'>
            already a user ?
            {' '}
            <Link to='/login'>Login </Link>
          </Typography>
          <form className={ classes.form } noValidate onSubmit={ handleSubmit(onSubmit) }>
            <Grid container spacing={ 2 }>
              <Grid item xs={ 12 } sm={ 6 }>
                <TextField
                  autoComplete='fname'
                  name='firstName'
                  variant='outlined'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                  inputRef={ register({ required: true, maxLength: 20 }) }
                />
                <p><Typography color='error'>{errors.firstName?.message}</Typography></p>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 }>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  autoComplete='lname'
                  inputRef={ register }
                />
                <p><Typography color='error'>{errors.lastName?.message}</Typography></p>
              </Grid>
              <Grid item xs={ 3 }>
                <TextField
                  autoComplete='Age'
                  name='age'
                  variant='outlined'
                  required
                  fullWidth
                  id='age'
                  label='Age'
                  autoFocus
                  inputRef={ register }
                />
                <p><Typography color='error'>{errors.age?.message}</Typography></p>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 }>

                <Typography variant='h6'>
                  Gender
                </Typography>
                <RadioGroup row name='gender'>
                  <FormControlLabel
                    value='female'
                    inputRef={ register({ required: true }) }
                    control={ <Radio /> }
                    label='Female'
                  />
                  <FormControlLabel
                    value='male'
                    inputRef={ register({ required: true }) }
                    control={ <Radio /> }
                    label='Male'
                  />
                </RadioGroup>
                <p><Typography color='error'>{errors.gender?.message}</Typography></p>

              </Grid>

              <Grid item xs={ 12 } sm={ 22 }>
                <Typography variant='h6'>
                  Type
                </Typography>
                <RadioGroup row name='type'>
                  <FormControlLabel
                    value='student'
                    inputRef={ register({ required: true }) }
                    control={ <Radio /> }
                    label='Student'
                  />
                  <FormControlLabel
                    value='teacher'
                    inputRef={ register({ required: true }) }
                    control={ <Radio /> }
                    label='Teacher'
                  />
                </RadioGroup>
                <p><Typography color='error'>{errors.type?.message}</Typography></p>
              </Grid>

              <Grid item xs={ 12 }>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='username'
                  label='Username'
                  name='username'
                  autoComplete='username'
                  inputRef={ register }
                />
                <p><Typography color='error'>{errors.username?.message}</Typography></p>
              </Grid>
              <Grid item xs={ 12 }>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  inputRef={ register }
                />
                <p><Typography color='error'>{errors.email?.message}</Typography></p>
              </Grid>
              <Grid item xs={ 12 }>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                  inputRef={ register }
                />
                <p><Typography color='error'>{errors.password?.message}</Typography></p>
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={ classes.submit }
            >
              Sign Up
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
export default SignUp
