import { TestBed } from '@angular/core/testing';

import { GetstudentsService } from './getstudents.service';

describe('GetstudentsService', () => {
  let service: GetstudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetstudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
