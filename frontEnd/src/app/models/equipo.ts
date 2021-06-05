export class Equipo{
    id_equipo:number;
    nombre: string;
    puntos: number;
    partidos_jugados: number;
    partidos_ganados: number;
    partidos_empatados: number;
    partidos_perdidos: number;
    goles_favor: number;
    goles_contra: number;

    constructor(){
        this.id_equipo =0;
        this.nombre= ' ';
        this.puntos= 0;
        this.partidos_jugados=0;
        this.partidos_ganados=0;
        this.partidos_empatados=0;
        this.partidos_perdidos=0;
        this.goles_favor=0;
        this.goles_contra=0;
    }
}