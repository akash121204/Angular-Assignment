import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from 'src/products/base/base.component';
import { AddProductComponent } from 'src/products/add-product/add-product.component';
import { ProductDetailsComponent } from 'src/products/product-details/product-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'},
  { path: 'products', component: BaseComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'product-details', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
