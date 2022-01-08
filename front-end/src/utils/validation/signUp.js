import * as yup from 'yup'

const Validation = yup.object().shape({
  firstName: yup.string().required('firstname is Required'),
  lastName: yup.string().required('lastname is Required'),
  age: yup.number('must be a number').typeError('age is required').positive().integer('must be an integer')
    .required('age is required'),
  gender: yup.string().required('gender is required'),
  type: yup.string().required('type is required'),
  username: yup.string().required('username is Required'),
  password: yup.string().min(4, 'too short').max(12).required('password is Required'),
  email: yup.string().email('not an email').required('Email is required'),

})

export default Validation
