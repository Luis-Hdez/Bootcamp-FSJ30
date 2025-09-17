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
      while ($current->getNext()!==null) {
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
