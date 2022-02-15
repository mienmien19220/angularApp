import { Component, OnInit } from '@angular/core';
import { ProductService } from './game-productservice';
import { Product } from './game-product';
import { SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { CartService } from 'src/app/services/cart.service';
import { ApiService } from 'src/app/shared/api.service';
@Component({
  selector: 'app-game-store',
  templateUrl: './game-store.component.html',
  styleUrls: ['./game-store.component.sass']
})
export class GameStoreComponent implements OnInit {

  public productList: any;

  products: Product[];

  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;

  constructor(private productService: ProductService, private primengConfig: PrimeNGConfig, private cartService: CartService, private api: ApiService) { }

  ngOnInit(): void {
    this.productService.getProducts().then(data => this.products = data,
      res => {

        this.productList = res;
        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price });
        });
        console.log(this.productList)
      });

    this.primengConfig.ripple = true;

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
  }
  addtocart(product: any) {
    this.cartService.addtoCart(product);
  }
  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}


