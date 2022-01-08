import { addUser } from "../../Services/User/user"
import { addStudnents } from "../../Services/Student/student"
import { addTeachers } from "../../Services/Teacher/teacher"
import { findAllSubjects } from "../../Services/User/user"
import { removeToken , assignJwtToken } from '../../Services/User/user'
import { validationResult } from "express-validator"

/*const signupUser = async (req, res) => {
    console.log("here");
    console.log(req.body);
    try {
          const data = await addUser(req.body)
          console.log(data);
          console.log(req.body.type);
          if(req.body.type === 'student') await addStudnents(data.id)
          else if(req.body.type === 'teacher') await addTeachers(data.id)
          return res.status(200).json(data)
       } catch(err) {
          console.log("here1"+err);
          res.status(500).send({
          message:
          err.message || "Some error occurred while creating the Student."
         })
        }
}*/

const signupUser = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) res.json(errors) 
  else {
    try {
          console.log(req.body)
          const data = await addUser(req.body)
          return res.status(200).json(data)
         } catch(err) {
            console.log("here1"+err);
            res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Student."
            })
        }
      }  
}

/*const getAllSubjects = async (req,res) => {
  try {
      const data = await findAllSubjects()
      return res.status(200).json(data)
     } catch(err) {
     res.status(500).send({
       message:
         err.message || "Some error occurred while retrieving Student."
     })
   }
}*/ 

const getAllSubjects = async (req,res) => {
  try {
      const page = parseInt(req.query.page)
      const pageSize = parseInt(req.query.pageSize)
      const orderBy = req.query.orderBy
      const order = req.query.order
      const limit = pageSize
      const offset = page * pageSize
      const minPassMarks = parseInt(req.query.minPassMarks)
      const maxPassMarks = parseInt(req.query.maxPassMarks)
      console.log(offset, limit,minPassMarks,maxPassMarks)
      const data = await findAllSubjects(offset, limit, orderBy, order,minPassMarks,maxPassMarks)
      return res.status(200).json(data)
     } catch(err) {
     res.status(500).send({
       message:
         err.message || "Some error occurred while retrieving Student."
     })
   }
} 


const logoutUser = async (req,res) => {

  try {
      // const student = await removeToken(req.params.id)
      return res.status(200).json('Logout Successful')
  } catch(e) {
      return res.status(200).json('Logout Not Successful')
  }
}

const loginUser = async (req,res) => {
  
  try {
      const { user, jwtToken, respId} = await assignJwtToken(req.user) 
       res.status(200).json({ user, jwtToken, respId })
  } catch(e) {
       res.json('Login not sucessfull')
  }
}



export { signupUser , getAllSubjects, loginUser, logoutUser }



