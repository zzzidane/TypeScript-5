import { Voiture } from './classes/voiture';

// Création de l'instance de Voiture
const maVoiture = new Voiture('Mercedes', 'GLE Amg', 2025);

// Tester la méthode démarrer
maVoiture.demarrer();

// Détails de la voiture
console.log(`Détails de la voiture : ${maVoiture.faire} ${maVoiture.modele} (${maVoiture.annee})`);