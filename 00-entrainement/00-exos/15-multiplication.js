//Page JS pour 15- multiplication
// alert('coucou');
//for (/* '1- initialisation de la variable 2- test ou condition de sortie 3- incrémentation' */) {
    // opération
    // bloc de code à éxécuter
//}


var nombre1 = Number(prompt('Choisi un premier nombre :'));
console.log(typeof nombre1);

for (var i = 1; i <=10; i++) { //1- le " i" correspond à itération de la variable; 2- test ou condition de sortie; -3 incrémentation
var resultat =nombre1 * i;//opération
document.getElementById('p1').innerHTML += nombre1 + ' x ' + i + ' = ' + resultat + '<br>'; // Le nombre1 à chaque passage on multiplie la variable i = la variable de résulat
}
