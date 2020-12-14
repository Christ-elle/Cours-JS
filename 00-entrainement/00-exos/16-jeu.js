// Page JS pour 16-jeu --- ni oui ni non 

// alert('coucou');


// Correction Patrick

var disMoi = ''; // initialisation de la variable avec une string vide, on y rentrera la réponse de l'utilisateur.
console.log(typeof disMoi, disMoi);
var i = 1;

// Tant que le prompt ne contient pas oui ET ne contient pas non, boucle 
while((disMoi !== 'oui') && (disMoi !== 'non')) {
disMoi = prompt('On joue à ni oui ni non !! ');
i++; // Une boucle a besoin de nombre de tours

}
document.write('<p>Perdu</p>');

// 



