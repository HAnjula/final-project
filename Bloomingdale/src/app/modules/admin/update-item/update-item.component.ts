import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../service/product.service";
import {ProductDto} from "../../../dto/ProductDto";

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})
export class UpdateItemComponent implements OnInit {

  updateItemForm = new FormGroup({
    id: new FormControl(null,[Validators.required]),
    category: new FormControl(null,[Validators.required]),
    amount: new FormControl(null,[Validators.required]),
    img_src: new FormControl(null,[Validators.required])
  });

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  loadDetails() {
    let id:any = this.updateItemForm.get('id')?.value
    this.productService.getProduct(id).subscribe(response=>{
      if(response != null){
        this.updateItemForm.patchValue(
          {
            category: response.data.value.category,
            amount: response.data.value.amount,
            img_src: response.data.value.img_src
          }
        )
      }
    })
  }

  updateItem() {
    let Product = new ProductDto(
      this.updateItemForm.get('id')?.value,
      this.updateItemForm.get('category')?.value,
      this.updateItemForm.get('amount')?.value,
      this.updateItemForm.get('img_src')?.value,
    );
    this.productService.updateProduct(Product).subscribe(response=>{
      this.updateItemForm.reset()
      console.log('Success')
    },error => {
      console.log(error)
    })
  }
}
