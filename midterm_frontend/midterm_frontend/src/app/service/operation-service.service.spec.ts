import { TestBed } from '@angular/core/testing';
import { Operation } from '../models/Operation';

import { OperationServiceService } from './operation-service.service';

describe('ProductServiceService', () => {
  let service: OperationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
