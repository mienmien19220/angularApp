import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.sass']
})
export class MenubarComponent implements OnInit {

  items: MenuItem[];
  public totalItem: number = 0;
  constructor(private router:Router, private cartService : CartService) { }

  ngOnInit() {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })

    this.items = [
      {
        label: 'DEDO ON DEDO',        
        url: '/'
      },
      {
        label: 'Store',
        url: '/gameProduct'
        
      },
      
      {
        label: 'Admin',
        icon: 'pi pi-fw pi-user',
        url: '/admin'
      },
      {
        label: 'Game Pass',
        items: [
          {
            label: 'Overview',
            url:'/'
            
          },
          {
            label: 'Browse Games',
            url:'/'
           
          },
          {
            label: 'PC Game Pass',
            url:'/'
           
          },

        ]
      },
      // {
      //   label: 'Cart',
      //   icon: 'pi pi-shopping-cart',        
      //   url: '/cart'
      // },
      {
        label: 'ContactUs',        
        url: '/contact'
      },
      {
        label: 'SignIn',        
        icon:'pi pi-sign-in',
        url: '/login'
      },
     
    ];
  }
  onSubmit(form: NgForm){
    this.router.navigate(['search', form.value.search]);
  } 

}
