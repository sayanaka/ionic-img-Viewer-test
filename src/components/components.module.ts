import { NgModule } from "@angular/core";
import { ImgViewerComponent } from "./img-viewer/img-viewer";
import { IonicModule } from "ionic-angular";
@NgModule({
  declarations: [ImgViewerComponent],
  imports: [IonicModule],
  entryComponents: [ImgViewerComponent],
  exports: [ImgViewerComponent]
})
export class ComponentsModule {}
