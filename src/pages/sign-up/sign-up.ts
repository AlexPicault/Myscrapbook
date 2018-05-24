import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import { AuthService } from '../../services/auth';
import { NgForm } from '@angular/forms';
import firebase from 'firebase';
import { DashboardPage } from '../dashboard/dashboard';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl : AlertController,
              //public authService : AuthService
            ) {
  }

  onSignup(form : NgForm){
    firebase.auth().createUserWithEmailAndPassword(form.value.email, form.value.password)
    .then(data =>{
      this.navCtrl.push(DashboardPage);
    })
    .catch(error => {
      const alert = this.alertCtrl.create({
        title: 'Signup failed!',
        message: error.message,
        buttons: ['Ok']
      });
      alert.present();
    });
  
    //this.authService.signup(form.value.email, form.value.password);
  }

}
