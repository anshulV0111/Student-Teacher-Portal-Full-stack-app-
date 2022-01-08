import sequelize from "sequelize"
import { Sequelize } from "sequelize"
import StudentModel from './student'
import SubjectModel from './subject'

const EnrolledSubjects = connect => connect.define("enrolledsubjects", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
      },
    attendance: {
      type: Sequelize.INTEGER,
      allowNull: false
    },  
    marks: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    studentId: {
        type: sequelize.INTEGER,
        references: {
          model: StudentModel, 
          key: 'id'
        }
      },
    subjectId: {
        type: sequelize.INTEGER,
        references: {
          model: SubjectModel, 
          key: 'id'
        }
      }  
})

export default EnrolledSubjects
