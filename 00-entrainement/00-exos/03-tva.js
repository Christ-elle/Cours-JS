//Page TVA 

var ht = prompt('Quel est le montant HT ?');
console.info(ht);
var ttc = ht * 1.20;

document.getElementById('p1').innerHTML = 'Résultat : Prix ' + ht + '€ HT pour un total de ' + ttc + '€ TTC';




