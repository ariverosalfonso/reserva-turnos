import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'turno',
        loadChildren: () => import('./modules/generar-turno/turno.module').then(m => m.GenerarTurnoModule)
    },
    {
        path: '',
        redirectTo: 'turno',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'turno',
        pathMatch: 'full',
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
