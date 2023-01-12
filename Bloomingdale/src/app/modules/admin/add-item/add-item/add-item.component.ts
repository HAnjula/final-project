import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductDto} from "../../../../dto/ProductDto";
import {ProductService} from "../../../../service/product.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  addItemForm = new FormGroup({
    id: new FormControl(null,[Validators.required]),
    category: new FormControl(null,[Validators.required]),
    amount: new FormControl(null,[Validators.required]),
    img_src: new FormControl(null,[Validators.required])
  });
  constructor(private _snackBar: MatSnackBar,public productService:ProductService) { }

  ngOnInit(): void {
  }

  addItem() {
    let Product = new ProductDto(
      this.addItemForm.get('id')?.value,
      this.addItemForm.get('category')?.value,
      this.addItemForm.get('amount')?.value,
      this.addItemForm.get('img_src')?.value
    );
    this.productService.saveProduct(Product).subscribe(response=>{
      console.log(response)
      this.addItemForm.patchValue(
        {
          id:'',
          category: '',
          amount: '',
          img_src: ''
        }
      )

    },error => {
      console.log(error)
    })
  }
}
