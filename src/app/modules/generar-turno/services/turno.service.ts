import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { turnos } from '../interfaces/turnos.interface';
import { ITurnoService } from '../interfaces/Iturno-service';
import { servicio } from '../interfaces/servicio.interface';
import { generarTurno } from '../interfaces/generar-turno.interface';

@Injectable({
  providedIn: 'root'
})
export class TurnoService implements ITurnoService {

  private baseUrl = `http://localhost:4000/`;

  constructor(
    private _http: HttpClient
  ) { }

  public getTurnos() {
    const url = `${this.baseUrl}turnos`
    return this._http.get<turnos[]>(url).pipe(catchError(this.handleError));
  }

  public getServicios() {
    const url = `${this.baseUrl}servicios`
    return this._http.get<servicio[]>(url).pipe(catchError(this.handleError));
  }

  public postTurnos(body: generarTurno) {
    const url = `${this.baseUrl}turnos`
    return this._http.post(url, body).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error)
  }
}
