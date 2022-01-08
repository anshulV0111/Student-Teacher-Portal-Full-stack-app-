import { Subject ,Teacher, User, Student } from '../../Models/index'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import { Op } from 'sequelize'


/*const addUser = async  (data) => {
    console.log('adduser')
    console.log(data)
    data.password = await bcrypt.hash(data.password,10)
    console.log(data)
    return await User.create(data)
}*/

const addUser = async  (data) => {
    data.password = await bcrypt.hash(data.password,10)
    const user = await User.create(data)
    if(data.type === 'student') await Student.create( {"userId" :  user.id } )
    else if(data.type === 'teacher') await Teacher.create( {"userId" :  user.id } )
    return user
}


// const findAllSubjects = async () => await Subject.findAll( {include: Teacher} )

// const findAllSubjects = async () => await Subject.findAll({ include: [{ model: Teacher, include: [ User ] }] })

const findAllSubjects = async (offset, limit, orderBy, order,minPassMarks,maxPassMarks) => await Subject.findAll({offset, limit, order: [[orderBy, order]], where:{ passingmarks: {[Op.gte]: minPassMarks, [Op.lte]: maxPassMarks }},  include: [{ model: Teacher, include: [ User ] }] })

const assignJwtToken = async user => {
    const token = jwt.sign(
        { id: user.id, username: user.username},
        "thisIsJwt",
        { expiresIn: 3600 }
    )
    console.log('printing token')
    console.log(token)
    const jwtToken  = `Bearer ${ token }`
    console.log('jwtToken',jwtToken)
    console.log('user type')
    console.log(user.type)
    if (user.type === 'teacher') {
        const teacher = await Teacher.findOne({ where: { userId: user.id }})
        const respId = teacher.id
        console.log(respId)
        // await user.update({ token })
        return { user, jwtToken, respId }
    } else if(user.type === 'student') {
        const student = await Student.findOne({ where: { userId: user.id }})
        console.log(respId)
        const respId = student.id
        // await user.update({ token })
        return { user, jwtToken, respId }
    }

}

/*const removeToken = async (id) => {
    console.log('here tokenservice',id)
    const user = await User.findOne({where:{ id } })
    return await user.update({ token : null},{where:{ id } })
}*/



export { addUser ,findAllSubjects, assignJwtToken }

