// Page JS du jour suivant  



var jour = prompt ('Quel jour sommes-nous ? avec if');
    if(jour == 'lundi'){
        document.getElementById('p1').innerHTML = ('Demain nous serons mardi');
    } else if ( jour == 'mardi') {
        document.getElementById('p1').innerHTML = ('Demain nous serons mercredi');
    } else if ( jour == 'mercredi'){
        document.getElementById('p1').innerHTML = ('Demain nous serons jeudi');
    }else if ( jour == 'jeudi'){
        document.getElementById('p1').innerHTML = ('Demain nous serons vendredi');
    } else if ( jour == 'vendredi'){
        document.getElementById('p1').innerHTML = ('Demain nous serons samedi');
    }else if ( jour == 'samedi'){
        document.getElementById('p1').innerHTML = ('Demain nous serons dimanche');
    }else if ( jour == 'dimanche'){
        document.getElementById('p1').innerHTML = ('Demain nous serons lundi');
    }else{
        document.getElementById('p1').innerHTML = ('Ce n\'est pas un jour de la semaine');
    }