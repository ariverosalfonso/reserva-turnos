import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TurnoService } from './turno.service';


describe('TurnoService', () => {
  let service: TurnoService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new TurnoService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
