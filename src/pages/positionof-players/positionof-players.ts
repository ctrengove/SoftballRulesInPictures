import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { ImagePage } from '../image/image';

/**
 * Generated class for the PositionofPlayersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-positionof-players',
  templateUrl: 'positionof-players.html',
})
export class PositionofPlayersPage {
  url = '';

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfficialDimensionsPage');
  }

  imagePopup() {
    let imageinfo: any = event.target;
    let image = this.modalCtrl.create(ImagePage, { 'url': imageinfo.src });
    image.present();
  }

}
