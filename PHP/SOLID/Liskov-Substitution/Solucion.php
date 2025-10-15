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
}

interface PersonaHabladora
{

    function hablar();
}

interface PersonaCaminadora
{

    function caminar();
}

class Programador extends Persona  implements PersonaHabladora {
    
}

class Bebe extends Persona {}
