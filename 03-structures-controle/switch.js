//Page switch

let x = 50;

switch(x) {// on va switcher"changer"sur la variable
    case 2:// un des cas possible ou une des issues.
        document.getElementById('p1').innerHTML = 'x contient la valeur 2';
        break;// break est obligatoire !! là il sort du switch si  le cas est vrai
    case 5:
        document.getElementById('p1').innerHTML = 'x contient la valeur 5';
        break;
    case 10:
        document.getElementById('p1').innerHTML = 'x contient la valeur 10';
        break;
    case 15:
        document.getElementById('p1').innerHTML = 'x contient la valeur 15';
        break;
    case 20:
        document.getElementById('p1').innerHTML = 'x contient la valeur 20';
        break;
    default:// après défaut il sortira naturellement
        document.getElementById('p1').innerHTML = 'x ne contient ni 2, ni 5, ni 15, ni 20';
}
