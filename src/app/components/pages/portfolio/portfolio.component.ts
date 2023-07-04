import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, AfterViewInit{
  @ViewChild('appRoot') appRoot!: ElementRef;
  showLoading = true;
  totalImages = 0;
  loadedImages = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.showLoading = true;
    this.totalImages = 0;
    this.loadedImages = 0;
  }

  ngAfterViewInit() {
    this.loadImages();
  }

  loadImages(): void {
    const images = this.appRoot.nativeElement.querySelectorAll('img');
    this.totalImages = images.length;
    console.log(`Total images on screen: ${this.totalImages}`);
  
    if (images.length === 0) {
      this.showLoading = false;
      console.log('No images found');
      return;
    }
  
    let loadedImagesCount = 0;
  
    images.forEach((image: HTMLImageElement) => {
      if (image.complete) {
        loadedImagesCount++;
      } else {
        image.addEventListener('load', () => {
          loadedImagesCount++;
  
          if (loadedImagesCount === this.totalImages) {
            this.showLoading = false;
            console.log('All images loaded');
          }
        });
      }
    });
  
    // Check if all images are already loaded
    if (loadedImagesCount === this.totalImages) {
      this.showLoading = false;
      console.log('All images already loaded');
    }
    
    console.log(`Loaded images: ${loadedImagesCount}`);
  }
}
