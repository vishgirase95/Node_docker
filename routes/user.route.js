const express=require("express");
const router=express.Router();
const userController=require("../controller/userController.js")

// create new user
router.post("/",userController.addUser);

// fetch all user
router.get("/",userController.fetchAll);


// fetch by id
router.get("/:id",userController.fetchByID);


// update user
router.patch("/:id",userController.update);

// delete by id
router.delete("/:id",userController.deleteByID);

// deleteall
router.delete("/",userController.deleteAll);



module.exports=router;