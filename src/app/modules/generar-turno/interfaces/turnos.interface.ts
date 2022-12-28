import { Time } from "@angular/common";

export interface turnos {
    id_turno: number;
    id_servicio: string;
    fecha_turno: Date;
    estado: number;
    hora_inicio: Date;
    hora_fin: Date;
}