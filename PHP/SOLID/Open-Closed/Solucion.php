<?php
/*
    Principio Abierto/Cerrado -> las partres de nuetra aplicacion tiene que estar abiertas para 
    la extension y cerradas a la modificacion
*/

class ConductorAutomovil{

    function acelerar(Auto $auto){
        $auto->aumentarVelocidad();

    }
}

class Auto{
    function aumentarVelocidad(){
        echo "Estoy acelerando";
    }
}

class RollRoyce extends Auto{
    function aumentarVelocidad(){
        echo "Estoy acelerandooo";
    }
}

class Mercedes extends Auto{
    function aumentarVelocidad(){
        echo "Estoy acelerandooo pero mas fuerte";
    }
}

$vehiculoHumilde = new Mercedes();
$schuma = new ConductorAutomovil();

$schuma->acelerar($vehiculoHumilde);