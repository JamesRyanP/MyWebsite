import { TestBed } from '@angular/core/testing';

import { ImageLoadingServiceService } from './image-loading-service.service';

describe('ImageLoadingServiceService', () => {
  let service: ImageLoadingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageLoadingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
