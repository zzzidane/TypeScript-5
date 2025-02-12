"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const voiture_1 = require("./classes/voiture");
// Création de l'instance de Voiture
const maVoiture = new voiture_1.Voiture('Mercedes', 'GLE Amg', 2025);
// Tester la méthode démarrer
maVoiture.demarrer();
// Détails de la voiture
console.log(`Détails de la voiture : ${maVoiture.faire} ${maVoiture.modele} (${maVoiture.annee})`);
