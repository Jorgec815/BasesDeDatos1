import { TestBed } from '@angular/core/testing';

import { OlimpiadasService } from './olimpiadas.service';

describe('OlimpiadasService', () => {
  let service: OlimpiadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OlimpiadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
