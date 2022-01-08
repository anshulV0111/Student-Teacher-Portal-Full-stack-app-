import { EnSubjects, Subject, Teacher, User ,Student} from '../../Models/index'
import { Op } from 'sequelize'

const addTeachers = async (data) => await Teacher.create( {"userId" :  data } )

const addTeacherService = async  (data) =>  await Subject.create(data)

// const viewOwnTeacherService = async (id) => await Subject.findAll({ where: { teacherId: id }, include: [{ model: Teacher, include: [ User ] }]})


const viewOwnTeacherService = async (id,offset,limit,orderBy,order,minPassMarks,maxPassMarks) => { 
   return await Subject.findAll({ offset, limit, order: [[orderBy, order]],  where: { [Op.and] : [
      { teacherId: id },
      { passingmarks: {[Op.gte]: minPassMarks, [Op.lte]: maxPassMarks } }
    ] }, include: [{ model: Teacher, include: [ User ] }]})
}
const viewOwnStudentService = async (id,offset,limit,orderBy,order,minMarks,maxMarks,minAtten,maxAtten) => {
   // return await EnSubjects.findAll({ where: { subjectId: id }, include: [{ model: Student, include: [ User ] }]})
   // return await Student.findOne({where: { id: id }, include : [{model: Subject, include: [{model: Teacher, include: [ User ] }]  }]})
    let orderQuery
    if(orderBy == 'marks' || orderBy == 'attendance') orderQuery = [[Student,EnSubjects,orderBy,order]]
    else if(orderBy == 'username')  orderQuery = [[Student,User,orderBy,order]]
    else if(orderBy == 'id')  orderQuery = [[Student,orderBy,order]]
   return await Subject.findAll({offset,limit,order: orderQuery,subQuery:false,where: { id: id }, include : [{model: Student,through:{ where : {
      [Op.and] : [
        { attendance:  {[Op.gte]: minAtten, [Op.lte]: maxAtten} } ,
        { marks: {[Op.gte]: minMarks, [Op.lte]: maxMarks} },
      ], 
      }}, include: User  }]})
}
const getOneTeacherService = async (id) => await Subject.findByPk(id , { include: Teacher })

const updateTeacherService = async (id,data) =>  await Subject.update(data, { where: { id }})

const deleteSubjectService = async (id) => await Subject.destroy({ where: { id } })

const updateStudentTeacherService = async (id,data) => await EnSubjects.update(data, { where: { id }})

export { addTeacherService, viewOwnTeacherService, getOneTeacherService, addTeachers, updateTeacherService, deleteSubjectService, viewOwnStudentService, updateStudentTeacherService }