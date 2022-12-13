import {
    Body,
    Controller, Get, OnUndefined, Param,
    Post,
    UseAfter,
    UseBefore,
} from 'routing-controllers'
import 'reflect-metadata'
import {
    loggingBefore,
    loggingAfter
} from '../middleware/middleware'
import { BodyPost } from '../types/type'
import httpContext from 'express-http-context'

@Controller()
   
export class UserController{
     
    @Get('/user/:id')
    @UseBefore(loggingBefore)
    @UseAfter(loggingAfter)
    getOne(@Param('id') id: number) {
        console.log('do something in GET function...');
        httpContext.set('id', id)
        console.log(`Id = `,httpContext.get('id'));
        return 'this action return user #' + id
    }

    @Post('/user/:pid')
        @OnUndefined(204)
    postOne(@Param('pid') _id: number, @Body() info: BodyPost) {
        console.log(JSON.stringify(info))
        httpContext.set('pid',_id)
         console.log(`postId = `,httpContext.get('pid'));
        
    }
}