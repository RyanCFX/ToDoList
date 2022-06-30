import { TestBed } from '@angular/core/testing';

import { PutTasksService } from './put-tasks.service';

describe('PutTasksService', () => {
  let service: PutTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
