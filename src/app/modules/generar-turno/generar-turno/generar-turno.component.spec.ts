import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GenerarTurnoComponent } from './generar-turno.component';
import { ITurnoService } from '../interfaces/Iturno-service';

describe('GenerarTurnoComponent', () => {
  let component: GenerarTurnoComponent;
  let fixture: ComponentFixture<GenerarTurnoComponent>;
  const IturnoSpy = jasmine.createSpyObj('ITurnoService', ['getTurnos', 'getServicios']);
  IturnoSpy.getTurnos.and.returnValue(of());
  IturnoSpy.getServicios.and.returnValue(of());

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,
        HttpClientTestingModule],
      declarations: [GenerarTurnoComponent],
      providers: [
        {
          provide: ITurnoService,
          useValue: IturnoSpy
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
