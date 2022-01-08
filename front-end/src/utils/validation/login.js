import * as yup from 'yup'

const Validation = yup.object().shape({
  username: yup.string().required('Required'),
  password: yup.string().min(4).max(12).required('Required'),

})

export default Validation
