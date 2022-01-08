/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import axios from 'axios'

const instance = axios.create()

instance.interceptors.request.use((config) => {
  if (!(config.url.includes('login') || (config.url.includes('signup')))) config.headers.Authorization = localStorage.getItem('token')
  return config
}, (error) => {
  console.error('error here', error)
  return Promise.reject(error)
})

/* const makeRequest = (url, method, data = {}, headers) => axios({
  url,
  method,
  data,
  headers,
}) */

const makeRequest = async (url, method, data = {}) => {
  const headers = { Authorization: `${ localStorage.getItem('token') }` }
  const response = await instance({
    url,
    method,
    data,
    headers,
  })
  return response
}

const commanUrl = process.env.REACT_APP_PORTAL

const getRequest = (url) => makeRequest(url, 'GET')

const putRequest = (url, data) => makeRequest(url, 'put', data)

const postRequest = (url, data) => makeRequest(url, 'post', data)

const deleteReq = (url) => makeRequest(url, 'delete')

const signup = (body) => postRequest(`${ commanUrl }/users/signup`, body)

const login = (data) => postRequest(`${ commanUrl }/users/login`, data)

/* const getAll = () => getRequest(`${ commanUrl }/users/all`)

const addSub = ({
  name, description, subjectcode, passingmarks,
}, teacher) => postRequest(`${ commanUrl }/teacher/add`, {
  name,
  description,
  subjectcode,
  passingmarks,
  teacherId: teacher,
})

const getOwnTeacher = (teacherId, data) => getRequest(`${ commanUrl }/teacher/ownSubjects/${ teacherId }`, data)

const updateSubject = ({
  name, description, subjectcode, passingmarks,
}, subjectId) => putRequest(`${ commanUrl }/teacher/updatesubject/${ subjectId }`, {
  name,
  description,
  subjectcode,
  passingmarks,
})

const deleteSubject = (deleteId) => deleteRequest(`${ commanUrl }/teacher/deleteSubject/${ deleteId }`)

const enrollSubject = (attendance, marks, studentId, subjectId) => putRequest(`${ commanUrl }/student/enrollSubject/`, {
  attendance,
  marks,
  studentId,
  subjectId,
})

const getOwnEnroll = (studentId, data) => getRequest(`${ commanUrl }/student/enrolledSubjects/${ studentId }`, data)

/* const addSub = ({
  name, description, subjectcode, firstName, teacherId,
}, teacher) => (
  axios({
    method: 'post',
    url: 'http://localhost:8080/teacher/add',
    data: {
      name,
      description,
      subjectcode,
      firstName,
      teacherId: teacher,
    },
  })
)

const getStudents = (subjectId, data) => getRequest(`${ commanUrl }/teacher/ownStudents/${ subjectId }`, data)

const editStudent = ({ attendance, marks }, enId) => putRequest(`${ commanUrl }/teacher/editSubjectStudent/${ enId }`, {
  attendance,
  marks,
})
*/

/* export {
  signup, login, getAll, addSub, getOwnTeacher, updateSubject, deleteSubject, enrollSubject, getOwnEnroll, getStudents, editStudent,
} */

export {
  login, signup, getRequest, putRequest, postRequest, deleteReq,
}
