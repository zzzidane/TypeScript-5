import { Vehicule } from '../interfaces/vehicule';

export class Voiture implements Vehicule {
    constructor(
        public faire: string,
        public modele: string,
        public annee: number
    ) {}

    demarrer(): void {
        console.log('Le moteur de la voiture a démarré');
    }
}