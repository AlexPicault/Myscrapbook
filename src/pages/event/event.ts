import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public camera: Camera,
  public optionCam: CameraOptions) { }

}
