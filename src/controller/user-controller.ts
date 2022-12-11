import { Controller, Get, Param } from 'routing-controllers'
import 'reflect-metadata'

@Controller()
export class UserController{
    @Get('/user/:id')
    getOne(@Param('id') id: number) {
        return 'this action return user #' + id
    }
}