import sequelize from "sequelize"
import { Sequelize } from "sequelize"

const StudentModel = connect => connect.define("students", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
      },
  
})

export default StudentModel 
  
