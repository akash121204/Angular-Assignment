import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { InitialState } from '@ngrx/store/src/models';
import { Product } from 'src/products/Models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private http: HttpClient,
    private store: Store<InitialState<Product>>
  ) {}
  loadProductData() {
    this.http
      .get('assets/products.json')
      .subscribe((products: Array<Product>) => {
        // this.store.dispatch(LoadItems(products));
      });
  }
}
