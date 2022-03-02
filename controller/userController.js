const db=require("../model");
const Users=db.users;

const HttpStatus=require("http-status-codes");
const UserService=require("../services/user.service.js")

//  addUser=async (req,res)=>{
//     let Data=await Users.create({name:"vishal2",email:"vish@gmail.com",gender:"male"})
//     // data.save();
//     res.json({
//         messege:"ok",
//         data:Data
//     })
// }



const addUser =async (req, res, next) => {
    try {
    
      const data =await UserService.addUser(req.body)
      res.status(HttpStatus.StatusCodes.CREATED).json({
        code: HttpStatus.StatusCodes.CREATED,
        data: data,
        message: 'User created successfully'
      });
    
    } catch (error) {
      next(error);
    }
  };


const fetchAll =async (req, res, next) => {
    try {
      const data =await UserService.fetchAll(req.body)
      res.status(HttpStatus.StatusCodes.OK).json({
        code: HttpStatus.StatusCodes.OK,
        data: data,
        message: 'Fetched successfully'
      });
    
    } catch (error) {
      next(error);
    }
  };


  const fetchByID =async (req, res, next) => {
    try {
      const data =await UserService.fetchByID(req)
      res.status(HttpStatus.StatusCodes.OK).json({
        code: HttpStatus.StatusCodes.OK,
        data: data,
        message: 'Fetched successfully'
      });
    
    } catch (error) {
      next(error);
    }
  }


  const update =async (req, res, next) => {
    try {
      const data =await UserService.update(req)
      res.status(HttpStatus.StatusCodes.OK).json({
        code: HttpStatus.StatusCodes.OK,
        data: data,
        message: 'Update successfully'
      });
    
    } catch (error) {
      next(error);
    }
  }

  const deleteByID =async (req, res, next) => {
    try {
      const data =await UserService.deleteByID(req)
      res.status(HttpStatus.StatusCodes.OK).json({
        code: HttpStatus.StatusCodes.OK,
        data: data,
        message: 'Deleted successfully'
      });
    
    } catch (error) {
      next(error);
    }
  }


  const deleteAll =async (req, res, next) => {
    try {
      const data =await UserService.deleteAll(req)
      res.status(HttpStatus.StatusCodes.OK).json({
        code: HttpStatus.StatusCodes.OK,
        data: data,
        message: 'Deleted successfully'
      });
    
    } catch (error) {
      next(error);
    }
  }
module.exports={
    addUser,fetchAll,fetchByID,update,deleteByID,deleteAll
}