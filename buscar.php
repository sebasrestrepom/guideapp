
<!DOCTYPE html>
<html>
<head>
	<title>GuideApp</title>
	 <link rel="stylesheet"  href="estilos/estilos_registro.css">
</head>
<body>
<form action="resultado.php" method="get" name="insertar">
	<h2 class="form_titulo" style="font-family: sans-serif;
  background-color: black;
  color: white;

  text-align: center;
  font-weight: 100px;
  font-size:  30px;
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
  border-bottom: 3px solid #FFC107;
  margin-top: -1px;"><img style="width: 150px;margin-top: 5px; height: 80px;" src="logo.png"></h2>
	<div class="contenedor-inputs">
	<input required="" type="text" name="nom" placeholder="Nombre" class="input-48" style="border:1px solid darkgray"> 
 	<input required="" type="text" name="ape" placeholder="Apellido" class="input-48" style="border:1px solid darkgray"> 
 	<input required="" type="text" name="grad" placeholder="grado" class="input-48" style="border:1px solid darkgray">
 	<input type="submit" value="Buscar" class="btn-enviar">
 </div>
</form>
</body>
</html>