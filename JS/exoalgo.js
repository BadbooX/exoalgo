/* EXO 1 */
var a = 5;
console.log('EXO1 La variable est ' + a);

/* EXO 2 */
var a = 10;
var b = 12;
console.log('EXO2: a + b = ' + (a + b));
console.log('a - b = ' + (a - b));
console.log('a x b = ' + (a * b));
/* EXO 3 */
var z = "EXO03: Bonjour, ceci est une variable";
console.log(z);
/* EXO 4 */
var a = "EXO04: Coucou ";
var b = "Petite perruche";
console.log(a + b);
/* EXO 5 */
var a = 30;
var b = 20;
console.log("EXO5: a = 30");
console.log("b = 20")
var c = a;
var a = b;
var b = c;
console.log("A = " + a + '  B = ' + b);
/* EXO 6 */
var a = 30;
var b = 20;
if(a > b) {
    console.log('EXO 6 : A est plus grand que B');
}
else if (b > a) {
    console.log('EXO 6 : B est plus grand que A');
}
else {
    console.log("EXO 6 : Les nombre sont égaux.")
}
/* EXO 7 */
var a = 30;
var b = 20;
function maVariable(x, y) {
    if (x > y) {
        console.log("EXO07 : " + x + " Est plus grand que " + y);
    }
    else if (y > x) {
        console.log("EXO07 : " + y + " Est plus grand que " + x);
    }
    else {
        console.log("EXO07 : Les nombres sont égaux");
    }
    
}
maVariable(a, b);
/* EXO 8 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log(getRandomInt(10));

/* EXO 9 */
console.log('EXO 9');

for( i = 0; i < 10; i++) {
    console.log(getRandomInt(100));
}
/* EXO 10 */
var a = 0;
console.log('EXO 10');
while (a < 90) {
    a = getRandomInt(100);
    console.log(a);
}
/* EXO  11 */
/* "Afficher une variable entrée manuellement par l'utilisateur */
/* Code à ajouter ci-dessous */
console.log("EXO 11 ");
var a = prompt('Quel est votre variable ? ');
console.log("La variable que vous avez choisit est : " + a);

/* EXO n°12 */
/*Demander à l'utilisateur d'entrer un nombre entier et afficher si ce chiffre est pair ou impair*/

/* Code à ajouter ci-dessous */
console.log("EXO 12 ");
var b = prompt('Quel est votre variable ? ');
console.log("La variable que vous avez choisit est : " + b);
if( b %2 == 0) {
    console.log("La variable que vous avez choisit est pair");
}
else {
    console.log("La variable que vous avez choisit est impair");
}


/*  EXO n°13 */
console.log("EXO 13");
/*Même exercice que n°12, mais rajouter un message d'erreur si l'utilisateur n'entre pas un nombre entier */
/* Code à ajouter ci-dessous */
var d = prompt('Quel est votre variable ? ');
if(isNaN(d)) {
    console.log("Loupé, vous devez inscrire un nombre ");
}
else{
    console.log("votre nombre à bien été pris en compte");
}
console.log("La variable que vous avez choisit est : " + d);
if( b %2 == 0) {
    console.log("La variable que vous avez choisit est pair");
}
else {
    console.log("La variable que vous avez choisit est impair");
}

/* EXO n°14 */
/* Demander à l'utilisateur d'entrer une année, et afficher si cette année est sextile ou bissextile*/
/* Code à ajouter ci-dessous */
console.log("EXO 14");
var j = prompt("Veuillez écrire une année");
if (j %4 == 0) {
    console.log("Vous êtes dans une année Bisextile");
}
else if (j %4 > 0) {
    console.log("Vous êtes dans une année Sextile");
}

/* EXO n°15*/
/*Demander à l'utilisateur d'entrer une date, et afficher si cette date est valide ou non */
/* Code à ajouter ci-dessous */