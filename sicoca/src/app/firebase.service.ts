import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private firestore: Firestore) {}

  async getItems(): Promise<any[]> {
    const itemsCollection = collection(this.firestore, 'items');
    const snapshot = await getDocs(itemsCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}
