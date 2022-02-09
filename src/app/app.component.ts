import { Component } from '@angular/core';
import {ConfirmationService, MessageService, PrimeNGConfig,Message} from "primeng/api" 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dedoDedo';
  msgs1: Message[];
  msgs2: Message[];
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,

  ){}
  confirm(event: Event){
    this.confirmationService.confirm({
      target: event.target,
      message: "Confirm?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this. messageService.add({
          severity: "info",
          summary: "Confirmed",
          detail: "You have accepted"
        });
      },
      reject: () => {
        this. messageService.add({
          severity: "error",
          summary: "rejected",
          detail: "You have rejected"
        }); 
      }
    });
  }  
  ngOnInit(){
    // this.primengConfig.ripple = true;
    this.msgs1 = [
      {severity:'success', summary:'Success', detail:'Message content'},
      {severity:'info', summary:'Info', detail:'Message content'},
      {severity:'warn', summary:'Warning', detail:'Message content'},
      {severity:'error', summary:'Error', detail:'Message content'}

    ];
    
    this.primengConfig.ripple = true;
  }

  addMessages(){
    this.msgs2 = [
      {severity:'success', summary:'Success', detail:'Message content'},
      {severity:'info', summary:'Info', detail:'Message content'},
      {severity:'warn', summary:'Warning', detail:'Message content'},
      {severity:'error', summary:'Error', detail:'Message content'}
    ];
  }

  clearMessages() {
    this.msgs2 = [];  
  }

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

  showViaService() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }

  showConfirm(){
    this.messageService.clear();
        this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
  }
}


