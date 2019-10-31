import { Component, ViewChild, ElementRef } from "@angular/core";
import { ModalController } from "ionic-angular";
import { ImgViewerComponent } from "../../components/img-viewer/img-viewer";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  imgSrc: string = "http://placehold.jp/600x150.png";

  @ViewChild("imgDom") imgDom: ElementRef;

  constructor(public modalCtrl: ModalController) {}

  open() {
    const modal = this.modalCtrl.create(ImgViewerComponent, {
      imgSource: this.imgSrc,
      imgDom: this.imgDom.nativeElement
    });
    modal.present();
  }

  imgClick() {
    console.log("imgクリックされたやでー");
  }
}
