import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subject, Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticationState = new BehaviorSubject<boolean>(false);
  globalLoading = new BehaviorSubject<boolean>(false);


  constructor(
    public httpClient: HttpClient,
    private router: Router,
  ) { }

  login(data): Observable<any> {
    return this.httpClient.post(environment.host + 'login', {email: data.email,password: data.password}).pipe();
  }

  logout(){
    localStorage.removeItem('token');
    this.authenticationState.next(false);
    this.router.navigateByUrl('/login');
  }

  isAuthenticated() {
    let token = localStorage.getItem("token");
    if(token) return true;
    return false;
  }
}
