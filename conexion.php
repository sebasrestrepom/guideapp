<?php

// estos son los datos para correr online
// $servidor="mysql7001.site4now.net";
// $usuario="a2d056_guid";
// $clave="Guid2017";
// $base="db_a2d056_guid";

// estos son los datos para correr en local
  $servidor="localhost";
  $usuario="root";
  $clave="";
  $base="guideapp";
 mysqli_connect($servidor,$usuario,$clave,$base);

 $conexion = new mysqli($servidor,$usuario,$clave,$base);
?>
