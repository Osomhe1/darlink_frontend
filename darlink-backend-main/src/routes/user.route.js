const express =require('express');
 
const Controller = require('../controllers');
const { errorMiddleWareModule } = require('../middlewares');
const userRoute=express.Router();
userRoute.get("/forgot-password",Controller.userControl.ctrlFindUser);

userRoute.use("*",errorMiddleWareModule.notFound);
userRoute.all(errorMiddleWareModule.errorHandler);

module.exports={
    userRoute,
}