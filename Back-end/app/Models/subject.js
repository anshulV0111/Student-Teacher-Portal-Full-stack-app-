import sequelize from "sequelize"
import { Sequelize } from "sequelize"

const SubjectModel = connect => connect.define("subjects", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
      },
    subjectcode: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique:true,
    },  
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
      },
    passingmarks: {
      type: sequelize.INTEGER
    },
    description: {
      type: sequelize.STRING
    }  
})

export default SubjectModel 
  
