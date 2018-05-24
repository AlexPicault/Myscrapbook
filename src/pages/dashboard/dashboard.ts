import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { SignInPage } from '../sign-in/sign-in';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPagepush {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  logout(){
    firebase.auth().signOut();
    this.navCtrl.push(SignInPage);
  }
}
