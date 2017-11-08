import { LoginService } from './../services/login.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

  constructor(private loginService: LoginService, private route: ActivatedRoute, private router: Router) { }

  login(form: NgForm) {
    this.loginService.login(form.value.email, form.value.password)
      .subscribe(
        res => this.router.navigate([ this.route.snapshot.queryParams.redirect || '' ]),
        //error => form.errors = error
      );
  }
}
