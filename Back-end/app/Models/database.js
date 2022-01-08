import { Sequelize } from "sequelize"

const connect = new Sequelize("PORTAL", "root", "anshul01", {
  host: "localhost",
  dialect: "mysql",
})   
/*connect
  .sync({ logging: console.log})
  .then(() => console.log("connected correctly to db")) 
  .catch(err => console.log(err)) */

 const myConnect = async () => {
  try {
    await connect.sync({ logging: console.log});
    console.log("connected correctly to db")
  } catch(err) {
      console.log(err)
  }
}

myConnect()

export { connect }  

