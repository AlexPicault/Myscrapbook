import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AuthService } from '../../services/auth';
import { NgForm } from '@angular/forms';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              //public authService : AuthService
            ) {
  }

  onSignup(form : NgForm){
    firebase.auth().createUserWithEmailAndPassword(form.value.email, form.value.password);
    //this.authService.signup(form.value.email, form.value.password);
  }

}
