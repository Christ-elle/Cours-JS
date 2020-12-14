// Page pour EXO- 17 triangle-bis

// alert('coucou');

// correction patrick et mathieu et regis

let nbrLigne = 7;

for(let ligne = 0; ligne < nbrLigne; ligne++) {
    let etoiles = ''; // les variables sont vides
    let espaces = '';

    //1er for pour les espaces
    //sur la 1ere ligne qui aura une étoile je place 6 espacesà gauche de l'étoile. 1ere opération le nbr de ligne - l'etoile placée 
    for (let col = 0; col < nbrLigne - (ligne + 1); col++) {
        espaces += ' ';
    }
    //2eme for pour les etoiles
    for(let col = 0; col < 2 * ligne + 1; col++) {
        etoiles += '*';
    }

    
    console.log(espaces + etoiles);
}