import { LoginComponent } from './../login.component';
import { Component, OnInit } from '@angular/core';
import { BlankLayoutCardComponent } from '../blank-layout-card.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../login.component.scss']
})
export class ForgotPasswordComponent extends BlankLayoutCardComponent { }
