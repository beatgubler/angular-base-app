# angular-base-app

## Description
Angular Base Application with Firebase authentication and database.
This project is meant to give beginning developers a head-start in developing their own web application.

Feel free to leave your suggestions, problems, safety concerns or questions in the respected section here on Github.

## Features:
* responsive design (mobile first)
* local and Google authentication
* persistent login

#### Livepreview: [https://angular-base-app.gubler-it.com](https://angular-base-app.gubler-it.com)

![angular-base-app [Preview]](https://i.imgur.com/3fwBien.png)

## Installation
* Install NodeJS -> https://nodejs.org/en/download/
* Install angular/cli -> npm install -g @angular/cli
* Clone this project with **git clone https://github.com/beatgubler/angular-base-app.git** or download manually
**npm install** -> **ng serve**

## Configuration
### Firebase Console
* Log into https://console.firebase.google.com/
* Create New Project
* Create Firestore Database and change the rules to:
```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          true
    }
  }
}
```
* Create Authentication method: Email/Password + Google
* Add App and copy the firebaseConfig
### Application
* replace the firebaseConfig with your own config from the Firebase Console

## Notable external dependencies
* Firebase - https://www.npmjs.com/package/firebase
* AngularFire - https://www.npmjs.com/package/@angular/fire
* Angular Material - https://material.angular.io/
* Bootstrap - https://getbootstrap.com/

## Known issues/concerns
* firebase security rules are not restrictive enough
* angularfire's modular API should be used
