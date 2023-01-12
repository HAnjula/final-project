import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productList: any;
  public totalItem:number=0;
  constructor(private productService:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
    this.productService.listProduct().subscribe(res=>{
      this.productList=res.data.value;

      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.amount});
      });

    })

    this.cartService.getProducts().subscribe(res=>{
      this.totalItem=res.length;
    })

  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
}
