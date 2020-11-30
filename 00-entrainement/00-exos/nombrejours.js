//Page JS pour nombrejours

// alert('holà')

// var mois = parseInt(prompt('Quel mois choisissez-vous ?', ' n° du mois entre 1 et 12'));

// if(mois >= 1 && mois <= 12) {
//     if(mois == 1){
//         document.getElementById('p1').innerHTML= 'Vous avez choisi le mois de Janvier, il y as 31 jours.'
//     }else if(mois == 2){
//         document.getElementById('p1').innerHTML= 'Vous avez choisi le mois de Fevrier, il y as 28 jours.'
//     }else if(mois == 3){
//         document.getElementById('p1').innerHTML= 'Vous avez choisi le mois de Mars, il y as 31 jours.'
//     }else if(mois == 4){
//         document.getElementById('p1').innerHTML= 'Vous avez choisi le mois de Avril, il y as 30 jours.'
//     }else if(mois == 5){
//         document.getElementById('p1').innerHTML= 'Vous avez choisi le mois de Mai, il y as 31 jours.'
//     }else if(mois == 6){
//         document.getElementById('p1').innerHTML= 'Vous avez choisi le mois de Juin, il y as 30 jours.'
//     }else if(mois == 7){
//         document.getElementById('p1').innerHTML= 'Vous avez choisi le mois de Juillet, il y as 31 jours.'
//     }else if(mois == 8){
//         document.getElementById('p1').innerHTML= 'Vous avez choisi le mois de Aout, il y as 31 jours.'
//     }else if(mois == 9){
//         document.getElementById('p1').innerHTML= 'Vous avez choisi le mois de Septembre, il y as 30 jours.'
//     }else if(mois == 10){
//         document.getElementById('p1').innerHTML= 'Vous avez choisi le mois de octobre, il y as 31 jours.'
//     }else if(mois == 11){
//         document.getElementById('p1').innerHTML= 'Vous avez choisi le mois de Novembre, il y as 30 jours.'
//     }else{
//         document.getElementById('p1').innerHTML= 'Vous avez choisi le mois de Decembre, il y as 31 jours.'
//     }
// }else {
//     alert(' Vous devez saisir un chiffre entre 1 et 12 ');
// }


// Correction Katia

// if (isNaN(mois)){
//     document.getElementById('p1').innerHTML = 'Vous devez saisir un chiffre !';
// }else if(mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois == 12 ){
//     document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 31 jours.';
// }else if(mois == 4 || mois == 6 || mois == 9 || mois == 11){
//     document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 30 jours.';
// }else if(mois == 2){
//     document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 28 jours.';
// }else {
//     document.getElementById('p1').innerHTML = 'Il n\'y a que 12 mois dans l\'année !';
// }

//Correction Patrick

var mois = parseInt(prompt('Quel mois choisissez-vous ?', ' n° du mois entre 1 et 12'));
var moisNom = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'];

console.log(moisNom);
console.info(moisNom.length);

var numMois = moisNom.indexOf('mai');
console.log(numMois);


if(isNaN(mois)){
    document.getElementById('p1').innerHTML = 'Votre choix n\'est pas un chiffre';
} else { // sinon c'est un nombre
    if (mois == 2) { // un nombre égal à 2 etc ..
        // document.getElementById('p1').innerHTML = ' Le mois numéro ' + mois + ' de l\'année fait 28 jours.';
        document.getElementById('p1').innerHTML = ' Le mois numéro ' + mois + ' , ' + moisNom[mois - 1] + ' fait 28 jours. ';
    }else if (( mois === 4) || ( mois === 6) || ( mois === 9) || ( mois === 11)) { // ou à 4 ou à 6 ect ..
        document.getElementById('p1').innerHTML = ' Le mois numéro ' + mois + ' , ' + moisNom[mois - 1] + ' fait 30 jours. ';
    } else if (( mois === 1) || ( mois === 3) || ( mois === 5) || ( mois === 7) || ( mois === 8) || ( mois === 10) || ( mois === 12) ) {
        document.getElementById('p1').innerHTML = ' Le mois numéro ' + mois + ' , ' + moisNom[mois - 1] + ' fait 31 jours. ';
    } else {
        document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ' n\'est pas dans le calendrier.';
    }
} // fin du if else principal
