import { Component, OnInit ,OnChanges } from '@angular/core';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import {Sale} from '../../model/saleItem.model'
import * as SaleActions from '../../actions/sale.actions';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'nx-angular-test-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {  
  form!: FormGroup;
  submitted = false;
   disableBtn = false;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) { 

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      Title: ['', [Validators.required]],
      Description: [''],
      Price: ['', [Validators.required]]
    });
  }
// convenience getter for easy access to form fields
get f() {
  return this.form.controls;
}
ngOnChanges() {
  if (this.form.valid) {
    this.disableBtn=true
  }else{
    this.disableBtn=false
  }
}
  addSaleItem() {
   
    if (!this.form.valid) {
      return;
    }
    
    
    this.store.dispatch(new SaleActions.AddSale( {     
                                Id:this.randomId(20),
                                Description: this.form.value.Description,
                                Title: this.form.value.Title,
                                Price:this.form.value.Price,
                                Disabled:false
                              }) 
    )
    this.form.reset();
}
randomId(length:any) {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}
}
