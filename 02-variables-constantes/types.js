// js pour la page de données 

// 1 STRING 
let presentation = "Je m'appelle Michael.";
let age = 25;
let age2 = 60;

// console.log de la variable presentation 
console.log(typeof presentation);

// 1- Récupéré un élément dont l'id est p1
// 2- Remplace completement le contenu d'un élément identifié par son attribut id 
// 3- On concatène une strign et le résultat de la fonction typeof()
document.getElementById('p1').innerHTML = 'Type de données pour la variable presentation:' + typeof presentation;

document.getElementById('p2').innerHTML = 'Type de données pour la variable age:' + typeof age;

document.getElementById('p3').innerHTML = 'Type de données pour la variable age2:' + typeof age2;

let phrase = 'Mon film préféré est "20000 lieues sous les mers".';

console.log(phrase);

// 2 NUMBER 

let x = 10;
let y = 20000;
let z = 3.14;

console.log(typeof x);
// 2 valeurs dans le console.log, une fonction 
console.log(x, z);

// 3-BOOLEAN (booléen)

// let vrai = true;
// let faux = false;

let test = 8 > 4;

console.log(typeof test, test);

// 4-NULL et UNDEFINED 

let arbre;


console.log(typeof arbre);

let nul = null;
let indéfini;

document.getElementById('p4').innerHTML = 'Type de données pour la variable null:' + typeof null;
document.getElementById('p5').innerHTML = 'Type de données pour la variable undefined:' + typeof undefined;


