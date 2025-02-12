"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voiture = void 0;
class Voiture {
    constructor(faire, modele, annee) {
        this.faire = faire;
        this.modele = modele;
        this.annee = annee;
    }
    demarrer() {
        console.log('Le moteur de la voiture a démarré');
    }
}
exports.Voiture = Voiture;
