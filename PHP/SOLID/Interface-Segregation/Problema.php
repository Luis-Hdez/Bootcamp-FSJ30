<?php
/*
    Segregacion de Interfaces
    Si nosotros tenemos una interfaz demasiado generica es mejor dividirla en interfaces
    mas especificas
*/

class Ave{
    function comer() {}

    function caminar() {}

    function picar() {}

    function volar() {}
}

class Pinguino implements Ave{
    function comer() {}

    function caminar() {}

    function picar() {}
    
    function volar() {
        return new Exception("No puede volar, a lo sumo caer con estilo");
    }
}