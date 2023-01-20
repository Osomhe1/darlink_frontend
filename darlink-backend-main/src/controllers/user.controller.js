const { hashSync } = require("bcryptjs");
const { registerUser, userExist, getUsername, getUserbyEmail } = require("../services");
const { APIError } = require("../utils/apiError");
const { isValidEmail } = require("../utils/validation");

exports.ctrRegister =async(req,res,next)=>{
    try{
        const {username,password,email}=req.body;
        if(!username)
        next(APIError.badRequest('username is required'));
        if(!password)
        next(APIError.badRequest('password is required'));
        if(!email)
        next(APIError.badRequest('email is required'));
        if(!isValidEmail(email))
        next(APIError.badRequest("email is invalid"));
        const hashedPass = hashSync(password.trim(),12);
        const register = await registerUser(username.trim(),hashedPass,email.trim());
        if(!register)
        return next(APIError.customError())
        
        if(register.error)
        return next(APIError.customError(register.error,400));

        res.status(200).json(register);
    }catch(error){
        next(error);
    }
}

exports.ctrlFindUser=async(req,res,next)=>{
    try {
        if(!req.query.username && !req.query.email)
        next(APIError.badRequest());
        const data={};
        for(key in req.query){
            data[key]=req.query[key];
        }
        if(data.email){
            if(!isValidEmail(data.email))
            return next(APIError.customError("Invalid email",400));
        }
        if(data.username){
            const useExist = await getUsername(data.username);
            if(useExist){
                // build user

                res.status(200).json({success:true, msg:"found",user:userExist});
            }
        }
        if(data.email){
            const user = await getUserbyEmail(data.email);
            if(!user)
            return next(APIError.customError("Account was not found",404));
            if(user.error)
            return next(APIError.customError(user.error))
                // build user 
                res.status(200).json({success:true, msg:"found",user:user});
        }
    } catch (error) {
        next(error);
    }
}