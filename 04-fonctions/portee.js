// Page sur la portée des variables 

// Deux variables globales
let x = 5;
var y = 10;

function portee1(){// 1ere fonction avec des variables globales
    document.getElementById('p1').innerHTML = 'Depuis portee1() : x = ' + x + ' y = ' + y ;
}

function portee2(){
    let a = 1;
    var b = 2;
    document.getElementById('p2').innerHTML = 'Depuis portee2() : a = ' + a + ' b = ' + b ;
   
}

function portee3(){
    
    // une 3eme fonction avec de nouveau des locales qui portent le même nom que les globales
    
    let x = 20;// bien qu'elles portent le même nom que les globales ce sont 2 entités différentes
    var y = 40;// la fonction va donc utiliser les locales
    document.getElementById('p3').innerHTML = 'Depuis portee3() : x = ' + x + ' y = ' + y ;
}
portee1();
portee2();
portee3();


// on tente d'afficher les globales
document.getElementById('p4').innerHTML = 'Ceci n\'est pas une fonctionet le message dans la console est normal. Depuisl\'espace global : x = ' + x + ' y = ' + y ;

//on tente d'afficher les locales
//  document.getElementById('p5').innerHTML = 'Depuis l\'espace local : a = ' + a + ' b = ' + b ;


