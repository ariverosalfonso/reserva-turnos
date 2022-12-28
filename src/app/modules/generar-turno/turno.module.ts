import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerarTurnoComponent } from './generar-turno/generar-turno.component';
import { TurnoComponentRoutingModule } from './turno.routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { TurnoService } from './services/turno.service';
import { ITurnoService } from './interfaces/Iturno-service';


@NgModule({
  declarations: [
    GenerarTurnoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TurnoComponentRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: ITurnoService,
      useClass: TurnoService
    }
  ]
})
export class GenerarTurnoModule { }
