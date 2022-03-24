import { Injectable } from '@nestjs/common';

import { Product } from './product.model';

const { v4: uuidv4 } = require('uuid');

@Injectable()
export class ProductService {
    products: Product[] = [];

    insertProduct(title: string, desc: string, price: number): string {
        const prodId = uuidv4();
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);
        return prodId;
    }
}
