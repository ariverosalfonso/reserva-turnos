import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { AlertControllerService } from 'src/app/shared/services/alert-controller.service';
import { ITurnoService } from '../interfaces/Iturno-service';
import { servicio } from '../interfaces/servicio.interface';
import { turnos } from '../interfaces/turnos.interface';
import { TurnoService } from '../services/turno.service';

@Component({
  selector: 'app-generar-turno',
  templateUrl: './generar-turno.component.html',
  styleUrls: ['./generar-turno.component.css']
})
export class GenerarTurnoComponent implements OnInit, OnDestroy {

  public turnos_lista!: turnos[];
  public servicios_lista!: servicio[];
  public form!: FormGroup;
  public servio_nombre!: string;
  private unsubscribe$ = new Subject<void>();
  public fecha_real!: string;
  lista:string[]=["servicio","que","tal", "estas"];
  constructor(public turnoService: TurnoService,
    private form_builder: FormBuilder,
    public alertController: AlertControllerService) {

  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.getTurnos();
    this.getServicios();
    this.crearFormulario();
  }
  crearFormulario() {
    this.form = this.form_builder.group({
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required],
      servicio: ['', Validators.required],

    });
  }
  public isValidForm() {
    return this.form?.valid;
  }
  public botonGenerarTurno() {

    this.crearTurno();

  }

  getTurnos() {
    this.turnoService.getTurnos().pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
      this.turnos_lista = data;
      this.turnos_lista.forEach(fecha => {
        this.fecha_real = String(fecha.fecha_turno).split("T")[0]
      })

    });
  }
  getServicios() {
    this.turnoService.getServicios().subscribe(servicio => {
      this.servicios_lista = servicio;


    });
  }

  crearTurno() {
    this.turnoService.postTurnos(this.form.value).subscribe((res: any) => {

      if (res = 'Succes') {
        this.alertController.handleSuccess('Se ha creado el turno correctamente');
      }

    });
  }


}
