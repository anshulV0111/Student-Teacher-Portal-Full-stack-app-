
import express from "express"
import  { connect  } from "./app/Models/database"
import { authorJwt, authorLocal } from './app/Authentication/passport'
import passport from "passport"
import { userRouter } from './app/Routes/User/user'
import teacherRouter from './app/Routes/Teacher/teacher'
import studentRouter from './app/Routes/Student/student'
import cors from 'cors'


const app = express().use(express.json());

/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next()
}) */

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true"); 
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});

app.use(cors())

app.use(passport.initialize())
authorLocal()
authorJwt()

app.use("/users",userRouter)

app.use("/teacher",teacherRouter)

app.use("/student",studentRouter)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
