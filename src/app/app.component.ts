import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  public panelOpenState = false;
  public searchValue = '';
  public searchForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.createSearchForm();
  }

  public routeToAdd(): void {
    this.router.navigate(['add-product']);
  }

  public routeToProducts(): void {
    this.router.navigate(['products']);
  }

  private createSearchForm(): void {
    this.searchForm = this.formBuilder.group({
      name: [''],
    });
  }

  public filterBySearch(): void {
    console.log(this.searchForm.controls.name.value);
    localStorage.setItem('search', this.searchForm.controls.name.value);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (!changes) {
      return;
    }
    console.log(changes);
  }
}
