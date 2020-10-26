// js pour la page des opérateurs 

let x = 2;
let y = 50;
let z = 400000;

let a = x + 1;
let c = x - y;
let b = x + c;

let d = x * z;
let e = x / y;
let f = 5 % 3;
let g = 2 ** 3;

console.log(a, b, c);

console.log(f);

console.log(g);
// \n permet d'aller à la ligne dasn l'alerte 

// alert('a contient : ' + a + 
//      '\nb contient :' + b +
//      '\nb contient :' + c +
//      '\nb contient :' + d +
//      '\nb contient :' + e +
//      '\nb contient :' + f +
//      '\nb contient :' + g
// );

// Priorité des calculs 
let h = 1 - 2 - 3;

// Le calcul dans h se fait de gauche à droite 
console.log(h);

let k = 1 + 4 - 5;

console.log(k);

//  Le calcul dans j se fait d'abord de droite à gauche 

let j = 2 ** 3 ** 4;

console.log(j);

let l = 1 - (2 * 3);

console.log(l);

 alert('a contient : ' + h + 
     '\nb contient :' + k +
     '\nb contient :' + j +
     '\nb contient :' + l 
);
