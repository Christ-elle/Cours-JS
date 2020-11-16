//scripts pour la page concaténation

// une varible dans lequelle on met votre âge

let monAge = 18;
//ceci est le caractère d'échappement ou anti-slach !! le code ne fonctionne pas avec l'apostrophe du C'EST en français
let phrase = 'Bonjour j\'ai ';

// console.log(monAge, phrase);

// alert(phrase + monAge + ' ans.');

let x = 501;
let y = 99;

alert('x contient '+ x +
    '\n y contient ' + y +
    '\n leurs somme est égale à ' + (x+y));
    
// Ici en littéraux de gabarits pour concaténer " equivalent du +" 
alert(`x contient ${x}
 y contient ${y}
 leurs somme est égale à ${x + y}`);

 alert(`x contient $ {x}`);