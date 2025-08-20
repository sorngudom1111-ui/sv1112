import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  @Input() product: any

  @Output() onAddtoCard: any = new EventEmitter<any>();

  addtocard(product: any) {
    this.onAddtoCard.emit(product);
  }
}
