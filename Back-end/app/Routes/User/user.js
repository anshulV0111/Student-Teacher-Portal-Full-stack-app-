//import { logoutUser , loginUser} from "../../Controllers/User/login.logout.controller"
//import { logoutUser , loginUser} from "../../Controllers/User/user"
import  express  from "express"
import { signupUser, getAllSubjects, logoutUser, loginUser } from "../../Controllers/User/user"
import passport from "passport"
import  { body }  from 'express-validator'

const userRouter  = express.Router()

userRouter.post("/signup",[
    body('username').isLength({ min: 5, max: 20 }),
    body('firstName').isLength({ min: 5, max: 20 }),
    body('lastName').isLength({ min: 5, max: 20 }),
    body('age').isNumeric(),
    body('email').isEmail(),
    body('password').isLength({ max:10}),
    body('type').notEmpty(),
],signupUser)

userRouter.post("/login", passport.authenticate("local",{
    session: false}),
    loginUser)

userRouter.get("/logout/:id",
    passport.authenticate("jwt", { session: false}),
    logoutUser)
  
userRouter.get("/all",passport.authenticate("jwt", { session: false}),getAllSubjects)
    
export  { userRouter } 


