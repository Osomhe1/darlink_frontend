const express = require('express');
const routesRouter = express.Router();

const userRouteModule = require('./user.route');
const authRoutModule =require('./auth.route')

routesRouter.use('/user',userRouteModule.userRoute);
routesRouter.use("/auth",authRoutModule.authRoute);

module.exports={
    routesRouter,
}
