<?php
// array 
// array indexado

use Dom\Node as DomNode;

$array = [1, 2, 3, 4, 5];
$array2 = array(1, 2, 3, 4, 5);
$array3 = new ArrayObject();

// array asociativo
$arrayAociativo = [
  "nombre" => "Luis",
  "apellido" => "Hernández",
  "edad" => 28
];

print_r($arrayAociativo["nombre"]) . "\n";

// array propiedades y metodos
// saber el largo del array
echo count($array) . "\n";

// agregar un elemento al final del array
array_push($array, 6);
$array[] = 7;
print_r($array) . "\n";

// agrergar un elemento al inico del array
array_unshift($array, 0);
print_r($array) . "\n";

// eliminar el ultimo element del array
array_pop($array);
print_r($array) . "\n";

// eliminar el primer elemento del array
array_shift($array);
print_r($array) . "\n";
// recorrer un array
foreach ($array as $valor) {
  echo $valor . "\n";
}

// array multidimensional
$arrayMulti = [
  "nombre" => "Luis",
  "apellido" => "Hernández",
  "hobbies" => ["leer", "jugar" => ["Brawlstars", "otros" => ["COD"]]]
];

print_r($arrayMulti) . "\n";

// clases y objetos
class Persona
{
  // propiedades o atributos
  private $nombre;
  private $edad;

  // constructor
  function __construct($nombreParam, $edadParam)
  {
    $this->nombre = $nombreParam;
    $this->edad = $edadParam;
  }

  // metodos o funciones

  /**
   * Set the value of nombre
   *
   * @param string $nombre
   * @return  self
   */
  public function setNombre($nombre)
  {
    $this->nombre = $nombre;

    return $this;
  }

  /**
   * Set the value of edad
   *
   * @param int $edad
   * @return  self
   */
  public function setEdad($edad)
  {
    $this->edad = $edad;

    return $this;
  }

  /**
   * Get the value of nombre
   */
  public function getNombre()
  {
    return $this->nombre;
  }

  /**
   * Get the value of edad
   */
  public function getEdad()
  {
    return $this->edad;
  }
}

// crear un objeto
$persona1 = new Persona("Luis", 28);

// acceder a los metodos del objeto
echo $persona1->getNombre() . "\n";
// print_r($persona1)."\n";


//LIFO stack
// Last in, First out
class Stack
{
  private $data; //array vacio

  // constructor con parametros opcionales
  function __construct($dataParams = [])
  {
    $this->data = $dataParams;
  }

  // para agregar un elemento
  function add($element)
  {
    array_push($this->data, $element);
    $this->data[] = $element;
  }

  //eliminar un elemento
  function remove()
  {
    return array_pop($this->data);
  }
}

$stackcito = new Stack();

//FIFO Queue
//first in, first out
class Queue
{
  private $data;

  function __construct($dataParams = [])
  {
    $this->data = $dataParams;
  }

  //agregar un elemento
  function add($elemento)
  {
    array_push($this->data, $elemento);
  }

  // eliminar un elemento
  function remove()
  {
    return array_shift($this->data);
  }
}

class Node
{
  private $value;
  private $next;

  function __construct($valueParam)
  {
    $this->value = $valueParam;
    $this->next = null;
  }

  public function getNext()
  {
    return $this->next;
  }

  public function setNext($next)
  {
    $this->next = $next;
  }

  public function getValue()
  {
    return $this->value;
  }
}

class LinkedList
{
  private $head;

  function __construct()
  {
    $this->head = null;
  }

  function add($value)
  {
    //creamos un nuevo nodo
    $newNode = new Node($value);

    if ($this->head === null) {
      $this->head = $newNode;
    } else {
      $current = $this->head;
      // recorremos la lista mientras el siguiente no sea nulo
      while ($current->getNext() !== null) {
        $current = $current->getNext();
      }
      // cuando encontramos el final, agregamos el nuevo nodo
      $current->setNext($newNode);
    }
  }
}

$list = new LinkedList();
$list->add(3);
$list->add(1);
$list->add(5);
print_r($list);

class Nodo
{
  private $value;
  private $left;
  private $right;

  function __construct($valueParam)
  {
    $this->value = $valueParam;
    $this->left = null;
    $this->right = null;
  }

  function setRight($data)
  {
    $this->right = $data;
  }

  function setLeft($data)
  {
    $this->left = $data;
  }

  function setValue($data)
  {
    $this->value = $data;
  }

  function getRight()
  {
    return $this->right;
  }

  function getLeft()
  {
    return $this->left;
  }

  function getValue()
  {
    return $this->value;
  }
};

class BinaryThree
{
  private $root;

  function __construct($data = null)
  {
    $this->root = $data;
  }

  function insert($data)
  {
    $newNode = new Nodo($data);

    if ($this->root === null) {
      $this->root = $newNode;
      return $this->root;
    }

    $current = $this->root;

    while (true) {

      if ($newNode->getValue() > $current->getValue()) {
        if ($current->getRight() === null) {
          $current->setRight($newNode);
          return $newNode;
        } else {
          $current = $current->getRight();
        }
      } else {
        if ($current->getLeft() === null) {
          $current->setLeft($newNode);
          return $newNode;
        } else {
          $current = $current->getLeft();
        }
      }
    }
  }

  // funcion para encontrar un dato. devolver un mensaje si el dato existe
  function findNodo($data)
  {
    $current = $this->root;


    while ($current !== null) {

      if ($current->getValue() === $data) {
        return "Dato encontrado";
      } elseif ($data < $current->getValue()) {
        $current = $current->getLeft();
      } else {
        $current = $current->getRight();
      }
    }

    return "Dato no encotrado";
  }

  // funcion para eliminar
  function deleteNodo($data)
  {
    $current = $this->root;
    $parent = null;
    $isLeftChild = false;

    // lo mismo de buscar 
    while ($current !== null && $current->getValue() !== $data) {
      $parent = $current;

      if ($data < $current->getValue()) {
        $current = $current->getLeft();
        $isLeftChild = true;
      } else {
        $current = $current->getRight();
        $isLeftChild = false;
      }
    }

    // Si no se encuentra el nodo
    if ($current === null) {
      return "Dato no encontrado";
    }

    // si no tiene hijos o nodos abajo de el
    if ($current->getLeft() === null && $current->getRight() === null) {
      if ($parent === null) {
        $this->root = null; // Era el único nodo
      } elseif ($isLeftChild) {
        $parent->setLeft(null);
      } else {
        $parent->setRight(null);
      }
    }
    // si solo tiene un hijo
    elseif ($current->getLeft() === null) {
      if ($parent === null) {
        $this->root = $current->getRight();
      } elseif ($isLeftChild) {
        $parent->setLeft($current->getRight());
      } else {
        $parent->setRight($current->getRight());
      }
    } elseif ($current->getRight() === null) {
      if ($parent === null) {
        $this->root = $current->getLeft();
      } elseif ($isLeftChild) {
        $parent->setLeft($current->getLeft());
      } else {
        $parent->setRight($current->getLeft());
      }
    }
    // si tene dos hijos
    else {
      // tenemos que indicar cual es qu elo va a sustituir si es menor
      $successor = $current->getRight();
      $successorParent = $current;

      while ($successor->getLeft() !== null) {
        $successorParent = $successor;
        $successor = $successor->getLeft();
      }

      // se toma el valor al current 
      $current->setValue($successor->getValue());

      // y ahora se hace intercambio de valores
      if ($successorParent->getLeft() === $successor) {
        $successorParent->setLeft($successor->getRight());
      } else {
        $successorParent->setRight($successor->getRight());
      }
    }

    return "Dato eliminado";
  }
};


$nuevoNodo = new Nodo(10);

$arbolito = new BinaryThree($nuevoNodo);
$arbolito->insert(17);
$arbolito->insert(19);
$arbolito->insert(13);

print_r($arbolito);

$resultado = $arbolito->findNodo(9);
print_r($resultado);

echo "\n";

print_r($arbolito->deleteNodo(19));
print_r($arbolito);


function quickSort($array)
{
  $length = count($array);

  if ($length <= 1) {
    return $array;
  }

  $pivot = $array[0];
  $left = $right = array();

  for ($i = 1; $i < $length; $i++) {
    if ($array[$i] < $pivot) {
      $left[] = $array[$i];
    } else {
      $right[] = $array[$i];
    }
  }

  return array_merge(quickSort($left), array($pivot), quickSort($right));
}

$unsortedArray = array(7, 2, 1, 6, 5, 3, 4);
$sortedArray = quickSort($unsortedArray);
print_r($sortedArray);



function binarySearch($array, $target) {
    $left = 0;
    $right = count($array) - 1;
    
    while ($left <= $right) {
        $mid = floor(($left + $right) / 2);
        
        // Elemento encontrado
        if ($array[$mid] == $target) {
            return $mid;
        }
        
        // Si el objetivo es mayor, ignorar mitad izquierda
        if ($array[$mid] < $target) {
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

$sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
$target = 9;

$result = binarySearch($sortedArray, $target);

if ($result != -1) {
    echo "Elemento encontrado en la posición: " . $result;
} else {
    echo "Elemento no encontrado en el array";
}

// 

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