import { Component } from '@angular/core';
import { CardService } from '../service/card-service';
import { ProductService } from '../service/product-service';
import { Products } from '../products/products';

@Component({
  selector: 'app-product-page',
  imports: [Products],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css'
})
export class ProductPage {
  constructor(public cardService: CardService, public productService: ProductService) {

  }
  card_item: any[] = [];
  ngOnInit() {
    let card = localStorage.getItem('card_item') ?? '[]';
    this.card_item = JSON.parse(card);
  }

  addtocard(product: any) {
    this.cardService.addtocard(product);
    console.log(this.card_item)
  }

}
