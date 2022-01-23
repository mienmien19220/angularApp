import { Component, OnInit } from '@angular/core';
import { ProductService } from './productservice';
import { Product } from './product';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  constructor(private productService: ProductService) { }
  products: Product[];
  ngOnInit(): void {
    this.productService.getProductsSmall().then(data => this.products = data);
  }

}
