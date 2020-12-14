//Page JS POUR 13 PARITE

// alert('coucou');

    for (var i = 1; i <= 10; i++) {
        if (i % 2 === 0){ // le reste est égal à 0 donc le chiffre est pair
            console.log (i + ' est pair ');
        } else { // sinon c'est impair
            console.log(i + ' est impair ');
        }
    }

   // EXO 2 FOR

var nbUtilisateur = parseInt(prompt('Exo 2 : Rentre un nombre entier.'));
// console.log(typeof nbUtilisateur, nbUtilisateur);
var nbUtilisateurMax = (nbUtilisateur + 10);
// console.log(typeof nbUtilisateurMax, nbUtilisateurMax);
for (var i = nbUtilisateur; i < nbUtilisateurMax; i++) {
    if (i % 2 === 0) {
        document.write('<p>' + i + ' est pair.</p>');
    } else {
        document.write('<p>' + i + ' est impair.</p>');
    }
}
document.write('<hr>');

// avec while maintenant 


    // let nbrUtilisateur = parseInt(prompt('exo 2 : Rentre un nombre entier'));
    // console.log(typeof nbrUtilisateur, nbrUtilisateur);

    // let nbrUtilisateurMax = (nbrUtilisateur + 10);
    // console.log(typeof nbrUtilisateurMax, nbrUtilisateurMax);


    // for(let i = nbrUtilisateur; i <= nbrUtilisateurMax; i++);{
    //     if(i % 2 === 0){ // le reste est égal à 0 donc le chiffre est pair
    //         console.log(i + ' est pair ');
    //     } else{ // sinon c'est impair
    //         console.log(i + ' est impair ');
    //     }
    // }

    // Avec une boucle while

var chiffre = Number(prompt('Exo 3 : Choisissez un nombre entier.'));
console.log(chiffre);

var chiffreMax = (chiffre +10);
console.log(chiffreMax);

while (chiffre <= chiffreMax) {
    if (chiffre % 2 === 0) {
        document.write(chiffre + ' est pair <br>');
    } else {
        document.write(chiffre + ' est impair <br>');
    }
    chiffre++;
}




