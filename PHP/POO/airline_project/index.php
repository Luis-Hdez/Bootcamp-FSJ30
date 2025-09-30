<?php
print_r($_POST);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD Airline Project</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>

<body>
    <h1>Bienvenidos a Aerolineas Don Chepe</h1>
    <form class="container" action="" method="POST">
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

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
</body>

</html>