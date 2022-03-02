const Express=require("express");
const dotenv=require("dotenv");
dotenv.config(".env");
const model=require("./model/index.js");
const app=Express();
const controller=require("./controller/userController.js");
const routes=require("./routes/index.route.js")
const errors=require("./middleware/errors.middleware.js")

const port=process.env.NODE_DOCKER_PORT;
app.use(Express.json());
app.use("/", routes());

app.use(errors.appErrorHandler);
app.use(errors.genericErrorHandler);

app.listen(port,(err,result)=>{
    if(err){
        console.log("Error",err);
    }else{
        console.log(`Server running at prort http://localhost:${port}`);
    }

})