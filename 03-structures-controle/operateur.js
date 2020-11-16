// Opérateurs logiques 

// exemples

let x = 5;
let y = -20;

//.getElementById sert à acceder à un id présent dans la page html et à inserer avec .innerHTML le texte renseigne après l'opérateur d'affectation
if ( x >= 0 && x <= 10) { //ET dans cet exemple, chaque condition doit être remplie
    document.getElementById('p1') .innerHTML = 'x vaut ' + x + ' et c\'est une valeur comprise entre 0 et 10';
}
 
// || OU
if(y < -10 || y > 10 ){
    document.getElementById('p2').innerHTML = 'y vaut ' + y + ' et est une valeur plus petite que -10 ou plus grande que 10';
}else {
    document.getElementById('p2').innerHTML = 'y vaut ' + y + ' n\'est pas une valeur plus petite que -10 ou plus grande que 10';
}

//  ! NO
//Dans notre exemple x = 5
// opérateur inversé ; ce n'est pas vrai, 5 n'est pas inféreiur ou égal à 2, autrement dit si le test est false l'opérateur inversé ( la négation) renvoie true donc on excecute le code.
if ( ! (x <= 2)){//NO
    document.getElementById('p3').innerHTML = 'x contient une valeur strictement supérieure à 2';
}
