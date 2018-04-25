import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  login = { "name": "", "password": "" };
  credentials = { "name": 'sourabh', "password": 'sourabh123' };
  submitted = false;
  onSubmit() {
    if (this.login.name === this.credentials.name && this.login.password === this.credentials.password) {
      alert('Login Successful');
      this.submitted = true;
      this.router.navigate(['/']);
    }
    else {
      alert('Login Failed, Please try again ');
    }
  }

  ngOnInit() {
  }

}