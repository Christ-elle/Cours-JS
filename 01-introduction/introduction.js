//Mon premier fichier .js - estevane  Colombbus
// Ce fichier est lié à la page 01-04-introduction.html
// un commentaire monoligne

// Un commentaire 

// Multiligne en JS

// Un commentaire multiligne sur une seule ligne 


let bonjour = document.getElementById('b1');
let ajouter = document.getElementById('b2');

bonjour.addEventListener('click', popup);
ajouter.addEventListener('click', ajout);

function popup(){
    alert('Bonjour, je suis une fenêtre d\'alerte');
}
function ajout() {
    let para = document.createElement('p');
    para.textContent = 'paragraphe ajouté';
    document.body.appendChild(para);
}