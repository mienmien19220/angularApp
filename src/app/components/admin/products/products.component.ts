import { Component, OnInit } from '@angular/core';
import { Product } from '../../game-store/game-product';
import { ProductService } from '../../game-store/game-productservice';
import { PrimeNGConfig } from 'primeng/api';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  formValue !: FormGroup;
  productModelObj : Product = new Product();
  // allProd: any=[];
  loading: boolean = true;
  showAdd!: boolean
  showbtn!: boolean;
  
  product: Product[];
  public products : any = [];
    
  
  
  constructor(private productService: ProductService,
    private primengConfig: PrimeNGConfig,
    private formbuilder: FormBuilder,
    private api:ApiService
    ) { }
  
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name : [''],
      price : [''],
      quantity : [''],
      inventoryStatus : [''],
      category : [''],
      image : [''],
      rating : ['']
    })
    this.getAllProd();
    

    this.primengConfig.ripple = true;
    this.loading = false;
    this.productService.getProducts().then(data => this.products = data,
      res => {

        this.products = res;
       
      });
      
  }
  postProductDetails(){
      this.productModelObj.name = this.formValue.value.name;
      this.productModelObj.price = this.formValue.value.price;
      this.productModelObj.inventoryStatus = this.formValue.value.inventoryStatus;
      this.productModelObj.quantity = this.formValue.value.quantity;
      this.productModelObj.category = this.formValue.value.category;
      this.productModelObj.image = this.formValue.value.image;
      this.productModelObj.rating = this.formValue.value.rating;

      this.api.postProd(this.productModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("product added successfully")
        let ref = document.getElementById('cancel');
        ref?.click();

        this.formValue.reset();
      },
      err=>{
        alert("product added failed")
      })

  }

  getAllProd() {
    this.api.getProd().subscribe(res=>{
      this.products = res;
      
    })
  }
  deleteProduct(product:any){
    this.api.deleteProd(product.id).subscribe(res=>{
      alert("deleted");
      this.getAllProd(); 
      //quick refresh data
      
    })
  }
    //edit
    onEditData(product:any){
      this.showAdd= false;
      this.showbtn= true;
      this.productModelObj.id = product.id;
      this.formValue.controls['name'].setValue(product.name);
      this.formValue.controls['price'].setValue(product.price);
      this.formValue.controls['inventoryStatus'].setValue(product.inventoryStatus);

      // console.log(data)
      
      }
  
      updateUser(){
        this.productModelObj.name = this.formValue.value.name;
        this.productModelObj.price = this.formValue.value.price;
        this.productModelObj.inventoryStatus = this.formValue.value.inventoryStatus;
        this.productModelObj.quantity = this.formValue.value.quantity;
        this.productModelObj.category = this.formValue.value.category;
        this.productModelObj.image = this.formValue.value.image;
        this.productModelObj.rating = this.formValue.value.rating;
  
        // this.api.updateDedo(this.productModelObj, this.productModelObj.id).subscribe(
        //   res =>{
            
        //     let ref = document.getElementById('clear');
        //     ref?.click();
  
        //     this.formValue.reset()
        //     this.getAllProd();
        //   }
        // )
      }

  displayBasic: boolean;
  openDialog() {
    this.displayBasic = true;
}
  
}
