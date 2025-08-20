import { Injectable } from '@angular/core';
declare const Swal: any;

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() {
    let card = localStorage.getItem('card_item') ?? '[]';
    this.card_item = JSON.parse(card);
  }
  private card_item: any[] = [];

  addtocard(product: any) {
    let dpl_index: any = this.card_item.findIndex((x: any) => x.id === product.id);
    if (dpl_index > -1) {
      this.card_item[dpl_index].qty++;
    } else {
      product.qty = 1
      product.is_select = false
      this.card_item.push(product);
    }
    localStorage.setItem('card_item', JSON.stringify(this.card_item));
  }

  getCarditem() {
    return this.card_item;
  }

  incrementqty(item: any) {
    let index: any = this.card_item.findIndex((x: any) => x.id === item.id);
    this.card_item[index].qty++;
    localStorage.setItem('card_item', JSON.stringify(this.card_item));
  }

  decrementqty(item: any) {
    if (item.qty > 1) {
      let index: any = this.card_item.findIndex((x: any) => x.id === item.id);
      this.card_item[index].qty--;
      localStorage.setItem('card_item', JSON.stringify(this.card_item));
    }
  }

  removecarditem(item: any) {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        let index: any = this.card_item.findIndex((x: any) => x.id === item.id);
        this.card_item.splice(index, 1);
        localStorage.setItem('card_item', JSON.stringify(this.card_item));
        Swal.fire({
          title: "Deleted!",
          icon: "success"
        });
      }
    });
  }

  getcardtotal() {
    let total = 0;
    this.card_item.forEach((x: any) => {
      if (x.is_select) {
        total += x.price * x.qty
      }
    });
    return total;
  }

  selectCarditem(item: any) {
    let index: any = this.card_item.findIndex((x: any) => x.id === item.id);
    this.card_item[index].is_select = !this.card_item[index].is_select
    localStorage.setItem('card_item', JSON.stringify(this.card_item));
  }

}
