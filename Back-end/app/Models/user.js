import sequelize from "sequelize"
import { Sequelize } from "sequelize"

const UserModel = connect => connect.define("user", {
    id: {
      type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type:sequelize.STRING,
        allowNull:false,
        unique:true,
      },
      email: {
        type:sequelize.STRING,
        allowNull:false,
        unique:true,
      },
      password: {
        type:sequelize.STRING,
        allowNull: false,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
      },
})

export  default UserModel   
  