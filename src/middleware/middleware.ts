
import httpContext from 'express-http-context';

export function loggingBefore (_request: any, _response: any, next: (err?: any) => any): any {

  httpContext.set('traceId', 121);
  next();
}


export function loggingAfter (_request: any, _response: any, next: (err?: any) => any): any {
    console.log('do something After...');

  console.log(`tracedId = `,httpContext.get('traceId'));
  next();
}