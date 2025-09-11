<?php
  // array 
  // array indexado
  $array = [1, 2, 3, 4, 5];
  $array2 = array(1, 2, 3, 4, 5);
  $array3 = new ArrayObject();

  // array asociativo
  $arrayAociativo = [
    "nombre" => "Luis",
    "apellido" => "Hernández",
    "edad" => 28
  ];

  print_r($arrayAociativo["nombre"])."\n";

  // array propiedades y metodos
  // saber el largo del array
  echo count($array)."\n";

  // agregar un elemento al final del array
  array_push($array, 6);
  $array[] = 7;
  print_r($array)."\n";

  // agrergar un elemento al inico del array
  array_unshift($array, 0);
  print_r($array)."\n";

  // eliminar el ultimo element del array
  array_pop($array);
  print_r($array)."\n";

  // eliminar el primer elemento del array
  array_shift($array);
  print_r($array)."\n";
  // recorrer un array
  foreach ($array as $valor) {
    echo $valor."\n";
  }

  // array multidimensional
  $arrayMulti = [
    "nombre" => "Luis",
    "apellido" => "Hernández",
    "hobbies" => ["leer", "jugar" => ["Brawlstars", "otros" => ["COD"]]]
  ];

  print_r($arrayMulti)."\n";

  // clases y objetos
  class Persona {
    // propiedades o atributos
    private $nombre;
    private $edad;

    // constructor
    function __construct($nombreParam, $edadParam) {
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
  echo $persona1->getNombre()."\n";
  // print_r($persona1)."\n";
?>