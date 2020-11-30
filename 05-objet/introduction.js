// page JS pour introduction 

// alert('coucou');

// Ici nous avons une variable objet
let utilisateur = {

// nom, age et amail sont des propriétés de l'objet utilisateur
    nom : ['Victor', 'Marie', 'Hugo'], // ici nous avons des propriétés qui sont dans un tableau un " array"
    age : 2,
    email : 'toto@hugo.com',
    adresse : 'pffff !',

    // Une méthode un peut comme unefonction

    bonjour: function () {
        alert('j\'ai ' + this.age + ' ans et mon prénom est ' + this.nom [0] + '' + ' this.nom[3]' + '' +  ' this.nom[2] 
    }
}

console.info(typeof utilisateur); // on dira que "utilisateur " est un objet typeof()

utilisateur.bonjour();



