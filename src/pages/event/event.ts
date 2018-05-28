import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  LoadingController, ToastController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
//import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  imageURI:any;
  imageFileName:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera) { }

    getImage() {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
      }
    
      this.camera.getPicture(options).then((imageData) => {
        this.imageURI = imageData;
      }, (err) => {
        console.log(err);
        this.presentToast(err);
      });
    }
}
