import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { UserData } from './list-user.model';
import {ConfirmationService, MessageService, PrimeNGConfig,Message} from "primeng/api"
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.sass']
})
export class ListUserComponent implements OnInit {
  msgs1: Message[];
  msgs2: Message[];

  formValue!: FormGroup
  DedoModelObject: UserData = new UserData
  UserData: any=[];
  allDedoData: any[];
  showAdd!: boolean
  showbtn!: boolean;
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private formBuilder: FormBuilder,
    private api:ApiService) { }

  ngOnInit(): void {
    this.msgs1 = [
      {severity:'success', summary:'Success', detail:'Message content'},
      {severity:'info', summary:'Info', detail:'Message content'},
      {severity:'warn', summary:'Warning', detail:'Message content'},
      {severity:'error', summary:'Error', detail:'Message content'}

    ];

    this.UserData.push(this.DedoModelObject)
    this.formValue = this.formBuilder.group({
    
      name: [''],
      email: [''],
      phone: [''],
      password: ['']
    })
    console.log(this.DedoModelObject)
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
      // alert("User Added Successfully!");
      
      let ref = document.getElementById('clear');
      ref?.click();

      this.formValue.reset()
      this.getAllData();
    },
    err=>{
      this.showErorr();
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
      this.showSuccess();
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
          
          let ref = document.getElementById('clear');
          ref?.click();

          this.formValue.reset()
          this.getAllData();
        }
      )
    }

    //toast
    showSuccess() {
      this.messageService.add({severity:'success', summary:'Success', detail:'Message content'});
    }
  
    showInfo() {
      this.messageService.add({severity:'info', summary:'Info', detail:'Message content'});
  
    }
    showWarn() {
      this.messageService.add({severity:'warn', summary:'Warning', detail:'Message content'});
    }
  
    showErorr() {
      this.messageService.add({severity:'error', summary:'Erorr', detail:'Message content'});
    }

    showConfirm() {
      this.messageService.clear();
        this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
    }
}

