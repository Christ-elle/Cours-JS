//PAGE JS POUR HEURE SUIVANTE

// alert('coucou');


var heure = parseInt(prompt('Entrez l\'heure !'));
var minutes = parseInt(prompt('Et les minutes ?'));
var secondes = parseInt(prompt('Et les secondes svp ?'));

console.log(heure, minutes, secondes)

if (heure <= 0 || heure > 23 || minutes < 0 || minutes > 60 || secondes < 0 || secondes > 60){
    alert('Attention, une journée fait 24 heures !');
}else if(isNaN(heure) || isNaN(minutes) || isNaN(secondes)){
    alert('Vous devez rentrer des chiffres !')
}else{
    if (heure == 23 && minutes == 59 && secondes == 59){
        document.getElementById('p1').innerHTML = 'Dans une seconde, il sera 0h 0min 0sec. '; 
    }else if (secondes == 59 && minutes == 59) {
        document.getElementById('p1').innerHTML = 'Dans une seconde, il sera ' + (heure+1) +'h 0 min 0 sec. '; 
        console.log(heure, minutes, secondes)
    }else if(secondes == 59){
        document.getElementById('p1').innerHTML = 'Dans une seconde, il sera ' + heure +'h '+ (minutes+1) +'min '+ '0 sec. ';  
        console.log(heure, minutes, secondes)
    }else if(minutes == 59){
        document.getElementById('p1').innerHTML = 'Dans une seconde, il sera ' + heure +'h '+ minutes+ ' min '+ secondes +'sec. '; 
    }else {
        document.getElementById('p1').innerHTML = 'Dans une seconde, il sera '+heure+'h ' + minutes +' min ' + (secondes+1) +'sec. '; 
    }
}

// correction patrick

// var heure = prompt('Entrez l\'heure');
// var minute = prompt('Entrez les minutes');
// var seconde = prompt('Entrez les secondes');
// if ((heure >= 0) && (heure <=23) && (minute >= 0) && (minute <= 59) && (seconde >= 0) && (seconde <=59)) {// conditions 
//     seconde++;// on incrémente les seconde
//         if (seconde === 60) {
//             seconde = 0;
//             minute++;
//             if (minute === 60) {
//                 minute = 0;
//                 heure++;
//                 if (heure === 24) {
//                     heure = 0;
//                 }
//             }
//         }
//     console.log('il sera ' + heure + ' ' + minute + ' ' + seconde );
//     document.getElementById('p1').innerHTML = 'Dans une seconde il sera ' + heure + ' h ' + minute + ' mn ' + seconde +' s.';
// } else {
//     document.getElementById('p1').innerHTML = 'Heure incorrecte';
// }
