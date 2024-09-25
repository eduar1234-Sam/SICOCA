import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth'; // Importación de Auth
import { Database, ref, set, get, child } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private auth: Auth, private db: Database) { } // Asegúrate de que Auth y Database sean inyectados

  // Método para iniciar sesión
  login(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Método para cerrar sesión
  logout(): Promise<void> {
    return signOut(this.auth);
  }

  // Ejemplo de método para obtener datos de la base de datos
  getData(path: string): Observable<any[]> {
    const dbRef = ref(this.db);
    return new Observable(observer => {
      get(child(dbRef, path)).then((snapshot) => {
        if (snapshot.exists()) {
          observer.next(snapshot.val());
        } else {
          observer.next([]);
        }
      }).catch(error => {
        observer.error(error);
      });
    });
  }

  // Método para agregar datos a la base de datos
  addData(path: string, data: any): Promise<void> {
    const dbRef = ref(this.db, path);
    return set(dbRef, data);
  }
}
