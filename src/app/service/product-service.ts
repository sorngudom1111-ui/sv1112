import { Injectable } from '@angular/core';
declare const axios: any;
declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {

    let ng_this = this;
    $.LoadingOverlay("show");
    // Make a request for a user with a given ID
    axios.get('https://fakestoreapi.com/products')
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
  private product: any[] = []

  getProduct() {
    return this.product;
  }
}
