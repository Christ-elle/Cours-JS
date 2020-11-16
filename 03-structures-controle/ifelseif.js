// if ... else if..else

let x = 0.5;
 if( x > 1){
     alert('x contient une valeur strictement suppérieure à 1');
 }else if(x==1){
     alert('x contient la valeur1');
}else {
    alert('xcontient une valeur strictement inférieure à 1');
}

x = -10;

if( x > 1 ){ //si
    alert('x contient une valeur strictement supérieure à 1');
}else if ( x == 1) { // sinon si
    alert('x contient la valeur 1');
}else if (x < 1){ // sinon si
    alert('x contient une valeur strictement inférieure à 1');
}else if (x < 0){ //sinon si
    alert('x contient une valeur strictement inférieure à 0');
}else if (x < -2){ //sinon si
    alert('x contient une valeur strictement inférieure à -2');
}else{// les conditions étant toutes notés on ne met pas de condition à else
    alert('la valeur de x n\'a pas pu être comparée à un nombre.');
}