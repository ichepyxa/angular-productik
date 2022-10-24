import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/models/product';
import { ModalService } from 'src/app/services/modal.service';
import { ProductServices } from 'src/app/services/product.services';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
})
export class CreateProductComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),
    ]),
    price: new FormControl<number>(0, [Validators.pattern('[0-9]*')]),
    description: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(255),
    ]),
  });

  get title() {
    return this.form.controls.title;
  }

  get price() {
    return this.form.controls.price;
  }

  get description() {
    return this.form.controls.description;
  }

  constructor(
    private modalService: ModalService,
    private productService: ProductServices
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      this.productService
        .create({
          title: this.title.value as string,
          price: this.price.value as number,
          description: this.description.value as string,
          image: 'https://i.pravatar.cc',
          category: 'electronic',
          rating: {
            rate: 1,
            count: 1,
          },
        })
        .subscribe(() => {
          this.modalService.close();
        });
    }
  }
}
