import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { SignInPage } from '../sign-in/sign-in';
import { EventPage } from '../event/event';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  logout(){
    firebase.auth().signOut();
    this.navCtrl.push(SignInPage);
  }

  addEvent(){
    this.navCtrl.push(EventPage);
  }
}
