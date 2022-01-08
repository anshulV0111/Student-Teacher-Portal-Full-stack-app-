import passport from "passport"
import  { Strategy as LocalStrategy } from "passport-local"
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt"
import { User } from "../Models/index"
import bcrypt from 'bcrypt'


const authorLocal = () => { 
    passport.use(
      new LocalStrategy(async (username,password,done) => {
         console.log('In local') 
        const user  = await User.findOne({ where: { username }})
        if( user && (await bcrypt.compare(password,user.password))) {
            return done(null, user)
        } else {
            return done(null,false)
        } 
    })
)}

let options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
options.secretOrKey = "thisIsJwt"

const authorJwt = () => {
    passport.use(
        new JwtStrategy(options, async (jwt_payload, done) => {
            const student = await User.findOne({ id: jwt_payload.id})
            if(!student) return done(null,false)
            return done(null,student)
        })
    )
} 

export { authorLocal ,authorJwt }

    