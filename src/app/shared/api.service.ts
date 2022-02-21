import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '../components/game-store/game-product';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { 
   

  } 

//   getProducts() {
//     return this._http.get<any>('assets/products.json')
//     .toPromise()
//     .then(res => <Product[]>res.data)
//     .then(data => { return data; });
// }
//define POST, GET, PUT, DELETE product
  postProd(data:any){
    return this._http.post<any>("http://localhost:3000/product", data).pipe(map((res:any)=> {
      return res;
    }))
  }
   //get product data using GET
    getProducts(){
    return this._http.get<any>("http://localhost:3000/product").pipe(map((res:any)=> {
      return res;
    }))
  }
   //update product data using put
   updateProd(product:any, id:number){
    return this._http.put<any>("http://localhost:3000/product/"+id,product).pipe(map((res:any)=> {
      return res;
    }))
  }
  //delete
  deleteProd(id:number){
    return this._http.delete<any>("http://localhost:3000/product/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }

  
  //define POST, GET, PUT, DELETE user
  postDedo(data:any){
    return this._http.post<any>("http://localhost:3000/signup", data).pipe(map((res:any)=> {
      return res;
    }))
  
  }
  //get Dedo data using GET
  getDedo(){
    return this._http.get<any>("http://localhost:3000/signup").pipe(map((res:any)=> {
      return res;
    }))
  }
  //update dedo data using put
  updateDedo(data:any, id:number){
    return this._http.put<any>("http://localhost:3000/signup/"+id,data).pipe(map((res:any)=> {
      return res;
    }))
  }
  //delete
  deleteDedo(id:number){
    return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }

}