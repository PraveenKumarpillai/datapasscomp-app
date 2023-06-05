import { TestBed } from '@angular/core/testing';

import { MastersvcService } from './mastersvc.service';

describe('MastersvcService', () => {
  let service: MastersvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MastersvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
