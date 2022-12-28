import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerarTurnoComponent } from './generar-turno/generar-turno.component';

const routes: Routes = [
    {
        path: '', component: GenerarTurnoComponent
    }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TurnoComponentRoutingModule { }
