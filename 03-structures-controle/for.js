//Page for " pour"

//
// alert('coucou');



for(let i = 0; i<10; i++){// (for 1- initialisation de la variable 2- test ou condition de fin de boucle 3- généralement incrémentation)
    document.getElementById('p1').innerHTML += 'i contient la valeur ' + i + ' qui augmente de 1 à chaque passage, de la boucle.<br>';
}
// Pour faire un tableau 

for (let i = 0; i < 18; i++) {// for (1- initialisation de la variable 2- test ou condition de sortie 3- incrémentation)
    document.getElementById('tr1').innerHTML += '<tr><td>Passage n° ' + (i + 1) + ' de la boucle</td><td>i contient la valeur ' + i + ' qui est incrémenté à chaque passage de la boucle.</td></tr>';
}

// console.log(i); 
//root = "racine"
//i = itérator = "curseur"

// for avec in, if et l'instruction break

// if(test) {
//     blocdecodeinstruction
// }

for (let arreteToi = 0; arreteToi < 10; arreteToi++) {

    if ( arreteToi == 569 ){
        break; // "break" arrête toi c'est l'instruction
    } // fin du if
    document.getElementById('p2').innerHTML += 'arreteToi contient la valeur ' + arreteToi + 'à chaque passage de la boucle for.<br>';
}// fin du for

// for avec une instruction continue qui "saute"

for(let item = 0; item < 10; item ++){
    if( item % 2 != 0){// le reste de la division n'est pas égal à 0 ( donc item est un chiffre impair)
        continue; //passe à la suivante
    } // fin du if
    document.getElementById('p3').innerHTML += 'La variable item contient la valeur ' + item + ' à chaque passage de la boucle.<br>';
}// fin du for
