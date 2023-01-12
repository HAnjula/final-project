import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductDto} from "../dto/ProductDto";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  saveProduct(product:ProductDto):Observable<any>{
    return this.http.post('http://127.0.0.1:3000/api/v1/item/save',{
      id: product.id,
      category: product.category,
      amount: product.amount,
      img_src: product.img_src,
    })
  }

  getProduct(id:string):Observable<any>{
    return this.http.get(`http://127.0.0.1:3000/api/v1/item/get`, {headers: new HttpHeaders({id})});
  }

  updateProduct(Product: ProductDto) {
    return this.http.put(`http://127.0.0.1:3000/api/v1/item/update`,{
      id: Product.id,
      category: Product.category,
      amount: Product.amount,
      img_src: Product.img_src,
    })

  }

  deleteItem(id:any) {
    return this.http.delete(`http://localhost:3000/api/v1/item/delete`,{headers: new HttpHeaders({id})})
  }

  listProduct():Observable<any>{
    return this.http.get(`http://localhost:3000/api/v1/item/list`)
  }

}
