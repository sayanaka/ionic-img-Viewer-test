import { Component } from '@angular/core';

/**
 * Generated class for the ImgViewerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'img-viewer',
  templateUrl: 'img-viewer.html'
})
export class ImgViewerComponent {

  text: string;

  constructor() {
    console.log('Hello ImgViewerComponent Component');
    this.text = 'Hello World';
  }

}
