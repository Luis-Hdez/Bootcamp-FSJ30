<?php
/*
    Principio de Sustitucion de Liskov
    Podemos reemplar la clase hja con la clase padre sin que esta rompa el funcionamiento
*/

class Persona
{
    function comer() {}

    function dormir() {}

    function respirar() {}

    function hablar() {}

    function caminar() {}
}

class Programador extends Persona {}

class Bebe extends Persona
{
    function hablar() {
        return new Exception("Un bebe no habla.");
    }
}
