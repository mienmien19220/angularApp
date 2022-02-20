import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  qty: number=1;
  public products : any = [];
  public grandTotal !: number;
  price: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  removeItem(product: any){
    this.cartService.removeCartItem(product);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  onPlusClick(){
    this.qty++;
  }

  onMinusClick(){
    this.qty--;
  }
  



}
