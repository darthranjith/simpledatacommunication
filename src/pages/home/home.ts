import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SimpleSharing } from '../../providers/simple-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  model: { id: number, name: string };
  constructor(public navCtrl: NavController,
    public sharingSrv: SimpleSharing) {
    this.model = { id: 0, name: "" };
  }
  goToPageA() {
    this.navCtrl.push("A", { "model": this.model });
  }
  goToPageB() {
    this.sharingSrv.model = this.model;
    this.navCtrl.push("B");
  }
}
