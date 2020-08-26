import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Models/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() product: Product;

  public constructor(private httpClient: HttpClient) {}

  public ngOnInit(): void {
  }
}
