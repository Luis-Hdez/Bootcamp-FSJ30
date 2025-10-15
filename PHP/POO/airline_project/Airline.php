<?php
class Airline{
    private $name;
    private $cantidad_aviones;
    private $tipo_aerolinea;
    private $id;

    function __construct($idParam, $nameParam, $cantidad_avionesParam,$tipo_aerolineaParam)
    {
        $this->id = $idParam;
        $this->name = $nameParam;
        $this->cantidad_aviones = $cantidad_avionesParam;
        $this->tipo_aerolinea = $tipo_aerolineaParam;
    }

    /**
     * Get the value of name
     */ 
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @param string $name
     */ 
    public function setName($name)
    {
        $this->name = $name;

    }

    /**
     * Get the value of cantidad_aviones
     */ 
    public function getCantidad_aviones()
    {
        return $this->cantidad_aviones;
    }

    /**
     * Set the value of cantidad_aviones
     *
     * @param number $cantidad_aviones
     */ 
    public function setCantidad_aviones($cantidad_aviones)
    {
        $this->cantidad_aviones = $cantidad_aviones;

    }

    /**
     * Get the value of tipo_aerolinea
     */ 
    public function getTipo_aerolinea()
    {
        return $this->tipo_aerolinea;
    }

    /**
     * Set the value of tipo_aerolinea
     *
     * @param string $tipo_aerolinea
     */ 
    public function setTipo_aerolinea($tipo_aerolinea)
    {
        $this->tipo_aerolinea = $tipo_aerolinea;

    }


    function getAirline(){
        return $this;
    }
    

    /**
     * Get the value of id
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @param int $tipo_aerolinea
     */ 
    public function setId($id)
    {
        $this->id = $id;
    }
}