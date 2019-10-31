import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import { ViewController, NavParams } from "ionic-angular";
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
  imgDom: HTMLImageElement;

  @Output() imgClicked = new EventEmitter<void>();

  @ViewChild("imgWrapper") imgWrapper: ElementRef;

  constructor(
    public viewCtrl: ViewController,
    params: NavParams,
    private renderer2: Renderer2
  ) {
    // console.log(params.get("imgSource"));
    const dataImgSource: string = params.get("imgSource");
    const dataImgDom: HTMLImageElement = params.get("imgDom");
    console.log(dataImgDom);
    if (dataImgSource !== undefined) {
      this.imgSource = dataImgSource;
    }
    if (dataImgDom !== undefined) {
      this.imgDom = dataImgDom;
    }
  }

  ngAfterViewInit() {
    this.renderer2.appendChild(this.imgWrapper.nativeElement, this.imgDom);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  imgClick() {
    console.log("aiueo");
    this.imgClicked.emit();
  }
}
