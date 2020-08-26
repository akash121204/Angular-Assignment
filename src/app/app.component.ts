import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public pageHeading = 'Products';

  constructor(private router: Router) {}

  public routeToAdd(): void {
    this.router.navigate(['add-product']);
  }

  public routeToProducts(): void {
    this.router.navigate(['products']);
  }
}
