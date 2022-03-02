const res = require("express/lib/response");
const HttpStatus = require("http-status-codes");


const db = require("../model");
const Users = db.users;

const addUser = async (body) => {
    let Data = await Users.create(body)
    // let Data=await Users.create({name:`${body.name}`,email:`${body.email}`,gender:`${body.gender}`})
    return Data;
}

const fetchAll = async (body) => {
    let data = await Users.findAll();
    if (data !== null) {
        return data;

    } else {
        throw {
            code: HttpStatus.StatusCodes.NOT_FOUND,
            message: 'User not found in data base'
        }
    }
}

const fetchByID = async (req) => {
    const data = await Users.findOne({
        where: {
            id: `${req.params.id}`
        }
    })

    if (data != null) {
        return data;
    }
    throw {
        code: HttpStatus.StatusCodes.NOT_FOUND,
        message: 'User not found in data base'
    }


}
const update=async(req)=>{
const data=await Users.update(req.body,{
    where:{
        id:`${req.params.id}`
    }
})
console.log("updae",data[0])
if(data[0]!==0){
return "Updated";
}else{
    throw {
        code: HttpStatus.StatusCodes.NOT_FOUND,
        message: 'User not found in data base'
    }
}

}


const deleteByID=async(req)=>{
const data= await Users.destroy({
    where:{
        id:`${req.params.id}`
    }
})

if(data>0){
    return "deletd";

}else{
    throw {
        code: HttpStatus.StatusCodes.NOT_FOUND,
        message: 'User not found in data base'
    }
}
}


const deleteAll=async(req)=>{
    const data=await Users.destroy({
        truncate:true
    })
}
module.exports = {
    addUser,
    fetchAll,
    fetchByID,update,deleteByID,deleteAll
}