import dotenv from "dotenv";
import express, { Express, RequestHandler } from 'express'
import { useExpressServer } from 'routing-controllers';
// import { createExpressServer } from 'routing-controllers'
import { UserController } from "./controller/user-controller";
import {ErrorHandler} from './middleware/errorHandler'
import httpContext from 'express-http-context';
import bodyParser from "body-parser";
// import log4js from "log4js";
dotenv.config()




// const logger:any = log4js.getLogger()
// logger.level = process.env.LOG_LEVEL
// logger.info('log4js log info')
// logger.debug('log4js log debug')
// logger.error('log4js log error');

const app:Express=express()

// const app = createExpressServer({
//     controllers:[UserController]
// })
const port = process.env.PORT

app.use(bodyParser.json())
app.use(httpContext.middleware);

useExpressServer(app, {
    controllers: [UserController],
    middlewares: [ErrorHandler],
    defaultErrorHandler:false
  
})
app.use((req, res, next) => {
    httpContext.ns.bindEmitter(req)
    httpContext.ns.bindEmitter(res)
    next()
})
// app.get('/', (_req:any, res:any) => res.send("good connect"))
// app.get('/',(req,res,next))
app.listen(port, () => console.log(`run ${port} port`));