import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  username = environment.username;
  password = environment.password;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      userName: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  inputChange(data) {
    if (data.control !== undefined) {
      data.control.setValue(data.$event.target.value);
    }
  }

  loginHandler() {
    let username = this.loginForm.controls.userName.value;
    let password = this.loginForm.controls.password.value;

    if (username === this.username && password === this.password) {
      localStorage.setItem('loggedIn', 'true');
      this.router.navigateByUrl('/dashboard');
    } else {
      this.toastr.error('Invalid User', 'Error', {
        timeOut: 3000,
      });
    }
  }
}
