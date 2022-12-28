import { Observable } from "rxjs";
import { generarTurno } from "./generar-turno.interface";
import { servicio } from "./servicio.interface";
import { turnos } from "./turnos.interface";

export abstract class ITurnoService {
    abstract getTurnos(): Observable<turnos[]>;
    abstract getServicios(): Observable<servicio[]>;
    abstract postTurnos(body: generarTurno): Observable<Object>;
}