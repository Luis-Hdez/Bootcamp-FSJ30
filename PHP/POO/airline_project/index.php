<?php
require_once './Airline.php';
//print_r($_POST);

session_start(); // inicializamos el metodo de session para inicializarla y poder guardar datos en ella. y usar la variable $_SESSION
//print_r($_SESSION);

// llamamos la clase aerlinea para crear un objeto
// include -> incluir el archivo que nosotros necesitemos y s no existe va a mostrar un error y ocntinuar la ejecucion del codigo
// require -> requerir el archivo y si no existe, va a mostrar y detener la ejecucuon del codigo

// include_once -> incluye el archivo una sola vez, si se vuelve a llamar dentro de este archvio  va a usar la misma referencia
// require_once -> requerir el archivo una sola vez, si se vuelve a llamar dentro de este archivo va a usar la misma referenca


// $_SESSION -> varible reservada para almacenar datos (array assoc)

// variable reservada para captura de datos por url
//print_r($_GET);

// persistencia de datos 
//$_SESSION['aerolineas'] = [];

if (!isset($_SESSION['aerolineas'])) {
    $_SESSION['aerolineas'] = [];
}

$aerolineas = $_SESSION['aerolineas'];

// create form
if (isset($_POST['createForm'])) {

    if (isset($_POST['name'], $_POST['cantidad_aviones'], $_POST['tipo_aerolinea'])) {
        $id = rand(1, 1000);
        $name = $_POST['name'];
        $cantidad_aviones = $_POST['cantidad_aviones'];
        $tipo_aerolinea = $_POST['tipo_aerolinea'];

        $aerolinea = new Airline($id, $name, $cantidad_aviones, $tipo_aerolinea);
        array_push($aerolineas, $aerolinea);
        //$aerolineas[] = $aerolinea;

        // Guardar el objeto en la sesion
        $_SESSION['aerolineas'] = $aerolineas;
    }
}


// buscar una aerolinea por su id y editarla
function getAerolineaById($aerolinea_array, $id)
{
    foreach ($aerolinea_array as $aerolinea) {
        if ($aerolinea->getId() == $id) {
            return $aerolinea;
        }
    }
}

// edit form
if (isset($_POST['updateForm'])) {
    foreach ($aerolineas as $aerolinea) {
        if ($aerolinea->getId() == $_GET['editar']) {
            $aerolinea->setName($_POST['name']);
            $aerolinea->setCantidad_aviones($_POST['cantidad_aviones']);
            $aerolinea->setTipo_aerolinea($_POST['tipo_aerolinea']);
        }
    }

    header("Location: /PHP/POO/airline_project/index.php");
    exit;
}

// delete
if (isset($_GET['eliminar'])) {
    print_r($_GET['eliminar']);

    foreach($aerolineas as $idx => $aerolinea){
        if ($aerolinea->getId() == $_GET['eliminar']) {
            unset($aerolineas[$idx]);
            break;
        }
    }

    $_SESSION['aerolineas'] = $aerolineas;
    header("Location: /PHP/POO/airline_project/index.php");
    exit;
}

// Mostrar aerolineas guardadas
// if (!empty($_SESSION['aerolineas'])) {
//     echo "<h1>Aerolineas hasta ahora</h1>";
//     print_r($_SESSION['aerolineas']);
// } else {
//     echo "<h1>No hay aerolineas guardadas</h1>";
// }

?>
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD Airline Project</title>
    <link rel="stylesheet" href="./styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>

<body class="container">
    <h1>Bienvenidos a Aerolineas Don Chepe</h1>
    <?php
    if (isset($_GET['editar'])) {
        $aerolineaToEdit = getAerolineaById($aerolineas, $_GET['editar']);
        //print_r($aerolineaToEdit);
        //echo "<h2>Editar Aerolinea ID: {$_GET['editar']}</h2>";
    ?>
        <h3>Editar Aerolinea</h3>
        <form class="container" action="" method="POST">
            <input type="hidden" name="updateForm" value="updateForm">
            <div class="mb-3">
                <label for="name" class="form-label">Nombre de la Aerolinea:</label>
                <input type="text" class="form-control" id="name" name="name" required value="<?php echo $aerolineaToEdit->getName(); ?>">
            </div>
            <div class="mb-3">
                <label for="cantidad_aviones" class="form-label">Cantidad Aviones: </label>
                <input type="number" class="form-control" name="cantidad_aviones" required value="<?php echo $aerolineaToEdit->getCantidad_aviones(); ?>">
            </div>
            <div class="mb-3">
                <label for="tipo_aerolinea" class="form-label">Tipo de Aerolinea:</label>
                <select class="form-select" name="tipo_aerolinea" required>
                    <?php
                    $opciones = ["Privado", "Comercial", "Carga", "Nacional"];
                    $valorActual = $aerolineaToEdit->getTipo_aerolinea();

                    foreach ($opciones as $opcion) {
                        $selected = ($opcion == $valorActual) ? 'selected' : '';
                        echo "<option value='$opcion' $selected>$opcion</option>";
                    }
                    ?>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Editar</button>
        </form>

    <?php
    } else {
    ?>
        <h3>Crear Aerolinea</h3>
        <form class="container" action="" method="POST">
            <input type="hidden" name="createForm" value="createteForm">
            <div class="mb-3">
                <label for="name" class="form-label">Nombre de la Aerolinea:</label>
                <input type="text" class="form-control" id="name" name="name" required>
            </div>
            <div class="mb-3">
                <label for="cantidad_aviones" class="form-label">Cantidad Aviones: </label>
                <input type="number" class="form-control" name="cantidad_aviones" required>
            </div>
            <div class="mb-3">
                <label for="tipo_aerolinea" class="form-label">Tipo de Aerolinea:</label>
                <select class="form-select" name="tipo_aerolinea" required>
                    <option value="" disabled selected>Elige una opción</option>
                    <option value="Privado">Privado</option>
                    <option value="Comercial">Comercial</option>
                    <option value="Carga">Carga</option>
                    <option value="Nacional">Nacional</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Crear</button>
        </form>
    <?php
    }
    ?>
    <main class="container">
        <table class="table table-striped bg-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre Aerolinea</th>
                    <th>Cantidad de aviones</th>
                    <th>Tipo de Aerolinea</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <?php
                foreach ($aerolineas as $aerolinea) {
                    echo "<tr>
                            <td>{$aerolinea->getId()}</td>
                            <td>{$aerolinea->getName()}</td>
                            <td>{$aerolinea->getCantidad_aviones()}</td>
                            <td>{$aerolinea->getTipo_aerolinea()}</td>                           
                            <td>
                            <a href='?eliminar={$aerolinea->getId()}' class='btn btn-danger'>ELIMINAR</a>
                            <a href='?editar={$aerolinea->getId()}' class='btn btn-warning'>EDITAR</a>
                            </td>                            
                        </tr>";
                };
                ?>
            </tbody>
            <form action=""></form>
        </table>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
</body>

</html>