import { Component, Input } from "@angular/core";
import { ViewController } from "ionic-angular";
// import { ModalController } from "ionic-angular/components/modal/modal-controller";

/**
 * Generated class for the ImgViewerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "img-viewer",
  templateUrl: "img-viewer.html"
})
export class ImgViewerComponent {
  imgSource: string;

  constructor(public viewCtrl: ViewController) {}

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
