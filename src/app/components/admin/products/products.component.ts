import { Component, OnInit } from '@angular/core';
import { Product } from '../../game-store/game-product';
import { ProductService } from '../../game-store/game-productservice';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  loading: boolean = true;
  product: Product[];
  public products : any = [];
  
  
  
  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.loading = false;
    this.productService.getProducts().then(data => this.products = data,
      res => {

        this.products = res;
       
      });
      
  }
  
}
