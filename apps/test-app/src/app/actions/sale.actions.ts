
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Sale } from './../model/saleItem.model'


export const ADD_SALE       = '[SALE] Add'
export const FIND_SALE       = '[SALE] Find'

export class AddSale implements Action {
    readonly type = ADD_SALE

    constructor(public payload: Sale) {}
}
export class FindSale implements Action {
    readonly type = FIND_SALE

    constructor(public payload: number) {}
}

export type Actions = AddSale | FindSale