import { TestBed } from '@angular/core/testing';

import { ProfileDataService } from './profile-data.service';

describe('ProfileDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileDataService = TestBed.get(ProfileDataService);
    expect(service).toBeTruthy();
  });
});
