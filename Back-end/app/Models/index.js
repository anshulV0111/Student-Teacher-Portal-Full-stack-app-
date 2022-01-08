import  UserModel from './user'
import TeacherModel from './teacher'
import StudentModel from './student'
import SubjectModel from './subject'
import { connect } from "./database"
import EnrolledSubjects from './enrolledSubjects'

const User = UserModel(connect)
const Teacher = TeacherModel(connect)
const Student = StudentModel(connect)
const Subject = SubjectModel(connect)
const EnSubjects = EnrolledSubjects(connect)

Student.belongsTo(User)
User.hasOne(Student)

Teacher.belongsTo(User)
User.hasOne(Teacher)

Teacher.hasMany(Subject)
Subject.belongsTo(Teacher)

Student.belongsToMany(Subject, { through: EnSubjects})
Subject.belongsToMany(Student, { through: EnSubjects})


export { Student, Teacher, User, Subject, EnSubjects }