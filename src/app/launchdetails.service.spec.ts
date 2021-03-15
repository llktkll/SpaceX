import { TestBed } from '@angular/core/testing';

import { LaunchdetailsService } from './launchdetails.service';

describe('LaunchdetailsService', () => {
  let service: LaunchdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
