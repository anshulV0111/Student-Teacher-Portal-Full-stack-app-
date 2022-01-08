/* eslint-disable no-unused-expressions */
import { Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Header from './Components/Navbar/Header'
// import Welcome from './containers/welcome/index'
import Routes from './Routes/routes'

const App = () => {
  // const isLogin
  const [ reset, setReset ] = useState(false)
  const isLogin = useSelector((state) => state.login.isLogin)
  localStorage.setItem('isLogin', isLogin)
  return (
    <>
      {
      JSON.parse(localStorage.getItem('user')) ? <Header reset={ reset } setReset={ setReset } /> : <></>
    }
      <Routes />
    </>
  )
}

export default App
