import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../service/card-service';
declare const axios: any;
declare const $: any;

@Component({
  selector: 'app-produsts-detail',
  imports: [CommonModule],
  templateUrl: './produsts-detail.html',
  styleUrl: './produsts-detail.css'
})
export class ProdustsDetail {
  product: any = {};

  constructor(private route: ActivatedRoute, public cardService: CardService) { }

  ngOnInit(): void {
    const product_id: string | null = this.route.snapshot.queryParamMap.get('product_id');

    let ng_this = this;
    $.LoadingOverlay("show");
    // Make a request for a user with a given ID
    axios.get(`https://fakestoreapi.com/products/${product_id}`)
      .then(function (response: any) {
        // handle success
        ng_this.product = response.data;
        $.LoadingOverlay("hide");
      })
      .catch(function (error: any) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  card_item: any[] = [];
  addtocard(product: any) {
    this.cardService.addtocard(product);
    console.log(this.card_item)
  }
}
