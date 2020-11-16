//Page des fonctions et introductions

// exemple : la fonction ransom () " aléatoire"

document.getElementById('p1').innerHTML = Math.random(); // Ici on exécute le code " caché" derrière la fonction, on appel la fonction ou on l'invoque.

// replace()

let discours1 = 'Bonjour je suis un caméléon';

// console.log(discours1);

let discours2 = discours1.replace('un caméléon', 'un chat'); // Le nom de la fonction est suivie d'un couple de parenthèses qui contiennent le plus souvent des arguments.

document.getElementById('p2').innerHTML = discours2;

//création de fonctions
function randomX100() {
    return Math.random() * 100;
}
// console.log(randomX100());
document.getElementById('p3').innerHTML = randomX100();

// -2-Une simple multiplication

function multiplier(nbr1,nbr2) {
    return(' Multiplions ' + nbr1 + ' x' + nbr2 + '=' + (nbr1 * nbr2));
}
// console.log(multiplier(2,6)); // le 2 et le 6 correspond à nbr1 et nbr2
document.getElementById('p4').innerHTML = multiplier (145,9);

//exercice


function soustraction(nbr1,nbr2) {
    return(' Soustraction ' + nbr1 + ' - ' + nbr2 + '=' + (nbr1 - nbr2));
}

document.getElementById('p5').innerHTML = soustraction (10,2);

function addition(nbr1,nbr2) {
    return(' Addictionnons ' + nbr1 + '+' + nbr2 + '=' + (nbr1 + nbr2));
}
document.getElementById('p6') .innerHTML = addition ( 20,5);

function modulo(nbr1,nbr2) {
    return(' Le modulo ' + nbr1 + '%' + nbr2 + '=' + (nbr1 % nbr2));
}
document.getElementById('p7').innerHTML = modulo (30,3);