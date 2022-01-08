import { enrollSubjectService , viewEnrolledStudentService } from '../../Services/Student/student'


const enrollSubject = async (req,res) => {
    try {
        const data = await enrollSubjectService(req.body)
        return res.status(200).json('subject was added')
    } catch(err) {
        res.status(500).json({
        message:
        err.message || "some error occurred while viewing user" })
    }
}

const enrolledSubjects = async (req,res) => {
    try {
        const page = parseInt(req.query.page)
        const pageSize = parseInt(req.query.pageSize)
        const limit = pageSize
        const offset = page * pageSize
        const orderBy = req.query.orderBy
        const order = req.query.order
        const minMarks = parseInt(req.query.minMarks)
        const maxMarks = parseInt(req.query.maxMarks)
        const minAtten = parseInt(req.query.minAtten)
        const maxAtten = parseInt(req.query.maxAtten)
        console.log(offset, limit)
        const data = await viewEnrolledStudentService(req.params.id,offset,limit,orderBy,order,minMarks,maxMarks,minAtten,maxAtten)
        return res.status(200).json(data)
    } catch(err) {
        res.status(500).json({
        message:
        err.message || "some error occurred while viewing user" })
    }
}


export { enrollSubject, enrolledSubjects }