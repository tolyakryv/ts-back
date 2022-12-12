import { ExpressErrorMiddlewareInterface, Middleware } from 'routing-controllers';

@Middleware({ type: 'after' })
export class ErrorHandler implements ExpressErrorMiddlewareInterface {
    error(error: any, _request: any, response: any, next: () => any): void {
        response.status(error.statusCode || error.httpCode).json(error)
        next()
        
    }

}