import { TestBed } from '@angular/core/testing';

import { ServiceSucursalService } from './service-sucursal.service';

describe('ServiceSucursalService', () => {
  let service: ServiceSucursalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSucursalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
