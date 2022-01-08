import { Student , EnSubjects, Subject, Teacher, User } from '../../Models/index'
import { Op } from 'sequelize'

const addStudnents = async  (data) => {
    console.log("students service "+ data);
    return await Student.create( {"userId" :  data } )
}

const enrollSubjectService = async (data) =>  await EnSubjects.create(data)

/*const viewEnrolledStudentService = async (studentId,offset,limit,orderBy,order) => {
  let orderQuery
  if(orderBy == 'name' || orderBy == 'id') orderQuery= [[Subject,orderBy,order]]
  else if(orderBy == 'marks' || orderBy == 'attendance') orderQuery= [[Subject,EnSubjects,orderBy,order]]
  return await Student.findOne({offset,limit,order: orderQuery ,subQuery:false, where: { id: studentId }, include : [{model: Subject, include: [{model: Teacher, include: [ User ] }]  }]})

}*/

const viewEnrolledStudentService = async (studentId,offset,limit,orderBy,order,minMarks,maxMarks,minAtten,maxAtten) => {
  let orderQuery
  if(orderBy == 'name' || orderBy == 'id') orderQuery= [[Subject,orderBy,order]]
  else if(orderBy == 'marks' || orderBy == 'attendance') orderQuery= [[Subject,EnSubjects,orderBy,order]]
  return await Student.findOne({offset,limit,order: orderQuery ,subQuery:false, where: { id: studentId }, include : [{model: Subject,through:{ where : {
    [Op.and] : [
      { attendance:  {[Op.gte]: minAtten, [Op.lte]: maxAtten} } ,
      { marks: {[Op.gte]: minMarks, [Op.lte]: maxMarks} },
    ], 
    }}, include: [{model: Teacher, include: [ User ] }]  }]})

}

/*[Op.and] : [
  { attendance:  {[Op.gte]: 0, [Op.lte]: 100} } },
  { marks: {[Op.gte]: minMarks, [Op.lte]: maxMarks} }
]*/

export { 
    addStudnents,
    enrollSubjectService,
    viewEnrolledStudentService,
}