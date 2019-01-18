import { TestBed, inject } from '@angular/core/testing';

import { ApartmentServiceService } from './apartment-service.service';

describe('ApartmentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApartmentServiceService]
    });
  });

  it('should be created', inject([ApartmentServiceService], (service: ApartmentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
