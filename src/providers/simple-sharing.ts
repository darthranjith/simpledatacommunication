import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class SimpleSharing {
  constructor() {

  }
  private _model: { id: number, name: string };
  public get model(): { id: number, name: string } {
    return this._model;
  }
  public set model(v: { id: number, name: string }) {
    this._model = v;
  }
}
