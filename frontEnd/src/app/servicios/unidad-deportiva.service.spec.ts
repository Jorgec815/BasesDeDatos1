import { TestBed } from '@angular/core/testing';

import { UnidadDeportivaService } from './unidad-deportiva.service';

describe('UnidadDeportivaService', () => {
  let service: UnidadDeportivaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadDeportivaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
