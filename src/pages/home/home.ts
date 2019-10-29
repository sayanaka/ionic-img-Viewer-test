import { Component } from "@angular/core";
import { ModalController } from "ionic-angular";
import { ImgViewerComponent } from "../../components/img-viewer/img-viewer";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public modalCtrl: ModalController) {}

  open() {
    const modal = this.modalCtrl.create(ImgViewerComponent);
    modal.present();
  }
}
