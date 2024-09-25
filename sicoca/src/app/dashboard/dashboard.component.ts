import { Component } from '@angular/core';
import { DashboardMenuComponent } from "./dashboard-menu/dashboard-menu.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardMenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] // Corrige 'styleUrl' a 'styleUrls'
})
export class DashboardComponent { }
