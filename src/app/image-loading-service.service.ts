import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageLoadingServiceService {

  public totalImages = 0;
  private loadedImages = 0;
  private showLoading = true;

  constructor() { }

  getShowLoading(): boolean {
    return this.showLoading;
  }

  getTotalImages(): number {
    return this.totalImages;
  }

  getLoadedImages(): number {
    return this.loadedImages;
  }

  incrementLoadedImages(): void {
    this.loadedImages++;

    if (this.loadedImages === this.totalImages) {
      this.showLoading = false;
    }
  }

  reset(): void {
    this.totalImages = 0;
    this.loadedImages = 0;
    this.showLoading = true;
  }
}
