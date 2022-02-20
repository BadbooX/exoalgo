
<?php echo("La valeur que tu as rentré est ");  echo htmlspecialchars($_POST['var']);echo("<br>"); ?>
<?php echo("La date entrée est "); echo htmlspecialchars($_POST['date']);echo("<br>"); ?>.
<?php
function is_decimal($n) {
    // Note that floor returns a float 
    return is_numeric($n) && floor($n) != $n;
}

$age = $_POST['var'];
$annee = $_POST['date'];
$diff = date_create($annee);
if (is_numeric($age)){
    if ($age %2 == 0 ) {
        echo("<br>Le nombre choisis est pair !");
    }
    else {
        echo("<br>Le nombre choisis est impair !");
    }


     if (is_decimal($age)) {
        echo("Vous avez entré un nombre à virgule");
    }
    else{
        echo('<br>Vous avez entrer un nombre entier');
    
    
}   
}else{
    echo("Vous devez rentrer de nombre");
}

if ($annee%4 == 0){
    echo("Vous êtes née dans une année Bisextile");
}else{
    echo("L'année choisie est Sextile");
}

?>
