import { Component, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { ImageLoadingServiceService } from './image-loading-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'MyWebsite';
  @ViewChild('appRoot') appRoot!: ElementRef;
  showLoading = true;
  constructor(private imageLoadingService: ImageLoadingServiceService) { }

  ngOnInit() {
    this.showLoading = this.imageLoadingService.getShowLoading();
  }

  ngAfterViewInit() {
    const images = this.appRoot.nativeElement.querySelectorAll('img');
    this.imageLoadingService.reset();
    this.imageLoadingService.totalImages = images.length;

    if (images.length === 0) {
      this.showLoading = false;
    }

    images.forEach((image: HTMLImageElement) => {
      if (image.complete) {
        this.imageLoadingService.incrementLoadedImages();
      } else {
        image.addEventListener('load', () => {
          this.imageLoadingService.incrementLoadedImages();
        });
      }
    });
  }
 
}
