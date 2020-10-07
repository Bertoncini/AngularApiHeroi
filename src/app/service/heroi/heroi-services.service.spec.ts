import { TestBed } from '@angular/core/testing';

import { HeroiServicesService } from './heroi-services.service';

describe('HeroiServicesService', () => {
  let service: HeroiServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroiServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
