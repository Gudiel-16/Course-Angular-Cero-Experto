
// Internamente tienen un valor asignado
export enum Color {
    // 0    1     2     3
    rojo, negro, azul, verde
}

export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: Color;
}