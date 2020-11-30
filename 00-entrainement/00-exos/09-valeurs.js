// Page JS pour valeurs 

// alert('hello');

var nb1 = Number(prompt("Entrez nb1 :"));
var nb2 = Number(prompt("Entrez nb2 :"));
var nb3 = Number(prompt("Entrez nb3 :"));

if (nb1 > nb2) { 
    nb1 = nb3 * 2;
} else { 
    nb1 ++; 
    if (nb2 > nb3) { 
        nb1 = nb1 + nb3 *3; 
    } else { 
        nb1 = 0; 
        nb3 = nb3 * 2 + nb2; 
    } 
} 

document.getElementById('p1').innerHTML = 'Le nombre 1 vaut au final : ' + nb1;
document.getElementById('p2').innerHTML = 'Le nombre 2 vaut au final : ' + nb2;
document.getElementById('p3').innerHTML = 'Le nombre 3 vaut au final : ' + nb3;


