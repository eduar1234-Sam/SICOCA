import { Component } from '@angular/core';
import { DashboardMenuComponent } from "./dashboard-menu/dashboard-menu.component";
import { TestFirebaseDbComponent } from "../test-firebase-db/test-firebase-db.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardMenuComponent, TestFirebaseDbComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] // Corrige 'styleUrl' a 'styleUrls'
})
export class DashboardComponent { }
