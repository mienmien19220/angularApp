import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  constructor(
    private _http:HttpClient
  ) { }
}
