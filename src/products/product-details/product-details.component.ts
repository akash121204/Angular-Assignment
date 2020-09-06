import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppState } from 'src/app/store/app-state';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public product: Product;
  public products: Product[] = [];
  public id: string;
  public selectedColor: string;
  public colorsArray = ['check_circle'];
  public colorsArray2 = ['circle'];

  public constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params.id;
      this.selectedColor = params.selectedColor;
      this.store.select('product').subscribe((resposne) => {
        this.products = resposne;
        this.products.forEach((element) => {
          if (element.id === this.id) {
            this.product = element;
            console.log(this.product);
          }
        });
      });
    });
  }

  // public showIcon(color: string, index: number) {
  //   if (rating >= index + 1) {
  //     return 'star';
  //   } else {
  //     return 'star_border';
  //   }
  // }
}
