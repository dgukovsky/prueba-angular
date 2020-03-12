import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba-angular';
  public loading : boolean;

  constructor(
    private auth : AuthService,
  ) {
    this.auth.globalLoading.subscribe(result => {
      this.loading =  result;
    })
   
  }
}
