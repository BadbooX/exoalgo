<?php

echo ("====== EXO n°1 ======<br><br>");
echo ("Prendre une variables en php (la déclaration d'une variable se fait avec un $ en php), affecter une valeur à cette variable et l'afficher <br>");

$variable = 5;
echo ($variable);

echo ("<br><br><br>====== EXO n°2 ======<br><br>");
echo ("Prendre deux variables en php, affecter une valeur à chaque variable, afficher le résultat de l'addition, de la soustraction, et de la multiplication de ces deux variables <br>");


/* Code à ajouter ci-dessous */
$chocolat = 12;
$banane = 12;
echo($chocolat + $banane) . ("<br>");
echo($chocolat - $banane) . ("<br>");
echo($chocolat * $banane) . ("<br>");


echo ("<br><br><br>====== EXO n°3 ======<br><br>");
echo ("Prendre une variable en php et affecter une chaine de caracètere à cette variable et l'afficher <br>");


/* Code à ajouter ci-dessous */
$KekeTunning = "<br>Bonjour j'aime le soda la viande<br>";
echo($KekeTunning);

echo ("<br><br><br>====== EXO n°4 ======<br><br>");
echo ("Afficher à l'aide des deux variables déjà défini le texte contenu dans les variables à l'aide d'une concaténation (un espace est souhaitée entre les deux variables) <br>");
$a = "coucou";
$b = "petite perruche";

/* Code à ajouter ci-dessous */
echo($a . "   " . $b);


echo ("<br><br><br>====== EXO n°5 ======<br><br>");
echo ("Permutter le contenu de la variable a et de la variable b <br>");
$a = 20 ;
$b = 30 ;

/* Code à ajouter ci-dessous */
$z = $b ;
$b = $a ;
$a = $z ;
echo($a . " " . $b);


echo ("<br><br><br>====== EXO n°6 ======<br><br>");
echo ("A partir d'un algorithme, définir dans tout les cas possibles quels chiffre est le plus grand (vous pouvez changer les valeurs des variables a et b pour tester toutes les possiblités) <br>");
$a = 20 ;
$b = 30 ;
/* Code à ajouter ci-dessous */
if($a > $b) {
    echo($a . " Est plus grand que " . $b);
}
else if($b > $a) {
    echo($b . " Est plus grand que " . $a);
}
else {
    echo("Les chiffres sont égaux");
}


echo ("<br><br><br>====== EXO n°7 ======<br><br>");
echo ("faire une fonction qui prend en parametres deux variables ( a et b par exemple ) et qui définis quel chiffre est le plus grand <br>");
$kevin = 20 ;
$julien = 30 ;
/* Code à ajouter ci-dessous */
    function mamasita($a, $b) {
    /* Les paramètres d'une fonctions en la créant sont fictifs */
        if($a > $b) {
            echo($a . " Est plus grand que " . $b);
        }
        if($b > $a) {
            echo($b . " Est plus grand que " . $a);
        }
        else {
            echo("Les chiffres sont égaux");
        }
}
mamasita($kevin, $julien);



echo ("<br><br><br>====== EXO n°8 ======<br><br>");
echo ("afficher un nombre aléatoire à partir de la fonction rand() <br>");
/* Code à ajouter ci-dessous */
echo(rand(1, 100));

echo ("<br><br><br>====== EXO n°9 ======<br><br>");
echo ("afficher 10 nombre aléatoire à partir de la fonction rand() en utilisant une boucle <br>");
/* Code à ajouter ci-dessous */
$a = 0;
while($a < 10) {
    echo(rand(1,20) . "<br>");
    $a += 1;
}


echo ("<br><br><br>====== EXO n°10 ======<br><br>");
echo ("afficher des nombres aléatoires compris entre 1 et 100 et s'arreter quand le dernier chiffre est >90 <br>");
/* Code à ajouter ci-dessous */
$a = 0;
$b = 0;
while($a < 90) {
    echo($a = rand(1,100) . "<br>");
}
if ($a >= 90) {
    
}