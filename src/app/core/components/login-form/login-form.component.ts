import { LoginService } from '../../../shared/services/login.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [LoginService]
})
export class LoginFormComponent {

  constructor(private loginService: LoginService, private route: ActivatedRoute, private router: Router) { }

  login(form: NgForm) {
    this.loginService.login(form.value.email, form.value.password)
      .subscribe(
        res => this.router.navigate([ this.route.snapshot.queryParams.redirect || '' ]),
        //error => form.errors = error
      );
  }
}
