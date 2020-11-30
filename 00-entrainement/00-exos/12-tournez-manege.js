//Page JS pour 12-tournezmanege

// alert('coucou');

//1 - avec while
var w1 = 0;
while(w1 < 10){ // tant que " while"
    w1++;
    document.getElementById('p1').innerHTML += 'While : C\'est le tour de manège n°'+w1+'.<br>';
} // le += veut dire tu ajoute et tu affecte

//2- avec for


 for( var i = 1; i <= 10; i++) { // for veut dire " pour"
     document.getElementById('p2').innerHTML += 'Avec une boucle for ; c\'est le tour n° ' + i + ' <br>';
  }
 document.write('<hr>');

 // avec while et prompt

var nb2 = 0;
console.info(nb2);


var manege = Number(prompt('1- Combien de tours de manège souhaitez vous faire ?'));

while(nb2 < manege) {
    nb2++;
    document.getElementById('p3').innerHTML += 'C\est le tour de manège n° ' + nb2  + '<br>';
}

// avec for et prompt

var manege2 = Number(prompt('2- Combien de tours de manège souhaitez vous faire ?'));

for( var numTour = 1; numTour <= manege2; numTour++) {
    document.getElementById('p4').innerHTML += 'Avec une boucle for ; c\'est le tour n° ' + numTour + ' <br>';
 }



