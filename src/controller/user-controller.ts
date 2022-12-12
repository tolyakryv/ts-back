import {
    Controller, Get, Param,
    UseAfter,
    UseBefore,
} from 'routing-controllers'
import 'reflect-metadata'
import {loggingBefore, loggingAfter} from './../middleware/midleware'

@Controller()
    @UseBefore(loggingBefore)
    @UseAfter(loggingAfter)
export class UserController{

    @Get('user/:id')
    getOne(@Param('id') id: number) {
        console.log('do something in GET function...');
        return 'this action return user #' + id
    }
}