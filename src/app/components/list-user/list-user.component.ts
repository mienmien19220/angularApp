import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { UserData } from './list-user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.sass']
})
export class ListUserComponent implements OnInit {

  formValue!: FormGroup
  DedoModelObject: UserData = new UserData
  allDedoData: any;
  showAdd!: boolean
  showbtn!: boolean;
  constructor(private formBuilder: FormBuilder,
    private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({

      name: [''],
      email: [''],
      phone: [''],
      password: ['']
    })
    this.getAllData()
  }
  clickAddUser(){
    this.formValue.reset();
    this.showAdd = true;
    this.showbtn = false;
  }
// subscribing data which is maped via Services...
  addUser(){
    this.DedoModelObject.name = this.formValue.value.name;
    this.DedoModelObject.phone = this.formValue.value.phone;
    this.DedoModelObject.email = this.formValue.value.email;
    this.DedoModelObject.password = this.formValue.value.password;

    this.api.postDedo(this.DedoModelObject).subscribe(res =>{
      alert("User Added Successfully!");
      let ref = document.getElementById('clear');
      ref?.click();

      this.formValue.reset()
      this.getAllData();
    },
    err=>{
      alert("Failed!")
    })
  }
  //Get all data
  getAllData(){
    this.api.getDedo().subscribe(res=>{
      this.allDedoData = res;
    })
  }
  //delete
  deleteData(data:any){
    this.api.deleteDedo(data.id).subscribe(res=>{
      alert("Deleted!")
      this.getAllData(); //quick refresh data
    })
  }

  //edit
  onEditData(data:any){
    this.showAdd= false;
    this.showbtn= true;
    this.DedoModelObject.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['phone'].setValue(data.phone);
    this.formValue.controls['email'].setValue(data.email);
    // console.log(data)
    
    }

    updateUser(){
      this.DedoModelObject.name = this.formValue.value.name;
      this.DedoModelObject.phone = this.formValue.value.phone;
      this.DedoModelObject.email = this.formValue.value.email;

      this.api.updateDedo(this.DedoModelObject,this.DedoModelObject.id).subscribe(
        res =>{
          alert("Updated!");
          let ref = document.getElementById('clear');
          ref?.click();

          this.formValue.reset()
          this.getAllData();
        }
      )
    }
}

