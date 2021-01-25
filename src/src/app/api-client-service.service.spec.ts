import { TestBed } from '@angular/core/testing';

import { ApiClientServiceService } from './api-client-service.service';

describe('ApiClientServiceService', () => {
  let service: ApiClientServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiClientServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
