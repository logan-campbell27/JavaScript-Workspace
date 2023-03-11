import { TestBed } from '@angular/core/testing';

import { TestlibService } from './testlib.service';

describe('TestlibService', () => {
  let service: TestlibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestlibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
