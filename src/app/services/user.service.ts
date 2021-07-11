import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private auth: AngularFireAuth, private db: AngularFirestore) {}

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  findData(type: string, username: string) {
    return this.db.collection(type, (ref) =>
      ref.where('username', '==', username)
    );
  }

  logout() {
    this.auth.signOut;
  }
}
