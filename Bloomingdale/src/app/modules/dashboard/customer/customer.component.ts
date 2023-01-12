import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";
import {OrderService} from "../../../service/order.service";
import {CartService} from "../../../service/cart.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OrderDto} from "../../../dto/OrderDto";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(public cartService: CartService, public orderService:OrderService,private router:Router, private authService: AuthService) { }

  list: any [] =[]
  paymentForm = new FormGroup({
      address: new FormControl(null, [Validators.required]),
      contact: new FormControl(null, [Validators.required])
    }
  )

  ngOnInit(): void {
  }

  back() {
    window.history.back()
  }
  getCartList(){
    return this.cartService.cartItemList
  }

  placeOrder() {
    let order =new OrderDto(
      this.authService.activeCustomerDetail,
      this.cartService.cartItemList,
      this.cartService.getTotalPrice(),
      this.paymentForm.get('address')?.value,
      this.paymentForm.get('contact')?.value,
      new Date()
    )
    this.orderService.placeOder(order).subscribe(response=>{
      this.router.navigate(['/dashboard'])
      this.cartService.cartItemList = []
    })
  }
}
