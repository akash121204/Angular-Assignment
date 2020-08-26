import { Product } from 'src/products/Models/product';
import { Action } from '@ngrx/store';

export const ADD_PRODUCT = 'Add_Product';
export const DELETE_PRODUCT = 'Delete_Product';

export class AddProduct implements Action {
    readonly type = ADD_PRODUCT;
    constructor(public payload: Product) { }
}

export class DeleteProduct implements Action {
    readonly type = DELETE_PRODUCT;
    constructor(public id: string) { }
}

export type Actions = AddProduct | DeleteProduct;
