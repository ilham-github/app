import { Component, OnInit } from '@angular/core';

import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Component({

  selector: 'app-register',

  templateUrl: './register.component.html',

  styleUrls: ['./register.component.css']

})

export class RegisterComponent implements OnInit {



  itemList: AngularFireList<any>;

  user: Observable<firebase.User>;

  public isLoggedIn: Boolean = false;

  email = '';

  password = '';



  constructor(public db: AngularFireDatabase , private fire:AngularFireAuth , private router:Router) {

    this.itemList = db.list('users');



  }



  ngOnInit() {

  }

  myRegister() {

    this.fire.auth.createUserWithEmailAndPassword(this.email, this.password)

    .then(user => {

      this.isLoggedIn = true;

      localStorage.setItem('isLoggedIn', 'true');

      localStorage.setItem('email', this.fire.auth.currentUser.email );



      this.fire.authState.subscribe(auth => {

        if (auth) {

          localStorage.setItem('uid', auth.uid );

  this.itemList.push({

    email: this.email ,

    uid : auth.uid,

    name : 'user'  ,

    phone :  '00000' ,

    age : '' ,

    address :  '' ,

    city :  '' ,

    job : '',

  

    image: 'assets/img/person.png'

  });

        }

      });



      this.router.navigate(['home']);

    }).catch( error => {

      console.error(error);

    });

  }

}