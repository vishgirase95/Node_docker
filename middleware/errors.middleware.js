const HttpStatus=require("http-status-codes");

const appErrorHandler=(err, req, res, next)=> {
    if (err.code && typeof err.code === 'number') {
    
      res.status(err.code).json({
        code: err.code,
        message: err.message
      });
    } else {
      next(err);
    }
  }
const genericErrorHandler=(err, req, res, next) =>{
    
  
    res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
      code: HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR,
      data: '',
      message: err.message
    });
  }

  module.exports={genericErrorHandler,appErrorHandler}
  