// Les scripts pour l'intro sur les variables 
// Mon 2eme fichier JS 
// création de 3 variables, cependant elles ne stoquent pas de valeurs 

// let prenom;
// let monAge;

// var ville;
// On déclare une variable et on l'initialise en même temps 
let prenom ='Jean';
// let prenom ='Jean'; est une chaîne de caractère 

// Pour initialiser une variable on utilise l'opérateur = CE N'EST PAS LE SIGNE EGAL !! c'est un opérateur d'affectation qui est selon l'exemple 'Jean'!

// Autre moyen d'initialiser une variable: 
let monAge;
monAge= 40; 
// Un chiffre ! pas besoin de ''
console.log(prenom);
console.log(monAge);

prenom ='Justine';
monAge = 25;

console.log(monAge);
//  Par exemple, ceci fonctionne 
nom = 'Isola';
var nom;
console.log(nom);

//  ceci ne fonctionne pas 
// ville = 'Suresnes';
// let ville;

let ville;
ville ='Suresnes';
console.log(ville);

// // Avec prompt on as une fenêtre avec un champ de saisie 
// prompt();
// Redéclaration des variables 
// ceci fonctionne

var chien = 'médor';
var chien ='max';

console.log(chien);

// ceci ne fonctionnera pas 
// let chat = 'minou';
// let chat = 'obi-wan';
