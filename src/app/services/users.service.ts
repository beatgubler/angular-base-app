import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor( public _afStore: AngularFirestore ) { }

  createUser() {
    this._afStore.collection("users").add({username: "Testuser" + Math.floor(Math.random() * 100000), createdOn: Date()}).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  getUsers() {
    return this._afStore.collection("users").snapshotChanges();
  }
}