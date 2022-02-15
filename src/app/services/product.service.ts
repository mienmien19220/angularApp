import { Injectable } from '@angular/core';
import { Product } from '../components/game-store/game-product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    
  ]

  constructor() { }

  getProducts(): Product[]{

    return this.products
  }
}
