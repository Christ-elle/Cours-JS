// Page JS pour l'exercice de comparaison 
// alert('coucou');



// Les variables 
 var numUn = parseInt(prompt('Quel est le premier chiffre ?'));
 var numDeux = parseInt(prompt('Quel est le deuxième chiffre ?'));

// console.log(numUn, numDeux);

// if((isNan(numUn)) && (!isNan(numDeux)) ){ // utilisation de isNan

// if (numUn > numDeux) {
//     document.write('<p>numUn qui vaut ' + numUn + 'est plus grand que ' + numDeux + '</p>');
    
// } else if (numUn < numDeux) {
//     document.write('<p>numUn qui vaut ' + numUn + ' est plus petit que ' + numDeux + '</p>');
// } else {
//     document.write('Les deux chiffres sont égaux !.');
// }
// } // fin if vérification que c'est un nombre


if ( (!isNaN(numUn)) && (!isNaN(numDeux)) ) {// utilisation de isNaN ; isNaN nous "ce n'est pas un nombre" ; !isNaN nous dit "c'est bien un nombre"
            if (numUn < numDeux) {// si nombre1 est inférieur
                document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nb1 + ' est plus petit que votre 2nd : ' + nb2;
            } else if (numUn > numDeux) { // si il est supérieur
                document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nb1 + ' est plus grand que votre 2nd : ' + nb2;
            } else {// sinon ils sont égaux
                document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nb1 + ' est égal à votre 2nd : ' + nb2;
            }// fin if condition comparaison
        } else {
            document.getElementById('p1').innerHTML = 'Vous n\'avez pas saisi de nombre(s)';
    };