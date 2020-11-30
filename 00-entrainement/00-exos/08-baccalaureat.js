// Page baccalaureat JS 
// alert('coucou');

// Déclarer les variables 

var note = parseFloat(prompt('Quel est votre moyenne au Bac ?')); // le parseFloat permet d'assurer que la réponse sera considérée comme un number.
console.log(note);

if(note < 10){
    document.getElementById('p1').innerHTML = 'Vous êtes recalé !.';
}else if (note <= 12){
    document.getElementById('p1').innerHTML = 'Vous êtes recu sans mention !.';
}else if(note >= 12){
    document.getElementById('p1').innerHTML = 'Recu avec mention!.';
}else {
    alert('Vous n\'avez pas écrit de note !!');
}

// Correction de Baroude 

// let moy = parseFloat(prompt('Quelle est ta moyenne au bac ? ')); // le parsefloat permet d'assurer que la réponse sera considéré comme un "number", dans le cas d'un nombre décimal
// console.log(typeof(moy));
// function baccalaureat(moy){
//     if ( (!isNaN(moy))) { // est bien un nombre ??
//         if(moy >= 0 && moy <= 10 ){
//             document.getElementById('p1').innerHTML = 'Tu es recalé !';
//         }else if(moy >= 10 && moy <= 12){
//             document.getElementById('p1').innerHTML = 'Tu passes !';
//         }else if(moy > 12 && moy <= 20){
//             document.getElementById('p1').innerHTML = 'Bravo pour la mention ! :) ' ;
//         }else {
//             document.getElementById('p1').innerHTML = 'Votre nombre doit être compris entre 0 et 20! :) '; 
//         }
//     }else{
//         return document.getElementById('p1').innerHTML = 'Yahoooo! es tu sûr de ce cela ?' ;
//     }
// }
// baccalaureat(moy)
