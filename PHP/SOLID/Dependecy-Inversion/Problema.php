<?php
/*
    Los modulos de alto nivel no deben depender de los modulos de bajo nivel 
    ambos deben depender de abstracciones
    las abstracciones no deben depender de los detalles
    los detalles deben depender de las abstracciones
*/

class DBConection
{
    private $adaptador;

    function __construct()
    {
        $this->adaptador = new MySQLDB;
    }
    
    function cn()
    {
        $this->adaptador->conectDB();
    }
}

class MySQLDB
{
    // credenciales

    function conectDB()
    {
        // Logica para conectar ña base de datos
    }
}

// MySQLDB::conectDB();

$baseMySQL = new MySQLDB();
