import { Injectable } from '@angular/core';
import * as Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class PusherService {

  private _pusher: any;

  constructor() {

    this._pusher = new Pusher('8dc28fc7d89f099e5193', {
      cluster: 'eu',
      forceTLS: true,
      encrypted: true
    });
  }

  getPusher() {

    return this._pusher;
  }
}
