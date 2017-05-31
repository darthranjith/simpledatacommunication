import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { B } from './b';

@NgModule({
  declarations: [
    B,
  ],
  imports: [
    IonicPageModule.forChild(B),
  ],
  exports: [
    B
  ]
})
export class BModule {}
