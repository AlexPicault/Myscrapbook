import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { NgForm } from '@angular/forms';
//import { AuthService } from '../../services/auth';
import firebase from 'firebase';
import { DashboardPage } from '../dashboard/dashboard';


@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(public navCtrl: NavController, 
            //private authService : AuthService
          ) {
  }

  pushSignUp(){
    this.navCtrl.push(SignUpPage);
  }

  onSignin(form : NgForm){
    firebase.auth().signInWithEmailAndPassword(form.value.email, form.value.password);
    this.navCtrl.popToRoot(DashboardPage);
    //this.authService.signin(form.value.email, form.value.password);
  }

}
