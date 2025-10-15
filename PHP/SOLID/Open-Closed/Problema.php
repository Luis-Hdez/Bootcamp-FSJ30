<?php
/*
    Principio Abierto/Cerrado -> las partres de nuetra aplicacion tiene que estar abiertas para 
    la extension y cerradas a la modificacion
*/

class ConductorAutomovil{

    function acelerar(RollRoyce $auto){
        $auto->aumentarVelocidad();

    }
}

class RollRoyce{
    function aumentarVelocidad(){
        echo "Estoy acelerandooo";
    }
}

$vehiculoHumilde = new RollRoyce();
$schuma = new ConductorAutomovil();

$schuma->acelerar($vehiculoHumilde);