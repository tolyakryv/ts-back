// import express from "express";
import dotenv from "dotenv";
// import { useExpressServer } from 'routing-controllers';
import { createExpressServer } from 'routing-controllers'
import { UserController } from "./controller/user-controller";
import httpContext from 'express-http-context';
// import log4js from "log4js";
dotenv.config()




// const logger:any = log4js.getLogger()
// logger.level = process.env.LOG_LEVEL 
// logger.info('log4js log info')
// logger.debug('log4js log debug')
// logger.error('log4js log error');


const app = createExpressServer({
    controllers:[UserController]
})
const port = process.env.PORT
app.use(httpContext.middleware);
app.get('/', (_req:any, res:any) => res.send("good connect"))
// app.get('/',(req,res,next))
app.listen(port, () => console.log(`run ${port} port`));