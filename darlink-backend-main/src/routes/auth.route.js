const express =require('express');
const { ctrlLogin, ctrLogout } = require('../controllers/auth.controller');
const Controller = require('../controllers');
const { notFound, errorHandler } = require('../middlewares/error.middleware');

const authRoute=express.Router();

authRoute.post('/register', Controller.userControl.ctrRegister);
authRoute.post('/login', Controller.AuthControl.ctrLogin);
authRoute.post('/logout',Controller.AuthControl.ctrLogout);

authRoute.use("*",notFound);
authRoute.all(errorHandler);

module.exports={
    authRoute,
}