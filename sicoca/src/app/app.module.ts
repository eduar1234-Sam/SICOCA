import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth'; // Importar correctamente
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment'; 
import { AppComponent } from './app.component';
import { FirebaseService } from './firebase.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()) // Asegúrate de que esto esté aquí
  ],
  providers: [
    FirebaseService // Asegúrate de que tu servicio esté aquí
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
