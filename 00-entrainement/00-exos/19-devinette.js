// Page JS pour devinette

alert('Bienvenue dans le jeu');

// On doit trouver un nombre au hasard que l'utilisateur doit deviner en 3 étapes

//1- Le nombre

// let nbrHasard = Math.random(); // nombre décimal entre 0 et 1
// console.log(typeof nbrHasard, nbrHasard);

//2- On multiplie le nombre trouvé par 100

// let nombreX100 = nbrHasard * 100;
// console.log(nombreX100);

//3- On arrondi le nombre

// let nombreArrondi = Math.floor(nombrex100);
// console.log(nombreArrondi);

//Autre solution pour arrondir le nombre

// nombreX100 = parseInt(nbrHasard * 100);
// console.log(nombreX100);

// Suite de l'exercice


console.log("Bienvenue dans ce jeu de devinette !");
var solution = Math.floor(Math.random() * 100) + 1; // Je génère un nombre aléatoire entre 1 et 100
console.log("(La solution est " + solution + ")");
for (var i = 1; i <= 6; i++) { // je lance la boucle, où i <=  nombre d'essai maximum
    var essai = parseInt(prompt("Tu as 6 essais pour trouver le nombre caché"));
    if (essai === solution) {
        console.log("Excellent, vous avez trouvé en " + i + " essai(s)");
        alert("Excellent, vous avez trouvé en " + i + " essai(s)");
        break; // si la réponse est trouvée, la boucle s'arrête et la console l'affiche, en précisant le nombre d'essai nécessaires.ou i =6 pour remplacer le break
        } 
    if (essai < solution){ // comparent la valeur "essai" à la valeur "solution"
        // console.log(essai + " est trop petit");
        alert(essai + ' Non, c\'est trop petit... Vous en êtes à ' + i + ' sur 6 tentatives!!')
        } 
    if (essai > solution) {
        // console.log(essai + " est trop grand");
        alert(essai + ' Non, C\'est trop grand... Vous en êtes à ' + i + ' sur 6 tentatives!!')
    } 
    if (i === 6){
    console.log("Vous avez perdu ! Le nombre était : " + solution);
    alert('Désolé, vous avez perdu, le nombre était ' + solution ); // si la solution n'est pas trouvée, la console l'affiche en donnant la solution
    }
    if (isNaN(essai)) { //si ce n'est pas un nombre
        alert('Votre proposition n\'est pas un nombre !! Vous en êtes à ' + i + ' sur 6 tentatives!!');
    } console.log(i);   
} // fin boucle for


// Correction Patrick

// for(var i =1; i <=6; i++) {
    //choixUtilisateur = parseInt(prompt("Tu as 6 essais pour trouver le nombre caché entre 0 et 100")); parseInt nous assure que le nombre est entier, si celui-ci est une virgule il considèle le chiffre avant la virgule
    //if(!isNan(choixUtilisateur)) { // nous assure que la saisie est un nombre. Est-ce bien un nombre ?
        //if(nombreArrondi === choixUtilisateur){ // c'est un nombre et  me nombre est égal au nombre au hasard
        //alert('Bravo, bien joué');
        //i = 6;
    //} else {
        //if(nombreArrondi < choixUtilisateur)
        //alert('le nombre est plus petit ;  essai n°' + i + '/6');
    //}else{
        //alert('le nombre est plsu grand ; essai n°' + i + '/6');
    //}
     //fin if plus grand et plus petit
//} else {
    //alert('Non, un nombre SVP');
//} fin if principal

//fin for boucle 6 fois
// alert('La bonne réponse était ' + nombreArrondi);
//document.write('la bonne réponse était ' + nombreArrondi);

//Correction justine

// alert('Bienvenue dans le jeu !');
// var nbrHasard = Math.floor(Math.random() * 100);
// console.log(typeof nbrHasard, nbrHasard);
// for(i = 1; i <= 6; i++){
//     var choixUser = parseInt(prompt('Trouvez quel est le nombre mystère, compris entre 0 et 100. Attention, vous n\'avez que 6 essais !'));
//         if((choixUser < 0) || (choixUser > 100)){ // on teste si en dessous de 0 et au dessus de 100
//             alert('Vous devez saisir un nombre entre 0 et 100 !');
//             i--; // ça ne compte pas dans les essais
//         }else if(isNaN(choixUser)){ // on teste si l'utilisateur met autre chose qu'un chiffre ou un nombre
//             alert('Vous devez saisir un NOMBRE !');
//             i--;// ça ne compte pas dans les essais
//         }else if(choixUser < nbrHasard){
//             alert('Visez plus haut ! ' + i + '/6.');
//         }else if(choixUser > nbrHasard){
//             alert('Visez plus bas ! Vous  ' + i + '/6.');
//         }else{
//             document.getElementById('p1').innerHTML = 'Vous avez gagné, bravo ! La réponse était bien '+ nbrHasard +'.';
//             break; // on casse la boucle
//         }
//     document.getElementById('p1').innerHTML = 'Dommage, vous n\'avez pas trouvé la bonne réponse, c\'était '+ nbrHasard +'.';
// }



  


