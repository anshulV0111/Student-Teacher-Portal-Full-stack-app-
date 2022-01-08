import { addTeacherService, viewOwnTeacherService, getOneTeacherService, updateTeacherService, deleteSubjectService, viewOwnStudentService, updateStudentTeacherService } from '../../Services/Teacher/teacher'


const addSubject = async (req,res) => {
    try {
            console.log(req.body)
            const data = await addTeacherService(req.body)
            return res.status(200).json(data)
        } catch(err) {
            res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Subject."  })
            }    

}

/*const viewOwnSubjects = async (req,res) => {
    try {
        const page = parseInt(req.query.page)
        const pageSize = parseInt(req.query.pageSize)
        const limit = pageSize
        const offset = page * pageSize
        console.log(offset, limit)
        const data = await viewOwnTeacherService(req.params.id)
        return res.status(200).json(data)
    } catch(err) {
        res.status(500).json({
        message:
        err.message || "some error occurred while viewing user" })
    }
}*/

const viewOwnSubjects = async (req,res) => {
    try {
        const page = parseInt(req.query.page)
        const pageSize = parseInt(req.query.pageSize)
        const limit = pageSize
        const offset = page * pageSize
        const orderBy = req.query.orderBy
        const order = req.query.order
        console.log(offset, limit)
        const minPassMarks = parseInt(req.query.minPassMarks)
        const maxPassMarks = parseInt(req.query.maxPassMarks)
        const data = await viewOwnTeacherService(req.params.id,offset,limit, orderBy, order,minPassMarks,maxPassMarks)
        return res.status(200).json(data)
    } catch(err) {
        res.status(500).json({
        message:
        err.message || "some error occurred while viewing user" })
    }
}

const viewOwnStudents = async (req,res) => {
    try {
        const page = parseInt(req.query.page)
        const pageSize = parseInt(req.query.pageSize)
        const limit = pageSize
        const offset = page * pageSize
        const orderBy = req.query.orderBy
        const order = req.query.order
        console.log(offset, limit)
        const minMarks = parseInt(req.query.minMarks)
        const maxMarks = parseInt(req.query.maxMarks)
        const minAtten = parseInt(req.query.minAtten)
        const maxAtten = parseInt(req.query.maxAtten)
        const data = await viewOwnStudentService(req.params.id,offset,limit,orderBy, order,minMarks,maxMarks,minAtten,maxAtten)
        return res.status(200).json(data)
    } catch(err) {
        res.status(500).json({
        message:
        err.message || "some error occurred while viewing user" })
    }
}

const getOneSubject = async (req,res) => {
    try {
        const data = await getOneTeacherService(req.params.id)
        return res.status(200).json(data)
    } catch(err) {
        res.status(500).json({
        message:
        err.message || "some error occurred while viewing user" })
    }
}

const updateSubject = async (req,res) => {
    try {
        const data = await updateTeacherService(req.params.id, req.body)
        return res.status(200).json('subject was updated')
    } catch(err) {
        res.status(500).json({
        message:
        err.message || "some error occurred while viewing user" })
    }
}

const deleteSubject = async (req,res) => {
    try {
        const num = await deleteSubjectService(req.params.id)
        return res.status(200).json('student was deleted')
    } catch(err) {
        res.status(500).json({
            message:
            err.message || "some error occurred while deleting subject"
        })
    }
}

const updateSubjectStudent = async (req,res) => {
    try {
        const data = await updateStudentTeacherService(req.params.id, req.body)
        return res.status(200).json('subject was updated')
    } catch(err) {
        res.status(500).json({
        message:
        err.message || "some error occurred while viewing user" })
    }
}

export { addSubject ,viewOwnSubjects, getOneSubject, updateSubject, deleteSubject, viewOwnStudents, updateSubjectStudent }