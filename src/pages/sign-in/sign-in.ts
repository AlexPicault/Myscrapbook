import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth';


@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(public navCtrl: NavController, 
            public navParams: NavParams,
            public authService : AuthService) {
  }

  pushSignUp(){
    this.navCtrl.push(SignUpPage);
  }

  onSignin(form : NgForm){
    this.authService.signin(form.value.email, form.value.password);
  }

}
