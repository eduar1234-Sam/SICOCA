import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-selection-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './selection-modal.component.html',
  styleUrl: './selection-modal.component.css'
})
export class SelectionModalComponent implements OnInit {
  @Input()
  items: {id: string, name: string; cuantity: number; price: number; subtotal: number; }[] = []; 
  @Output() mssg = new EventEmitter<boolean>();
  val:number=1
  total: number = 0;
  step: number = 1;

  ngOnInit(): void {
    this.sumProducts();
  }

  updateItem(event: Event, i: any): void {
    const inputElement = event.target as HTMLInputElement; 
    this.val = parseInt(inputElement.value); 
    this.items[i].cuantity = this.val;
    this.items[i].subtotal = this.val*this.items[i].price;

    this.sumProducts();
  }

  sumProducts(){
    this.total = 0;
    for(const item of this.items ){
        this.total += item.subtotal;
    }
  }

  deleteProduct(it: any){
    this.items.splice(it,   1);
    this.total = 0;
  }

  closeModal(){
    this.mssg.emit(false);
  }

}
