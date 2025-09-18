<?php
// Ejercicio 1
// Problema de lista invertida
function invertirLista($array)
{
    return array_reverse($array);
}

$numArray = [1, 2, 3, 4];
$listaInvertida = invertirLista($numArray);
print_r($listaInvertida);


// Ejercicio 2
//Porblema de suma de numeros pares
function sumarPares($array)
{
    $suma = 0;
    foreach ($array as $numero) {
        if ($numero % 2 == 0) {
            $suma += $numero;
        }
    }
    return $suma;
}

$numerosEnteros = [1, 2, 3, 4, 5, 6];
$sumaPares = sumarPares($numerosEnteros);
echo "La suma de los números pares es: " . $sumaPares;

// Ejercicio 3
// Problema de frecuencia de caracteres
function frecuenciaCaracteres($cadena)
{
    $frecuencia = [];
    for ($i = 0; $i < strlen($cadena); $i++) {
        $caracter = $cadena[$i];
        if (isset($frecuencia[$caracter])) {
            $frecuencia[$caracter]++;
        } else {
            $frecuencia[$caracter] = 1;
        }
    }
    return $frecuencia;
}

$texto = "hola mundo";
$frecuencia = frecuenciaCaracteres($texto);
print_r($frecuencia);

//
function contarFrecuencia($string){
    $frecuenciaCaracter = [];

    $caracateres = str_split(strtolower($string));
   // print_r($caracateres);

    //isset() -> determina un valor existe, si eso pasa devuelve true
    foreach($caracateres as $caracter){
        if(isset($frecuenciaCaracter[$caracter])){
            $frecuenciaCaracter[$caracter]++;
        }else{
            $frecuenciaCaracter[$caracter] = 1;
        }
    }

    return $frecuenciaCaracter;
}

print_r(contarFrecuencia('Hola Mundoooh'));

//Ejercicio 4
//problema de bucle anidado
function hacerPiramide($altura) {
    for ($i = 1; $i <= $altura; $i++) {
        for ($j = 1; $j <= $altura - $i; $j++) {
            echo " ";
        }
        for ($k = 1; $k <= (2 * $i) - 1; $k++) {
            echo "*";
        }
        echo "\n";
    }
}

hacerPiramide(6);


function imprimirPiramide(){
    $filas = 5;

    // primer bucle es para la altura
    // por eso empieza en 1 y se repite hasta la cantidad de altura que queremos que tenga
    for ($i = 1; $i <= $filas; $i++){
        //segundo bucle controla los espacios en blanco antes de dibujar los asteriscos
        for ($espacios=1; $espacios <= $filas - $i; $espacios++) { 
            echo " ";
        }
        // tercer bucle controla el numero de asteriscos por filas
        for ($asteriscos=1; $asteriscos <= (2 * $i) - 1; $asteriscos++) { 
            echo "*";
        }
        
        echo "\n";
    }

}

imprimirPiramide();
