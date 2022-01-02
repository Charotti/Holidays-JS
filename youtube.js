
//EXERCICE ELEVES//
var eleves =[{
    nom: "Marc",
    moyenne: 15
}, {
    nom: "Marion",
    moyenne: 8
}, {
    nom: "Antoine",
    moyenne: 4
}];
for (var i = 0; i < eleves.length; i++) {
    var eleve= eleves[i]
    if (eleve.moyenne < 10) {
        console.log(eleve.nom + " " + "n'a  pas la moyenne");
    } else if ( eleve.moyenne > 10) {
        console.log( eleve.nom + " " + " a la moyenne")
    }
};

// EXERCICE NOMBRES PREMIER
var nombre = 31;
var estPremier = true;

for(var i = 2; i < nombre; i++) {
    if( nombre % i === 0) {
        estPremier = false;
        console.log(" Ce nombre n'est pas premier")
        console.log(nombre +  " " + "est divisible par" + " " + i );
        break;
    }
}
if(estPremier){
    console.log( nombre + " "+ "est premier");
};