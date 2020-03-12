import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';



@Injectable({
    providedIn: 'root'
})

export class TokenInterceptor implements HttpInterceptor {
    token: any;
    constructor(
        private router: Router,
        private auth: AuthService,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        this.token = localStorage.getItem("token");
        //Verificar que exista el token, para agregarlo al header de las peticiones
        if (this.token) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
        }else{
            this.router.navigateByUrl('/login');
        }

        return next.handle(request);
    }


}