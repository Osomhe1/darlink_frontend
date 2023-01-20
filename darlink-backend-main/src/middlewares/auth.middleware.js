const { getTokenSecrete } = require("../config/env");
const { UserModule } = require("../controller");
const { APIError } = require("../utils/apiError");
const jwt = require("jsonwebtoken")

const adminRequired=(req,res,next)=>{
    try{
        const token = req.cookies.jwt;
        if(!token)
        return next(APIError.unauthenticated()); 
        const payload = jwt.verify(token, getTokenSecrete());
      if(payload.role.toLowerCase() !=="admin" && payload.role.toLowerCase() !=='dev' )
      return next(APIError.unauthorized()); 
        req.userId = payload.id;
        req.userRole = payload.role; 
        next();
    }catch(error){
    next(error);
    }
}
const userRequired =(req,res,next)=>{
    try{
        const token = req.cookies.jwt;
        if(!token)
        return next(APIError.unauthenticated());
        const payload= jwt.verify(token,getTokenSecrete());
        const isUser=  UserModule.checkByID(payload.id);
        if(isUser.error)
        return next(APIError.customError(`user does not exist`,404));
        req.userId=payload.id;
        req.userRole=payload.role;
        next();
    }catch(error){
        next(error);
    }
}

module.exports={
    adminRequired,
    userRequired,
}