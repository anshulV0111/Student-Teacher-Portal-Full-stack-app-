import { Container } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import style from './indexStyles.module.css'

const Welcome = () => {
  const history = useHistory()
  const handleLogin = () => history.push('/login')
  const handleSignup = () => history.push('/signup')
  return (
    <Container className={ style.container }>
      <Box>
        <Typography color='textSecondary' variant='h1'>WELCOME TO PORTAL</Typography>
      </Box>
      <Box style={ { marginTop: 80 } }>
        <Button variant='contained' color='primary' style={ { margin: '100px' } } onClick={ handleLogin }>LOGIN</Button>
        <Button
          variant='contained'
          color='primary'
          style={ { margin: '100px' } }
          onClick={ handleSignup }
        >
          SIGNUP
        </Button>
      </Box>
    </Container>
  )
}

export default Welcome
