import { TestBed } from '@angular/core/testing';

import { TodoDataServiceService } from './todo-data-service.service';

describe('TodoDataServiceService', () => {
  let service: TodoDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
