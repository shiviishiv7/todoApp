import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,

} from "@angular/common/http";
import {Observable, of} from "rxjs";


export class Auth implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

   return next.handle(req)

  }

}
