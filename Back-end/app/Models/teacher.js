import sequelize from "sequelize"
import { Sequelize } from "sequelize"

const TeacherModel = connect => connect.define("teacher", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
      },
  
})

export default TeacherModel 
  
