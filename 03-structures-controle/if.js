// JS pour la page if 
// Condition if
let x = 4;
let y = 0;

if(x > 1){ // TEST true ? la condition ou le test évaluer à true
    alert('x contient une valeur supérieur à 1'); // BLOC DE CODE si c'est true on exécute ce bloc de code
}

if(x==y){
    alert('x et y contiennent la même valeur');
}

 if(y){ // l'alerte ne s'affichera pas car la valeur de y contient 0, qui est une des valeurs qui renvoie false (cf.la liste dasn la page html).
     alert('La valeur de y est évaluée à true'); // puisque c'est faux, on n'éxécute pas.
 }

//inversion du test logique.... vérifier que c'est faux.

if((x > 1) == false){ // Au lieu de vérifié que le test est vrai on va vérifié qu'il est faux.

  alerte('xcontient une valeur inférieure à 1');
}

if((x == y) == false){
    alert('x et y ne contiennent pasla même valeur');
}
// VOIR