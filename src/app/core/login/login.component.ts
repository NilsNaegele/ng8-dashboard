import { BlankLayoutCardComponent } from './blank-layout-card.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BlankLayoutCardComponent implements OnInit {
  public loginForm: FormGroup;
  public email;
  public password;
  public emailPattern = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$';
  public error: string;

  constructor(private fb: FormBuilder,
              private router: Router) {
    super();

    this.loginForm = this.fb.group({
      password: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailPattern),
        Validators.maxLength(20),
      ]),
    });
    this.email = this.loginForm.get('email');
    this.password = this.loginForm.get('password');
  }

  ngOnInit() {
    // this.authService.logout();
    this.loginForm.valueChanges.subscribe(() => {
      this.error = null;
    });
  }

  public login() {
    this.error = null;
    // if (this.loginForm.valid) {
    //   this.authService.login(this.loginForm.getRawValue())
    //     .subscribe(res => this.router.navigate(['/app/dashboard']),
    //                error => this.error = error.message);
    // }
  }

  public onInputChange(event) {
    event.target.required = true;
  }

}
