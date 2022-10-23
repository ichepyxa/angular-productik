import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor() {}

  ngOnInit(): void {}

  submit() {
    console.log(this.form);
  }
}
