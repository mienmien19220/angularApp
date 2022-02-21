import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../admin/list-user/list-user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup

  constructor(private formBuilder:FormBuilder, private _http:HttpClient,
    private router:Router) { }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group(
      {
        name:[''],
        email:[''],
        phone: [''],
        password: ['']
      }

    )
  }
  //make method create User
  signUp(){
    this._http.post<any>("http://localhost:3000/signup", 
    this.signupForm.value).subscribe(res=>{
      
      this.signupForm.reset();
      this.router.navigate(['login'])
      }
    )
  }

}