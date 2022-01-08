import  express  from "express"
import { enrollSubject , enrolledSubjects } from '../../Controllers/Student/student'
import passport from "passport"

const studentRouter  = express.Router()

studentRouter.put("/enrollSubject",passport.authenticate("jwt", { session: false}),enrollSubject)

studentRouter.get("/enrolledSubjects/:id",passport.authenticate("jwt", { session: false}),enrolledSubjects)


export  default studentRouter 


