import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-a',
  templateUrl: 'a.html',
})
export class A {
  model: { id: number, name: string };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.model = this.navParams.get("model");
  }
}
