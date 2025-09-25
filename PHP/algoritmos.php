<?php
function linealSearch($lista, $elementoBuscado){
    for ($i=0; $i < count($lista) ; $i++) { 
        if ($lista[$i] === $elementoBuscado) {
            return $i;     
        }   
    }

    return -1; // no encontramos el elementos
};


// ejemplo practico con estudiantes del FSJ30
$estudiantes = ["Alejandro", "Luis", "Fernando", "Juan"];
$nombre = "Luis";
$posicion = linealSearch($estudiantes, $nombre); 

if ($posicion !==-1) {
    echo "Encontramos a ".$nombre." en la posicion ".$posicion."\n";
    echo "En la lista está como: ".$estudiantes[$posicion]."\n";
}else{
    echo $nombre." no está en la lista de estudiantes";
}

// busqueda de precios
/*
    ejercicio de busqueda de precios 
    Busqueda Binaria
*/
function buscarPrecio($listaPrecios, $precioBucado){
  $left = 0;
  $right = count($listaPrecios) - 1;
  
  while ($left <= $right) {
        $mid = floor(($left + $right) / 2);
        
        // Elemento encontrado
        if ($listaPrecios[$mid] == $precioBucado) {
            return $mid;
        }
        
        // Si el objetivo es mayor, ignorar mitad izquierda
        if ($listaPrecios[$mid] < $precioBucado) {
          $left = $mid + 1;
        } 
        // Si el objetivo es menor, ignorar mitad derecha
        else {
            $right = $mid - 1;
        }
    }
    
    // Elemento no encontrado
    return -1;
  }

$precios = [0.25, 0.50, 0.75, 1.00, 1.25, 1.50, 2.00, 2.50, 3.00, 5.00];
$target = 0.25;
$result = buscarPrecio($precios, $target);

if ($result != -1) {
    echo "Elemento encontrado en la posición: " . $result;
} else {
    echo "Elemento no encontrado en el array";
}