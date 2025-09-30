<?php
echo "<h3>Llegaste a procesamiento de datos</h3>";
/*
    CRUD

    VARIABLES RESERVADAS PHP
    $_FILES -> manejar archivos subidos por el cliente
    $_POST -> manejamos datos enviados por el cliente
    $_SESSION -> nos permite guardar datos en el almacenamiento local del ciente
    $_COOKIE -> manejar las cookies del navegador del cliente

*/

// print_r($_GET);
print_r($_POST);

class Usuario{
    private $nombre;
    private $edad;
    private $email;

    function __construct($nombreParam, $edadParam, $emailParan)
    {
        $this->nombre = $nombreParam;
        $this->edad = $edadParam;
        $this->email = $emailParan;
    }

    function getUser(){
        return $this;
    }
}

$user = new Usuario($_POST['name'], $_POST['age'], $_POST['email']);

print_r($user->getUser());