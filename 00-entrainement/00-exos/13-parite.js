//Page JS POUR 13 PARITE

// alert('coucou');

    for(var i = 1; i <= 10; i++);{
        if(i % 2 === 0){ // le reste est égal à 0 donc le chiffre est pair
            console.log(i + ' est pair ');
        } else{ // sinon c'est impair
            console.log(i + ' est impair ');
        }
    }

    // var numsupp = Number(prompt('Quel est votre chiffre ?'));


    // for(var i = 1; i >= 10; i++);{
    //     if(i >= 10){
    //         console.log(i + 'est pair');
    //     } else{
    //         console.log(i + 'est impair');
    //     }
    // }

    let nbrUtilisateur = parseInt(prompt('exo 2 : Rentre un nombre entier'));
    console.log(typeof nbrUtilisateur, nbrUtilisateur);

    let nbrUtilisateurMax = (nbrUtilisateur + 10);
    console.log(typeof nbrUtilisateurMax, nbrUtilisateurMax);


    for(let i = nbrUtilisateur; i <= nbrUtilisateurMax; i++);{
        if(i % 2 === 0){ // le reste est égal à 0 donc le chiffre est pair
            console.log(i + ' est pair ');
        } else{ // sinon c'est impair
            console.log(i + ' est impair ');
        }
    }

