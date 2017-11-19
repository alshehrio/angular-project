import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from '../../../shared/services/login.service';

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
      .take(1)
      .subscribe(res => this.router.navigateByUrl(this.route.snapshot.queryParams.redirect || '/'));
  }
}
