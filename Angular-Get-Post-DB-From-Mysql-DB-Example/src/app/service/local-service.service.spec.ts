import { TestBed } from '@angular/core/testing';

import { LocalServiceService } from './local-service.service';

describe('LocalServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalServiceService = TestBed.get(LocalServiceService);
    expect(service).toBeTruthy();
  });
});
