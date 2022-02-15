import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor(){}
    
    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {            
                'x-rapidapi-key': '09ee04c512msh6f02b0500e8a15dp11b7c2jsnf3f6f37c054f',
                'x-rapidapi-host':'rawg-video-games-database.p.rapidapi.com',
            },
            setParams: {
                key: '565e449cf80041268b94b78408f027a8',
            }
        });
        return next.handle(req);
    }
}
