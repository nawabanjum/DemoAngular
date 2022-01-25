import { Action } from '@ngrx/store'
import { Sale } from '../model/saleItem.model'
import * as collection  from '../actions/sale.actions'



export function reducer(state: Sale[] = [], action: collection.Actions) {

    switch(action.type) {
        case collection.ADD_SALE:
            return [...state, action.payload];
        default:
            return state;
    }
}