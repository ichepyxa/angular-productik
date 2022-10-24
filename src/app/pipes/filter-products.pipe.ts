import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'filterProducts',
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: IProduct[], searchTitle: string): IProduct[] {
    if (searchTitle.length === 0) return products;
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
  }
}
