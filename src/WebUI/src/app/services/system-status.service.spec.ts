import { TestBed, inject } from '@angular/core/testing';

import { SystemStatusService } from './system-status.service';

describe('SystemStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemStatusService]
    });
  });

  it('should be created', inject([SystemStatusService], (service: SystemStatusService) => {
    expect(service).toBeTruthy();
  }));
});
