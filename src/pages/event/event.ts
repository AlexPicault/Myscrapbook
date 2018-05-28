import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
//import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { eventService } from '../../services/event';
import { FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage implements OnInit{
  imageURI: any;
  imageFileName: any;
  event : Event;
  eventForm : FormGroup;
  index : number;

  constructor(
    public eventService : eventService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private transfer: FileTransfer,
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera) { }

  addEvent(){
    //this.eventService.addEvent();
  }

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
      this.tospresentToast(err);
    });
  }

  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }
    fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
      .then((data) => {
        console.log(data + " Uploaded Successfully");
        this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
        loader.dismiss();
        this.presentToast("Image uploaded successfully");
      }, (err) => {
        console.log(err);
        loader.dismiss();
        this.presentToast(err);
      });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}
