import { Component } from '@angular/core';
import { Products } from '../products/products';
import { CardService } from '../service/card-service';
import { ProductService } from '../service/product-service';
import { Slide } from '../slide/slide';

@Component({
  selector: 'app-home',
  imports: [Products, Slide],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
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
