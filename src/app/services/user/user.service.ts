import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subject, Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public httpClient: HttpClient,
  ) { }

  getUsers(): Observable<any> {
    return this.httpClient.get<any>(environment.host + 'users').pipe();
  }
}
