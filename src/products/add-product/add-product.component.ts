import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppState } from 'src/app/store/app-state';
import { Store } from '@ngrx/store';
import { AddProduct } from 'src/app/store/actions';
import { Product } from '../Models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  public addProductForm: FormGroup;
  public productsCount: number;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.store.select('product').subscribe((resposne) => {
      this.productsCount = resposne.length;
      this.createProductForm();
    });
  }

  private createProductForm(): void {
    this.addProductForm = this.formBuilder.group({
      id: [this.productsCount + 1],
      name: ['', Validators.required],
      image: [''],
      description: [''],
      brand: [''],
      price: [''],
    });
  }

  public submit(): void {
    if (!this.addProductForm.valid) {
      return;
    }
    this.store.dispatch(
      new AddProduct({
        id: this.addProductForm.controls.id.value,
        name: this.addProductForm.controls.name.value,
        image: 'https://img.xfinitymobile.com/image/upload/v1594064755/client/catalog/devices/samsung/Galaxy_Note20_Ultra_5G_MysticBronze_PRI.png',
        description: this.addProductForm.controls.description.value,
        category: this.addProductForm.controls.brand.value,
        price: this.addProductForm.controls.price.value
      })
    );
    this.routeToProductList();
  }

  public routeToProductList(): void {
    this.router.navigate(['products']);
  }
}
