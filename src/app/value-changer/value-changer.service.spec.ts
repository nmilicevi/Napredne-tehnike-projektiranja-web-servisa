import { TestBed } from '@angular/core/testing';

import { ValueChangerService } from './value-changer.service';

describe('ValueChangerService', () => {
  let service: ValueChangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueChangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
