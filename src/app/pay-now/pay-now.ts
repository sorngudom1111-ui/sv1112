import { Component } from '@angular/core';
import { CardService } from '../service/card-service';
import { CommonModule } from '@angular/common';
declare const Swal: any;

@Component({
  selector: 'app-pay-now',
  imports: [CommonModule,],
  templateUrl: './pay-now.html',
  styleUrl: './pay-now.css'
})
export class PayNow {
  constructor(public cardService: CardService) {
  }
  getTotal() {
    return this.cardService.getCarditem()
      .filter(item => item.is_select)
      .reduce((sum, item) => sum + (item.price * item.qty), 0);
  }
  paynow(): any {
    Swal.fire({
      title: "Thank You",
      icon: "success",
      draggable: true
    });
  }
}
