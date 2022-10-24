import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from './models/product';
import { ModalService } from './services/modal.service';
import { ProductServices } from './services/product.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Productik';
  loading = false;
  filterProductName = '';

  constructor(
    public modalService: ModalService,
    public productService: ProductServices
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.productService.getAll().subscribe(() => (this.loading = false));
  }
}
