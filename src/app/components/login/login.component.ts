import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor() { }

  ngOnInit(): void {
  }

  loginUser(){
    if(this.email== "admin@gmail.com" && this.password== "Admin"){
      alert("Welcome to My Website")
    }
    else{
      alert("please login again")
    }
  }
}
