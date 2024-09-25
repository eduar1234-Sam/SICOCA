import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service'; // Ajusta la ruta si es necesario
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-firebase-db',
  templateUrl: './test-firebase-db.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule] // Asegúrate de incluir los módulos necesarios
})
export class TestFirebaseDbComponent implements OnInit {
  email: string = '';
  password: string = '';
  data: any[] = [];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    // Obtener datos de Firebase en la inicialización del componente
    this.firebaseService.getData('your-path-to-data').subscribe(data => {
      this.data = data;
    });
  }

  login() {
    this.firebaseService.login(this.email, this.password)
      .then(userCredential => {
        console.log('Logged in:', userCredential);
      })
      .catch(error => {
        console.error('Login error:', error);
      });
  }

  addData() {
    const newData = { example: 'data' }; // Cambia esto según tu estructura de datos
    this.firebaseService.addData('your-path-to-data', newData)
      .then(() => {
        console.log('Data added successfully');
      })
      .catch(error => {
        console.error('Error adding data:', error);
      });
  }
}
