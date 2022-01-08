import  express  from "express"
import { addSubject , viewOwnSubjects, getOneSubject, updateSubject, deleteSubject, viewOwnStudents, updateSubjectStudent } from '../../Controllers/Teacher/teacher'
import passport from "passport"


const teacherRouter  = express.Router()

teacherRouter.post("/add",passport.authenticate("jwt", { session: false}),addSubject)

teacherRouter.get("/ownSubjects/:id",passport.authenticate("jwt", { session: false}),viewOwnSubjects)

teacherRouter.get( "/getOneSubject/:id",passport.authenticate("jwt", { session: false}),getOneSubject)

teacherRouter.put("/updatesubject/:id",passport.authenticate("jwt", { session: false}),updateSubject)

teacherRouter.delete("/deleteSubject/:id",passport.authenticate("jwt", { session: false}),deleteSubject)

teacherRouter.get("/ownStudents/:id",passport.authenticate("jwt", { session: false}),viewOwnStudents)

teacherRouter.put("/editSubjectStudent/:id",passport.authenticate("jwt", { session: false}),updateSubjectStudent)


export  default teacherRouter 


