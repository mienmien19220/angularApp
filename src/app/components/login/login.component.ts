import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../list-user/list-user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private _http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }
  //login method
  logIn() {
    this._http.get<any>("http://localhost:3000/signup").subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email &&
          a.password === this.loginForm.value.password;
      })
      if (user) {
        alert("Login success!");
        this.loginForm.reset();
        this.router.navigate([''])
      } else {
        alert("User not found")
      }
    }, err => {
      alert("failed!")
    })
  }
}
