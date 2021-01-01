// Page JS pour EXO 23 rectangle

let bouton = document.getElementById('toggle-rectangle'); // on va chercher le bouton par son ID dans une variable
// console.log(bouton);

let forme = document.querySelector('.rectangle'); // on va chercher la class rectangle "querySelector"veut dire " va chercher"
// console.log(photo);

bouton.addEventListener('click', cliqueBouton); // add = ajouter, on ajoute un écouteur: quant on clique on lance la fonction"cliqueBouton"

function cliqueBouton() { // on déclare la fonction " cliqueBouton"
    forme.classList.toggle('rectangle'); // lorsque on va cliquer on affiche ou on cache le rectangle
}


document.querySelector('.rectangle').addEventListener('dblclick', function() { // ajoute un écouteur d'évènement: lors d'un" double click":
    forme.classList.add("good"); // on ajoute la class"good"
});

document.querySelector('.rectangle').addEventListener('mouseover', function() { // on ajoute une fonction au survol du rectangle:
    forme.classList.remove("good"); // on enlève la class "good" pour  ....
    forme.classList.add("important");// rajouter la class "important"
});

document.querySelector('.rectangle').addEventListener('mouseout', function() { // on ajoute une fonction "mouseout":  lorsque l'élément n'est plus survolé
    forme.classList.remove("important"); // reviens à la couleur initiale
});

//Correction justine

// page js pour 23-rectangle.html
// let rectangle = document.querySelector('.rectangle'); // 
// let bouton = document.querySelector('#toggle-rectangle')
// bouton.addEventListener('click', function() {
//     rectangle.classList.toggle('cache');
// }); // balance entre la classe cache et l'affichage normal
// rectangle.addEventListener('dblclick', function(){
//     rectangle.classList.add('good');
//     rectangle.classList.remove('important');
//     // rectangle.classList.toggle('good', 'important'); comment ça fonctionne ??
// });
// rectangle.addEventListener('mouseout', function(){
//     rectangle.classList.remove('good');
// });
// rectangle.addEventListener('mouseover', function(){
//     rectangle.classList.remove('good');
//     rectangle.classList.add('important');
// });
// rectangle.addEventListener('mouseout', function(){
//     rectangle.classList.remove('important');
// });

//Correction Audrey

// js pour exo rectangle qui change de couleur avec toggle par Audrey
// pour faire apparaitre et disparaitre le rectangle

// let bouton = document.querySelector('#toggleRectangle');
// let rectangle = document.querySelector('.rectangle');
// function cliqueBouton() {
//     rectangle.classList.toggle('rectangle');
// }
// bouton.addEventListener('click', cliqueBouton);
// // le rectangle devient rouge quand la souris se déplace à l'intérieur et retrouve sa couleur d'origine quand il en sort
// rectangle.addEventListener('mouseover', function(){
//     this.style.backgroundColor = "firebrick";
// });
// rectangle.addEventListener('mouseout', function(){
//     this.style.backgroundColor = "royalblue";
// });
// // changer la couleur du rectangle au double-click
// rectangle.addEventListener('dblclick', function(){
//     this.style.backgroundColor = "limegreen";
// });

// Correction katia

//Gestion de la souris
// variables -----------------------


//let bouton = document.querySelector('#toggle-rectangle');
// console.log(bouton);

//let cacheRectangle = document.querySelector('.cache');
// console.log(cacheRectangle);

//let rectangle = document.querySelector('.rectangle');
// console.log(rectangle); 
// évènements ----------------------------

// bouton.addEventListener('click', cliqueBouton);
// rectangle.addEventListener('mouseover', fVersRectangleRouge);
// rectangle.addEventListener('mouseout', fVersRectangleBleu);
// rectangle.addEventListener('dblclick', fVersRectangleVert);

// fonctions ------------------
// fonction pour afficher le rectangle
 
// function cliqueBouton(){
//     cacheRectangle.classList.toggle('cache');
// }

// fonction pour que le rectangle devienne rouge au survol 
// function fVersRectangleRouge(){
//     rectangle.classList.toggle('important');
// }

// fonction pour que le rectangle reprenne sa couleur bleu à la sortie du survol
// function fVersRectangleBleu(){
//     rectangle.classList.toggle('important'); // Ici, le toggle va "enlever" la classe .important au rectangle
// }
// fonction pour que le rectangle devienne vert au double-clique

// function fVersRectangleVert(){
//     rectangle.classList.toggle('good'); 
//     rectangle.classList.remove('important');
// }

//Correction patrick

//'use strict';   // Mode strict du JavaScript
// alert('test');
/***********************************************
***************** 1- VARIABLES *****************
***********************************************/
// Recherche du bouton dans l'arbre DOM.
//var bouton = document.getElementById('toggle-rectangle');
// Recherche du rectangle dans l'arbre DOM.
//var rectangle = document.querySelector('.rectangle');
/***********************************************
***************** 2- FONCTIONS *****************
***********************************************/
/*
1- fonction au click sur le bouton
*/
// La méthode .toggle() va ajouter ou supprimer la class CSS (tel un interrupteur).
// function surClicBouton() {
//     rectangle.classList.toggle('hide');
// }
/*
2. fonction au double-click sur le rectangle
*/
// function auDoubleClicRectangle() {
//     rectangle.classList.toggle('good');
// }
/*
3. A l'entrée du survol du rectangle
*/
// La méthode .add() va ajouter la class CSS.
// function auSurvolSourisRectangle() {
//     rectangle.classList.add('important');
// }
/*
4. A la sortie du survol du rectangle
*/
// La méthode .remove() va ajouter la class CSS.
// function aSortieSourisRectangle() {
//     rectangle.classList.remove('good');
//     rectangle.classList.remove('important');
// }
/***********************************************
*********** 3- ECOUTEUR D'EVENEMENT ************
************************************************
********** 1er paramètre: l'évènement **********
**** 2nd paramètre: la fonction à exécuter *****
***********************************************/
/*
1. Installation d'un gestionnaire d'évènement au clic sur le bouton.
*/
//bouton.addEventListener('click', surClicBouton);
/*
2. Installation d'un gestionnaire d'évènement au double clic sur le rectangle.
*/
//rectangle.addEventListener('dblclick', auDoubleClicRectangle);
/*
3. Installation d'un gestionnaire d'évènement au survol sur le rectangle.
*/
// rectangle.addEventListener('mouseover', auSurvolSourisRectangle);
/*
4. Installation d'un gestionnaire d'évènement à la sortie du survol sur le rectangle.
*/
//rectangle.addEventListener('mouseout', aSortieSourisRectangle);