import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from './models/product';
import { ProductServices } from './services/products.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Productik';
  loading = false;
  products$: Observable<IProduct[]> | undefined;
  filterProductName = '';

  constructor(private productService: ProductServices) {}

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productService
      .getAll()
      .pipe(tap(() => (this.loading = false)));
  }
}
