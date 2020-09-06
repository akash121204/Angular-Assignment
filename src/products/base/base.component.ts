import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { AppState } from 'src/app/store/app-state';
import { Store } from '@ngrx/store';
import { element } from 'protractor';

@Component({
  selector: 'app-product-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  public products: Product[];
  public pagedData: Product[];
  public page = 0;
  public size = 10;
  public searchValue = '';

  public constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.searchValue = localStorage.getItem('search');
    this.store.select('product').subscribe((resposne) => {
        this.products = resposne;
        console.log(this.searchValue);
        this.getPagedData({ pageIndex: this.page, pageSize: this.size });
      });
  }

  public getPagedData(obj: any): void {
    let index = 0;
    const startingIndex = obj.pageIndex * obj.pageSize;
    const endingIndex = startingIndex + obj.pageSize;

    this.pagedData = this.products.filter(() => {
      index++;
      return index > startingIndex && index <= endingIndex ? true : false;
    });
  }
}
