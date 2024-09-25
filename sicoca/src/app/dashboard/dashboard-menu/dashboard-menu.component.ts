import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionModalComponent } from "./selection-modal/selection-modal.component"; // Importa CommonModule

@Component({
  selector: 'app-dashboard-menu',
  standalone: true,
  imports: [CommonModule, SelectionModalComponent],
  templateUrl: './dashboard-menu.component.html',
  styleUrl: './dashboard-menu.component.css'
})
export class DashboardMenuComponent {

  items = [
    { id: '0001', title: 'Item 1', description: 'Descripción del item 1', price: 1300 },
    { id: '0002', title: 'Item 2', description: 'Descripción del item 2', price: 1300 },
    { id: '0003', title: 'Item 3', description: 'Descripción del item 3', price: 1300 },
    { id: '0004', title: 'Item 4', description: 'Descripción del item 4', price: 1300 },
    { id: '0005', title: 'Item 5', description: 'Descripción del item 5', price: 1300 },
    { id: '0006', title: 'Item 6', description: 'Descripción del item 6', price: 1300 },
    { id: '0007', title: 'Item 7', description: 'Descripción del item 7', price: 1300 },
    { id: '0008', title: 'Item 1', description: 'Descripción del item 1', price: 1300 },
    { id: '0009', title: 'Item 2', description: 'Descripción del item 2', price: 1300 },
    { id: '0010', title: 'Item 3', description: 'Descripción del item 3', price: 1300 },
    { id: '0011', title: 'Item 4', description: 'Descripción del item 4', price: 1300 },
    { id: '0012', title: 'Item 5', description: 'Descripción del item 5', price: 1300 },
    { id: '0013', title: 'Item 6', description: 'Descripción del item 6', price: 1300 },
    { id: '0014', title: 'Item 7', description: 'Descripción del item 7', price: 1300 },
    { id: '0015', title: 'Item 1', description: 'Descripción del item 1', price: 1300 },
    { id: '0016', title: 'Item 2', description: 'Descripción del item 2', price: 1300 },
    { id: '0017', title: 'Item 3', description: 'Descripción del item 3', price: 1300 },
    { id: '0018', title: 'Item 4', description: 'Descripción del item 4', price: 1300 },
    { id: '0019', title: 'Item 5', description: 'Descripción del item 5', price: 1300 },
    { id: '0020', title: 'Item 6', description: 'Descripción del item 6', price: 1300 },
    { id: '0021', title: 'Item 7', description: 'Descripción del item 7', price: 1300 },
  ];

  itm: { id: string, name: string; cuantity: number; price:number; subtotal: number; }[] = [];

  showModal: boolean = false;

  loadItem(item: any){
   this.itm.push({id:item.id, name: item.title, cuantity: 1, price: item.price, subtotal: item.price}) 
   this.openModal();
  }

  openModal(): void{
    this.showModal = true;
  }

  closeModal(): void{
    this.showModal = false;
  }

  message(showM: boolean){
    this.showModal = showM;
  }

}
