import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
 HttpErrorResponse
} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()
export class CustHttpIntercept implements HttpInterceptor{
    constructor(private router: Router){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    
      if(localStorage.getItem('token')!=null){
        request = request.clone({
          setHeaders: {
            Authorization: localStorage.getItem('token'),
          }
        });
    }
        return next.handle(request).pipe(
          retry(1),
          catchError((error: HttpErrorResponse) => {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = `Error: ${error.error.message}`;
            } else {
              // server-side error
              errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            switch(error.status){
              case 0:alert("Internal Server Error");
                this.router.navigate(['login']);
              break;
              case 204 :alert("Not Available");
              break;
              case 401:alert("Unauthorized");
              break;
              case 404:alert("Requested is invalid");
              break;
              case 409:alert("Already Exist");
              break;
              case 500:alert("Internal Server Error");
              break;
              default:alert(errorMessage);
              break;
            }
            return throwError(errorMessage);
          })
        )
      }
}
