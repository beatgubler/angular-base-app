import { Injectable, NgZone } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor( public _afAuth: AngularFireAuth, public _router: Router ) {  }

  signIn(email: any, password: any) {
    return this._afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this._router.navigate(['/protected']);
      }).catch((error) => {
        console.log(error)
      })
  }

  resetPassword(email: any) {
    return this._afAuth.sendPasswordResetEmail(email)
      .then((result) => {
        // console.log(result)
      }).catch((error) => {
        console.log(error)
      })
  }

  createUser(email: any, password: any) {
    return this._afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this._router.navigate(['/protected']);
      }).catch((error) => {
        console.log(error)
      })
  }

  signOut() {
    return this._afAuth.signOut()
      .then((result) => {
        this._router.navigate(['/auth']);
      }).catch((error) => {
        console.log(error)
      })
  }

  googleAuth() {
    return this.authLogin(new firebase.auth.GoogleAuthProvider());
  }

  authLogin(provider: any) {
    return this._afAuth.signInWithPopup(provider)
    .then((result) => {
        this._router.navigate(['/protected']);
    }).catch((error) => {
        console.log(error)
    })
  }
}