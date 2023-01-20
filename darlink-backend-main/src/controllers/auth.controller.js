const { compareSync } = require("bcryptjs");
const { getTokenSecrete, getRefreshTokenSecrete } = require("../config/env");
const { getUsername, userExist } = require("../services");
const { APIError } = require("../utils/apiError");
const jwt = require('jsonwebtoken');
const responseBuilder = require('../utils/responsBuilder');
exports.ctrLogin =async(req,res,next)=>{
    try {
        const {username, password}=req.body;
        if(!username)
        next(APIError.badRequest("username is required"))
        if(!password)
        next(APIError.badRequest("password is required"))
        const exist= await getUsername(username);
        if(!exist)
        next(APIError.customError("User does  not exist",404));
        if(exist.error)
        next(APIError.customError());

        const verify = compareSync(password,exist.Password);
        if(!verify)
        next(APIError.unauthenticated("Incorrect password"));
        const data = responseBuilder.buildUser(exist);
        const payload = {id:exist.UserId,role:exist.Role};
        const token = jwt.sign(payload,getTokenSecrete(),{expiresIn:'30m'});
        const refreshToken = jwt.sign(payload,getRefreshTokenSecrete(),{expiresIn:"60m"});

       const response  = await responseBuilder.commonReponse("login successful",data,"user",{token,refreshToken});


        res.cookie('jwt',token,{
            httpOnly:false,
            secure:true,
            sameSite:'none',
            maxAge:60*60*1000
        })
        res.status(200).json(response)
    } catch (error) {
        next(error);
    }
}

exports.ctrLogout=async(req,res,next)=>{
    try {
        const cookies = req.cookies;
        if(!cookies?.jwt)
        return next(APIError.customError("No valid cookie",400));
        const token =cookies.jwt;
        const payload = jwt.decode(token,getTokenSecrete());
        const exist = await userExist(payload.id);
        if(!exist)
        return next(APIError.customError("User does not exist"));

        res.clearCookie('jwt');
        res.status(200).json({success:true,msg:"You have successfully logged out"});

    } catch (error) {
        next(error);
    }
}