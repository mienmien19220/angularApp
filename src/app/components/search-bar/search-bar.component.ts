import { NumberInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {
  public totalItem : number = 0;

  constructor(private router:Router, private cartSevice : CartService) { }

  ngOnInit(): void {
    this.cartSevice.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    }

      )
  }

  onSubmit(form: NgForm){
    this.router.navigate(['search', form.value.search]);
  } 
}
