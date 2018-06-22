import { TestBed, inject } from '@angular/core/testing';

import { HtppService } from './htpp.service';

describe('HtppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HtppService]
    });
  });

  it('should be created', inject([HtppService], (service: HtppService) => {
    expect(service).toBeTruthy();
  }));
});
