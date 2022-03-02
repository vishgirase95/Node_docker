
require('dotenv').config("./.env");
const {Sequelize,DataTypes}=require("sequelize");

const user=process.env.MYSQLDB_USER;
const password=process.env.MYSQLDB_ROOT_PASSWORD;
const host=process.env.DB_HOST;
const database=process.env.MYSQLDB_DATABASE;
const dialect=process.env.DIALECT;

const sequelize=new Sequelize(database,user,password,{
    host:host,
    dialect:dialect
});

sequelize.authenticate().then(()=>{
    console.log("database connceted",password);
}).catch((err)=>{
    console.log("Error in connecting datbase",err);
})


const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.users=require("./users")(sequelize,DataTypes);
db.sequelize.sync().then(()=>{
    console.log("datbase re-syn")
}).catch((err)=>{
    console.log("error",err)
})
module.exports=db;