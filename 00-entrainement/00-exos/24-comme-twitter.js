let textearea = document.querySelector('#tweetContenu');
let compteur = document.querySelector('#compteur');
console.log(textearea, compteur);
// la fonction va calculer la longueur de la chaîne de caractères contenu dans le textearea
function compte(){
    let compte = 140 - textearea.value.length;
    compteur.innerHTML = 'Il reste ' + compte + ' caractères';
    if(compte < 0){
        // console.log(compte);
        compteur.classList.remove("bg_warning");
        compteur.classList.add("bg-danger", "text-white");
        // compteur.textContent = "Trop de caractères !";
        var nbrPositif = Math.abs(compte);
        compteur.textContent = 'Trop de caractères ! Vous devez en retirer ' + nbrPositif;
    }else if(compte > 0){
        compteur.classList.remove('bg-danger', 'text-white');
        compteur.classList.add('bg-warning');
    }else{
        //sinon rien
    }
}//fin fonction 
// On pose un écouteur d'événement avec keyup sur le textearea
textearea.addEventListener('keyup', compte);
// on appelle la fonction
compte();


