// Page JS pour nouvel objet 
// victor est un objet

let victor = {
    nom : ['Victor', 'Hugo' ],
    age : 2,
    email : 'toto@hugo.com',


// bonjour est une méthode de l'objet victor
    bonjour : function() {
        alert('Bonjour, je suis ' + this.nom [0] + 'j\'ai ' + this.age + ' ans.');
    }
}
// victor.bonjour();

// victor.bonjour();
console.log(typeof victor);

//on accéde aux propriétés nom et age qui contiennent des valeurs 
document.getElementById('p1').innerHTML = 'Nom : ' + victor.nom;
document.getElementById('p2').innerHTML = 'Age : ' + victor.age + 'ans.';

// on peut modifié la valeur de la propriété age
victor.age = 80;

document.getElementById('p3').innerHTML = 'Nouvel âge : ' + victor.age + 'ans.';

// victor.bonjour();
//on rajoute une propriété et une valeur associée

victor.metier = 'écrivain, dramaturge, poète';

// on crée une nouvelle méthode
victor.bonjour2 = function() {
    alert('Bonjour, j\'ai maintenant ' + this.age + ' je suis ' + this.metier + ' célèbre dans le monde entier');
}
victor.bonjour2();

document.getElementById('p4').innerHTML = 'Bonjour, je suis ' + victor.nom[0]  + ' ' +  victor.nom [1] + '.';