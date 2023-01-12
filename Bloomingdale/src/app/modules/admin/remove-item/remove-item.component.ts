import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-remove-item',
  templateUrl: './remove-item.component.html',
  styleUrls: ['./remove-item.component.scss']
})
export class RemoveItemComponent implements OnInit {

  removeItemForm = new FormGroup({
    id: new FormControl(null,[Validators.required]),
    category: new FormControl(null,[Validators.required]),
    amount: new FormControl(null,[Validators.required]),
    img_src: new FormControl(null,[Validators.required])
  });

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  loadDetails() {
    let id:any = this.removeItemForm.get('id')?.value
    this.productService.getProduct(id).subscribe(response=>{
      if(response != null){
        this.removeItemForm.patchValue(
          {
            category: response.data.value.category,
            amount: response.data.value.amount,
            img_src: response.data.value.img_src
          }
        )
      }
    })
  }

  removeItem() {
    let id:any = this.removeItemForm.get('id')?.value
    this.productService.deleteItem(id).subscribe(response=>{
      console.log(response)
      this.removeItemForm.patchValue(
        {
          id:'',
          category: '',
          amount: '',
          img_src: ''
        }
      )
    },error=>{
      console.log(error)
    })

  }
}
