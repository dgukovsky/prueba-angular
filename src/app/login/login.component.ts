import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private auth : AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Reactive form
    this.form = this._formBuilder.group({
      email   : ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
  });
  }

  //LLamada al Servicio
  login(){
    this.auth.globalLoading.next(true);
    this.auth.login(this.form.value).subscribe(result => {
      localStorage.setItem('token', result.token);
      this.auth.authenticationState.next(true);
      this.auth.globalLoading.next(false);
      this.router.navigateByUrl('/dashboard');
    },err =>{
      // cuando el usuario no existe..
      alert(err.error.error);
      this.auth.globalLoading.next(false);
    })
  }

  

}
