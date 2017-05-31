import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SimpleSharing } from '../../providers/simple-sharing';

@IonicPage()
@Component({
  selector: 'page-b',
  templateUrl: 'b.html',
})
export class B {
  model: { id: number, name: string };
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public simpleSrv: SimpleSharing) {
    this.model = this.simpleSrv.model;
  }

}
