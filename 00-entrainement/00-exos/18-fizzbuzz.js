// JS de la page fizzbuzz

// alert('coucou');

document.write('<hr>')

for (var nombre = 1; nombre <= 100; nombre++) {
    var message = ""; // Message à afficher, initialement vide
    if (nombre % 3 === 0) {
        // Nombre divisible par 3 : on ajoute "Fizz" au message
        message += 'Fizz';
    }
    if (nombre % 5 === 0) {
        // Nombre divisible par 5 : on ajoute "Buzz" au message
        message += 'Buzz';
    }
    if (message === "") {
       // message affichera fizzbuzz à la place des nbres divisible par 3 et par 5
        message = nombre;
    }
    console.log(message);
}

// Correction Patrick



// une boucle for

// for (var nombre = 1; nombre <=100; nombre++) {
//     if ((nombre % 3 === 0) && (nombre % 5 === 0)) {// le nombre est divisible par 3 ET 5 
//         console.log('FizzBuzzzzz'); 
//     } else if (nombre % 3 === 0) {
//         console.log('Fizzz');
//     } else if (nombre % 5 === 0) {
//         console.log('Buzzzz'); }  
//     else {
//         console.log(nombre);
//         } //fin if else
//     }//fin for


// console.log('seconde version >>>>>');
// for (var nombre = 1; nombre <=100; nombre++) {
//     if ((nombre % 3 === 0) && (nombre % 5 === 0)) // le nombre est divisible par 3 ET 5 
//         console.log('FizzBuzzzzz'); 
//     else if (nombre % 3 === 0) 
//         console.log('Fizzz');
//     else if (nombre % 5 === 0) 
//         console.log('Buzzzz');  
//     else 
//         console.log(nombre);
//     }//fin for

//Correction Justine

// for(var i = 0; i <= 100; i++){
//     if(i % 15 === 0){ // modulo de 15 qui équivaut à un modulo pour 3 et 5
//          document.getElementById('p1').innerHTML += 'FizzBuzz <br>';
//      }else if(i % 3 === 0){
//          document.getElementById('p1').innerHTML += 'FIzz <br>';
//      }else  if(i % 5 === 0){
//          document.getElementById('p1').innerHTML += 'Buzz <br>';
//      }else{
//          document.getElementById('p1').innerHTML += i + '<br>';
//      }
//  } // fin de la boucle for

