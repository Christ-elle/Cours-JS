// Page JS pour triangle

//Ecrivez un programme triangle.js qui construit progressivement dans la console un triangle , un triangle de 7 lignes. Faites le d'abord avec une bouvcle for puis avec une boucle while.

// alert('coucou');


// for (var img = 0; img <= 7; img++) {
//     console.log('img');
// }


//Correction Patrick


// console.log('le triangle avec une boucle for');

// let diese = '';
// console.log(typeof diese, diese);

// for (let i = 1; i < 8; i++) {
//     diese += '#';
//     console.log(diese);
// }

// Correction de Baroude 

// console.log('le triangle avec une boucle for');
// for (i = 0; i <= 7; i++) {
//     console.log('#' , repeat (i));
// }


// Avec la boucle while

let diese2 = '';
let i = 1;

while (w1 <= 10) {
    diese2 += '#';
    console.log(diese2);
    w1++;
}

// document.getElementById('btnDiapo3').addEventListener('click', diapo3); // écouteur d'événement

//                 function diapo3(){ // la fonction
//                 document.getElementById('imgDiapo3').src = 'img/5.jpg';
//                 document.getElementById('imgDiapo3').alt = 'Une belle randonnée';
//         }

//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/repeat