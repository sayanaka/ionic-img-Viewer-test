import { Component } from "@angular/core";
import { ModalController } from "ionic-angular/components/modal/modal-controller";

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
  imgSource: string = "https://placehold.jp/600x150.png";

  constructor(public modalCtrl: ModalController) {}

  closeModal() {
    // this.modalController.dismiss();
  }
}
