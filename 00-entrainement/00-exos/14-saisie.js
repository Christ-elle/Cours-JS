// Page JS pour 14- saisie



//Correction Patrick

let nombre = 0; // Valeur initiale qui va nous permettre d'entrer dans la boucle, une valeur inférieure à 50
console.log(nombre + 'Est la variable d\'initialisation');

//while

while((nombre < 50) || (nombre > 100)) { // tant que " while" tous les nombres non compris entre 50 et 100; soit il est inférieur à 50 soit il est suppérieur à 100 . || signifie ou 
    nombre = Number( prompt('Entrez un nombre entre 50 et 100'));
}
console.log(nombre + ' > variable récupéré');


