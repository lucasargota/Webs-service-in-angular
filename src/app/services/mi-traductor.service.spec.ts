import { TestBed } from '@angular/core/testing';

import { MiTraductorService } from './mi-traductor.service';

describe('MiTraductorService', () => {
  let service: MiTraductorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiTraductorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
