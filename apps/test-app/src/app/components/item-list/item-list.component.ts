
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, OnInit,Input, Output, EventEmitter, } from '@angular/core';
import {ColumnList} from '../../model/column-list'
import {Sale} from '../../model/saleItem.model'
import { Action } from '@ngrx/store';
import { AppState } from '../../app.state';


@Component({
  selector: 'nx-angular-test-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
 SaleColumn:any; 
  dataSource: Observable<Sale[]>;;
 Empty="No items for sale.";
  constructor(private store: Store<AppState>) { 
    const columns=new ColumnList();
    this.SaleColumn=columns.screenmediaSale.split(',');
    this.dataSource = store.select('sale');

   }


  

  
  

   

  ngOnInit(): void {
    
  }
 


}
