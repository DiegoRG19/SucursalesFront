import { TestBed } from '@angular/core/testing';

import { ServiceMonedaService } from './service-moneda.service';

describe('ServiceMonedaService', () => {
  let service: ServiceMonedaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMonedaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
