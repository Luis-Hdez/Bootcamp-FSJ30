<?php
/*
    Los modulos de alto nivel no deben depender de los modulos de bajo nivel 
    ambos deben depender de abstracciones
    las abstracciones no deben depender de los detalles
    los detalles deben depender de las abstracciones
*/

interface IAdaptador{
    function conectDB();
}

class DBConection
{
    private $adaptador;

    function __construct(IAdaptador $db)
    {
        $this->adaptador = $db;
    }
    
    function cn()
    {
        $this->adaptador->conectDB();
    }
}

class MySQLDB implements IAdaptador
{
    // credenciales

    function conectDB()
    {
        echo "Me estoy conectacdo a MySQLDB";
    }
}

class MongoDB implements IAdaptador{
    function conectDB(){
        echo "Me estoy conectando a MongoDB";
    }
}

// MySQLDB::conectDB();
$mysql = new MySQLDB();
$mongo = new MongoDB();


$dbConection = new DBConection($mysql);
$dbConectionMongo = new DBConection($mongo);

$dbConection->cn();
$dbConectionMongo->cn();
?>