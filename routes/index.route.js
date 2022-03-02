const express=require("express");
const router=express.Router();

const user=require("./user.route.js")
const route=()=>{
router.get("/",(req,res)=>{
res.send("wellcome");
})

router.use("/user",user) 
return router;
}

module.exports=route;