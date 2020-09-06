import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Models/product';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() product: Product;
  private starCount = 5;
  public ratingArr = [];

  public constructor(private router: Router) {}

  public ngOnInit(): void {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  public showIcon(rating: number, index: number) {
    if (rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  public goToProductDetails(id: string, selectedColor: string = 'black'): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id,
        selectedColor
      },
    };
    this.router.navigate(['product-details'], navigationExtras);
  }
}
