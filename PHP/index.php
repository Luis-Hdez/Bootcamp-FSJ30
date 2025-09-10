<?php
// diferencias vs JS
// 1. PHP es un lenguaje compilado (interpretado por un servidor, APACHE)


// delimitadores 

/*
Comentario 
multilinea
*/

// Salto de linea
echo "HOLAAA" . "\n"; // console.log en js 
print "HOLAAA con print \n";

// Variables
// let nombre = "Luis";
$nombre = "Luis";

// constantes
define("PI", 3.14);
const EULER = 2.71; // version de php 7.0 en adelante

// Template String
$templateString = "Hola, mi nombre es {$nombre}";
echo $templateString . "\n";

// Operadores matematicos
$suma = 2+2;
$resta = 2-2;
$multiplicacion = 2*2;
$division = 2/2;
$modulo = 10 % 3; 
$exponente = 2 ** 3;

// operadores de igualdad
$igualdad = (2 == "2");
$igualdadEstricta = (2 === "2");
$diferencia = (2 != 3);
$diferencia = (2 !== "2"); //

// operadores logicos
// and &&, or ||, not !

// funciones
// funcion expresada
function saludar($nombre) {
  return "Hola, {$nombre}";
}

echo saludar("Luis"). "\n";

// funcion anonima
$despedirse = function($nombre) {
  return "Adios, {$nombre}";
};

echo $despedirse("Luis")."\n";

// funcion flecha
$gritar = fn($nombre) => "AHHHH, {$nombre}!";
echo $griitar("Luis")."\n";

// estructuras condicionales
$edad = 18;
if ($edad < 18) {
  echo "Eres menor de edad\n";
} elseif ($edad === 18) {
  echo "Tines 18 años\n";
}
else {
  echo "Eres mayor de edad\n";
}

// switch case
$dia = 3;
switch ($dia) {
  case 1:
    echo "Lunes\n";
    break;
  case 2;
    echo "Martes\n";
    break;
  case 3;
    echo "Miercoles\n";
    break;
  default:
  echo "No es un dia de clase\n";
  break;
}

// ternario
$mensaje = ($edad >= 18) ? "Eres mayr de edad\n" : "Eres menor de edad\n";
echo $mensaje."\n";


?>