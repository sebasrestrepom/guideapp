<?php
include("conexion.php");
$query= "SELECT * FROM registro";
$resultado= mysql_query($query);

while ($fila = mysql_fetch_array($resultado)) {
	$nombre =  "$fila[nombre]";
	 $apellido = "$fila[apellido]";
	 $grado = "$fila[grado]";
	 $colegio = "$fila[colegio]";

	 $cintereses = "$fila[cintereses]";

	 $hintereses = "$fila[hintereses]";
	 $aintereses = "$fila[aintereses]";
	 $sintereses = "$fila[sintereses]";
	 $iintereses = "$fila[iintereses]";
	 $dintereses = "$fila[dintereses]";
	 $eintereses = "$fila[eintereses]";
	 $_POST['cintereses2']= $cintereses;
	 $_POST['hintereses2']= $hintereses;
	 $_POST['aintereses2']= $aintereses;
	 $_POST['sintereses2']= $sintereses;
	 $_POST['iintereses2']= $iintereses;
	 $_POST['dintereses2']= $dintereses;
	 $_POST['eintereses2']= $eintereses;


	 $captitudes = "$fila[captitudes]";
	 $haptitudes = "$fila[haptitudes]";
	 $aaptitudes = "$fila[aaptitudes]";
	 $saptitudes = "$fila[saptitudes]";
	 $iaptitudes = "$fila[iaptitudes]";
	 $daptitudes = "$fila[daptitudes]";
	 $eaptitudes = "$fila[eaptitudes]";
	 $_POST['captitudes2']= $captitudes;
	 $_POST['haptitudes2']= $haptitudes;
	 $_POST['aaptitudes2']= $aaptitudes;
	 $_POST['saptitudes2']= $saptitudes;
	 $_POST['iaptitudes2']= $iaptitudes;
	 $_POST['daptitudes2']= $daptitudes;
	 $_POST['eaptitudes2']= $eaptitudes;


	echo "<script> \n";
	echo "script_cintereses= '".$_POST['cintereses2']."'\n";
	echo "script_hintereses= '".$_POST['hintereses2']."'\n";
	echo "script_aintereses= '".$_POST['aintereses2']."'\n";
	echo "script_sintereses= '".$_POST['sintereses2']."'\n";
	echo "script_iintereses= '".$_POST['iintereses2']."'\n";
	echo "script_dintereses= '".$_POST['dintereses2']."'\n";
	echo "script_eintereses= '".$_POST['eintereses2']."'\n";

	echo "script_captitudes= '".$_POST['captitudes2']."'\n";
	echo "script_haptitudes= '".$_POST['haptitudes2']."'\n";
	echo "script_aaptitudes= '".$_POST['aaptitudes2']."'\n";
	echo "script_saptitudes= '".$_POST['saptitudes2']."'\n";
	echo "script_iaptitudes= '".$_POST['iaptitudes2']."'\n";
	echo "script_daptitudes= '".$_POST['daptitudes2']."'\n";
	echo "script_eaptitudes= '".$_POST['eaptitudes2']."'\n";
	echo "</script> \n";
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>GuideApp</title>
	<link rel="shortcut icon"  href="icon.png" />
</head>
<body>

	<?php
   include("conexion.php");



if ($_GET) {

	$nombre=$_GET[ 'nom'];
	$apellido=$_GET[ 'ape'];
	$grado=$_GET[ 'grad'];

	

	$resultados = mysqli_query($conexion,"SELECT * FROM registro WHERE nombre = '$nombre' AND apellido = '$apellido' AND grado = '$grado'"); 
	
		
	while ($fila = mysqli_fetch_array($resultados)) {
	$barra_nombre =  "$fila[nombre]";
	echo "  ";
	$barra_apellido = "$fila[apellido]";
	echo "  ";
	$barra_correo  = "$fila[correo]";
	echo "  ";
	$barra_colegio =  "$fila[colegio]";
	echo "  ";
	$barra_grado =  "$fila[grado]";
	echo "  ";
	$barra_cintereses = "$fila[cintereses]";
	echo "  ";	
	$barra_hintereses = "$fila[hintereses]";
	echo "  ";	
	$barra_aintereses = "$fila[aintereses]";
	echo "  ";	
	$barra_sintereses = "$fila[sintereses]";
	echo "  ";	
	$barra_iintereses = "$fila[iintereses]";
	echo "  ";	
	$barra_dintereses = "$fila[dintereses]";
	echo "  ";	
	$barra_eintereses = "$fila[eintereses]";
	echo "  ";	


	$barra_captitudes = "$fila[captitudes]";
	echo "  ";		
	$barra_haptitudes = "$fila[haptitudes]";
	echo "  ";		
	$barra_aaptitudes = "$fila[aaptitudes]";
	echo "  ";		
	$barra_saptitudes = "$fila[saptitudes]";
	echo "  ";		
	$barra_iaptitudes = "$fila[iaptitudes]";
	echo "  ";		
	$barra_daptitudes = "$fila[daptitudes]";
	echo "  ";		
	$barra_eaptitudes = "$fila[eaptitudes]";
	echo "  ";	
	echo "$fila[intereses]";
	echo "  ";	
	echo "$fila[aptitudes]";


	echo "<br>";


}


 }
?>
	<center><div style="background: transparent; border:1px solid black; width: 812px; height: 992px;">
	
<label style="margin-right: 10px; font-size: 20px; font-family: sans-serif;">Nombre: <?php echo $nombre; ?></label>
<label style="margin-right: 10px; font-size: 20px; font-family: sans-serif;">Apellido: <?php echo $apellido ?></label>
<label style="margin-right: 10px; font-size: 20px; font-family: sans-serif;">Grado: <?php echo $grado ?></label>
<label style="margin-right: 10px; font-size: 20px; font-family: sans-serif;">Colegio: <?php echo $colegio ?></label></center>





<center><img style="width: 812px;" src="img/cenefa-arriba.png"></center>
<div style="background: #F7F9FB; width: 400px; margin-left: 335px; float: left; ">

<label style="font-weight: 600; color: #585A5C; font-family: sans-serif;">ADMINISTRATIVAS Y CONTABLES<div style="width: 300px; height: 16px; background: #C4DBF4;"><div id="progres" style="background: #0288D1; width: 0px; height: 16px;"><center><?php echo $barra_cintereses; ?></center></div></div></label></br>

<label style="font-weight: 600; color: #585A5C; font-family: sans-serif;">HUMANISTICAS Y SOCIALES <div style="width: 300px; height: 16px; background: #C4DBF4;"><div id="barras2" style="background: #0288D1; width: 0px; height: 16px;"><center><?php echo $barra_hintereses; ?></center></div></div></label></br>

<label style="font-weight: 600; color: #585A5C; font-family: sans-serif;">ARTISTICAS<div style="width: 300px; height: 16px; background: #C4DBF4;"> <div id="barras3" style="background: #0288D1; width: 0px; height: 16px;"><center><?php echo $barra_aintereses; ?></center></div></div></label></br>

<label style="font-weight: 600; color: #585A5C; font-family: sans-serif;">CIENCIAS DE LA SALUD <div style="width: 300px; height: 16px; background: #C4DBF4;"><div id="barras4" style="background: #0288D1; width: 0px; height: 16px;"><center><?php echo $barra_sintereses; ?></center></div></div></label></br>

<label style="font-weight: 600; color: #585A5C; font-family: sans-serif;">INGENIERIA Y COMPUTACION <div style="width: 300px; height: 16px; background: #C4DBF4;"><div id="barras5" style="background: #0288D1; width: 0px; height: 16px;"> <center><?php echo $barra_iintereses; ?></center></div></div></label></label></br>

<label style="font-weight: 600; color: #585A5C; font-family: sans-serif;">DEFENSA Y SEGURIDAD <div style="width: 300px; height: 16px; background: #C4DBF4;"><div id="barras6" style="background: #0288D1; width: 0px; height: 16px;"><center><?php echo $barra_dintereses; ?></center></div></div></label></br>

<label style="font-weight: 600; color: #585A5C; font-family: sans-serif;">CIENCIAS EXACTAS Y AGRARIAS<div style="width: 300px; height: 16px; background: #C4DBF4;"><div id="barras7" style="background: #0288D1; width: 0px; height: 16px;"><center><?php echo $barra_eintereses; ?></center></div></div></label></br>
</div>

<div style="background:#F7F9FB; width: 400px;float: right; margin-right: 335px;">
<label>ADMINISTRATIVAS Y CONTABLES: <?php echo $captitudes; ?><div id="barras8" style="background: #0288D1; width: 0px; height: 14px;"></div></label></br>
<label>HUMANISTICAS Y SOCIALES: <?php echo $haptitudes; ?><div id="barras9" style="background: #0288D1; width: 0px; height: 14px;"></div></label></br>
<label>ARTISTICAS: <?php echo $aaptitudes; ?><div id="barras10" style="background: #0288D1; width: 0px; height: 14px;"></div></label></br>
<label>CIENCIAS DE LA SALUD: <?php echo $saptitudes; ?><div id="barras11" style="background: #0288D1; width: 0px; height: 14px;"></div></label></br>
<label>INGENIERIAS Y COMPUTACION: <?php echo $iaptitudes; ?><div id="barras12" style="background: #0288D1; width: 0px; height: 14px;"></div></label></br>
<label>DEFENSA Y SEGURIDAD: <?php echo $daptitudes; ?><div id="barras13" style="background: #0288D1; width: 0px; height: 14px;"></div></label></br>
<label>CIENCIAS EXACTAS Y AGRARIAS: <?php echo $eaptitudes; ?><div id="barras14" style="background: #0288D1; width: 0px; height: 14px;"></div></label></br>
</div>
</div>
<center><img style="width: 812px;" src="img/imagen7.png"></center>
<script type="text/javascript">
	
	

	if (script_cintereses  == 1 ) {
		
	document.getElementById("progres").style.width = "42px";
	}else if (script_cintereses  == 2 ) {
		
	document.getElementById("progres").style.width = "85px";

	}else if (script_cintereses  == 3 ) {
		
	document.getElementById("progres").style.width = "127px";
	}
	else if (script_cintereses  == 4 ) {
		
	document.getElementById("progres").style.width = "169px";
	}
	else if (script_cintereses  == 5 ) {
		
	document.getElementById("progres").style.width = "211px";
	}
	else if (script_cintereses  == 6 ) {
		
	document.getElementById("progres").style.width = "253px";
	}
	else if (script_cintereses  == 7 ) {
		
	document.getElementById("progres").style.width = "300px";
	}
	else {
		document.getElementById("progres").style.width = "0px";
	}


	if (script_hintereses  == 1 ) {
		
	document.getElementById("barras2").style.width = "42px";
	}else if (script_hintereses  == 2 ) {
		
	document.getElementById("barras2").style.width = "85px";

	}else if (script_hintereses  == 3 ) {
		
	document.getElementById("barras2").style.width = "127px";
	}
	else if (script_hintereses  == 4 ) {
		
	document.getElementById("barras2").style.width = "169px";
	}
	else if (script_hintereses  == 5 ) {
		
	document.getElementById("barras2").style.width = "211px";
	}
	else if (script_hintereses  == 6 ) {
		
	document.getElementById("barras2").style.width = "253px";
	}
	else if (script_hintereses  == 7 ) {
		
	document.getElementById("barras2").style.width = "300px";
	}
	else {
		document.getElementById("barras2").style.width = "0px";
	}


	if (script_aintereses  == 1 ) {
		
	document.getElementById("barras3").style.width = "42px";
	}else if (script_aintereses  == 2 ) {
		
	document.getElementById("barras3").style.width = "85px";

	}else if (script_aintereses  == 3 ) {
		
	document.getElementById("barras3").style.width = "127px";
	}
	else if (script_aintereses  == 4 ) {
		
	document.getElementById("barras3").style.width = "169px";
	}
	else if (script_aintereses  == 5 ) {
		
	document.getElementById("barras3").style.width = "211px";
	}
	else if (script_aintereses  == 6 ) {
		
	document.getElementById("barras3").style.width = "253px";
	}
	else if (script_aintereses  == 7 ) {
		
	document.getElementById("barras3").style.width = "300px";
	}
	else {
		document.getElementById("barras3").style.width = "0px";
	}


	if (script_sintereses  == 1 ) {
		
	document.getElementById("barras4").style.width = "42px";
	}else if (script_sintereses  == 2 ) {
		
	document.getElementById("barras4").style.width = "85px";

	}else if (script_sintereses  == 3 ) {
		
	document.getElementById("barras4").style.width = "127px";
	}
	else if (script_sintereses  == 4 ) {
		
	document.getElementById("barras4").style.width = "169px";
	}
	else if (script_sintereses  == 5 ) {
		
	document.getElementById("barras4").style.width = "211px";
	}
	else if (script_sintereses  == 6 ) {
		
	document.getElementById("barras4").style.width = "253px";
	}
	else if (script_sintereses  == 7 ) {
		
	document.getElementById("barras4").style.width = "300px";
	}
	else {
		document.getElementById("barras4").style.width = "0px";
	}

	if (script_iintereses  == 1 ) {
		
	document.getElementById("barras5").style.width = "42px";
	}else if (script_iintereses  == 2 ) {
		
	document.getElementById("barras5").style.width = "85px";

	}else if (script_iintereses  == 3 ) {
		
	document.getElementById("barras5").style.width = "127px";
	}
	else if (script_iintereses  == 4 ) {
		
	document.getElementById("barras5").style.width = "169px";
	}
	else if (script_iintereses  == 5 ) {
		
	document.getElementById("barras5").style.width = "211px";
	}
	else if (script_iintereses  == 6 ) {
		
	document.getElementById("barras5").style.width = "253px";
	}
	else if (script_iintereses  == 7 ) {
		
	document.getElementById("barras5").style.width = "300px";
	}
	else {
		document.getElementById("barras5").style.width = "0px";
	}

	if (script_dintereses  == 1 ) {
		
	document.getElementById("barras6").style.width = "42px";
	}else if (script_dintereses  == 2 ) {
		
	document.getElementById("barras6").style.width = "85px";

	}else if (script_dintereses  == 3 ) {
		
	document.getElementById("barras6").style.width = "127px";
	}
	else if (script_dintereses  == 4 ) {
		
	document.getElementById("barras6").style.width = "169px";
	}
	else if (script_dintereses  == 5 ) {
		
	document.getElementById("barras6").style.width = "211px";
	}
	else if (script_dintereses  == 6 ) {
		
	document.getElementById("barras6").style.width = "253px";
	}
	else if (script_dintereses  == 7 ) {
		
	document.getElementById("barras6").style.width = "300px";
	}
	else {
		document.getElementById("barras6").style.width = "0px";
	}

	if (script_eintereses  == 1 ) {
		
	document.getElementById("barras7").style.width = "42px";
	}else if (script_eintereses  == 2 ) {
		
	document.getElementById("barras7").style.width = "85px";

	}else if (script_eintereses  == 3 ) {
		
	document.getElementById("barras7").style.width = "127px";
	}
	else if (script_eintereses  == 4 ) {
		
	document.getElementById("barras7").style.width = "169px";
	}
	else if (script_eintereses  == 5 ) {
		
	document.getElementById("barras7").style.width = "211px";
	}
	else if (script_eintereses  == 6 ) {
		
	document.getElementById("barras7").style.width = "253px";
	}
	else if (script_eintereses  == 7 ) {
		
	document.getElementById("barras7").style.width = "300px";
	}
	else {
		document.getElementById("barras7").style.width = "0px";
	}















if (script_captitudes  == 1 ) {
		
	document.getElementById("barras8").style.width = "42px";
	}else if (script_captitudes  == 2 ) {
		
	document.getElementById("barras8").style.width = "85px";

	}else if (script_captitudes  == 3 ) {
		
	document.getElementById("barras8").style.width = "127px";
	}
	else if (script_captitudes  == 4 ) {
		
	document.getElementById("barras8").style.width = "169px";
	}
	else if (script_captitudes  == 5 ) {
		
	document.getElementById("barras8").style.width = "211px";
	}
	else if (script_captitudes  == 6 ) {
		
	document.getElementById("barras8").style.width = "253px";
	}
	else if (script_captitudes  == 7 ) {
		
	document.getElementById("barras8").style.width = "300px";
	}
	else {
		document.getElementById("barras8").style.width = "0px";
	}


	if (script_haptitudes  == 1 ) {
		
	document.getElementById("barras9").style.width = "42px";
	}else if (script_haptitudes  == 2 ) {
		
	document.getElementById("barras9").style.width = "85px";

	}else if (script_haptitudes  == 3 ) {
		
	document.getElementById("barras9").style.width = "127px";
	}
	else if (script_haptitudes  == 4 ) {
		
	document.getElementById("barras9").style.width = "169px";
	}
	else if (script_haptitudes  == 5 ) {
		
	document.getElementById("barras9").style.width = "211px";
	}
	else if (script_haptitudes  == 6 ) {
		
	document.getElementById("barras9").style.width = "253px";
	}
	else if (script_haptitudes  == 7 ) {
		
	document.getElementById("barras9").style.width = "300px";
	}
	else {
		document.getElementById("barras9").style.width = "0px";
	}


	if (script_aaptitudes  == 1 ) {
		
	document.getElementById("barras10").style.width = "42px";
	}else if (script_aaptitudes  == 2 ) {
		
	document.getElementById("barras10").style.width = "85px";

	}else if (script_aaptitudes  == 3 ) {
		
	document.getElementById("barras10").style.width = "127px";
	}
	else if (script_aaptitudes  == 4 ) {
		
	document.getElementById("barras10").style.width = "169px";
	}
	else if (script_aaptitudes  == 5 ) {
		
	document.getElementById("barras10").style.width = "211px";
	}
	else if (script_aaptitudes  == 6 ) {
		
	document.getElementById("barras10").style.width = "253px";
	}
	else if (script_aaptitudes  == 7 ) {
		
	document.getElementById("barras10").style.width = "300px";
	}
	else {
		document.getElementById("barras10").style.width = "0px";
	}


	if (script_saptitudes  == 1 ) {
		
	document.getElementById("barras11").style.width = "42px";
	}else if (script_saptitudes  == 2 ) {
		
	document.getElementById("barras11").style.width = "85px";

	}else if (script_saptitudes  == 3 ) {
		
	document.getElementById("barras11").style.width = "127px";
	}
	else if (script_saptitudes  == 4 ) {
		
	document.getElementById("barras11").style.width = "169px";
	}
	else if (script_saptitudes  == 5 ) {
		
	document.getElementById("barras11").style.width = "211px";
	}
	else if (script_saptitudes  == 6 ) {
		
	document.getElementById("barras11").style.width = "253px";
	}
	else if (script_saptitudes  == 7 ) {
		
	document.getElementById("barras11").style.width = "300px";
	}
	else {
		document.getElementById("barras11").style.width = "0px";
	}

	if (script_iaptitudes  == 1 ) {
		
	document.getElementById("barras12").style.width = "42px";
	}else if (script_iaptitudes  == 2 ) {
		
	document.getElementById("barras12").style.width = "85px";

	}else if (script_iaptitudes  == 3 ) {
		
	document.getElementById("barras12").style.width = "127px";
	}
	else if (script_iaptitudes  == 4 ) {
		
	document.getElementById("barras12").style.width = "169px";
	}
	else if (script_iaptitudes  == 5 ) {
		
	document.getElementById("barras12").style.width = "211px";
	}
	else if (script_iaptitudes  == 6 ) {
		
	document.getElementById("barras12").style.width = "253px";
	}
	else if (script_iaptitudes  == 7 ) {
		
	document.getElementById("barras12").style.width = "300px";
	}
	else {
		document.getElementById("barras12aptitudes").style.width = "0px";
	}

	if (script_daptitudes  == 1 ) {
		
	document.getElementById("barras13").style.width = "42px";
	}else if (script_daptitudes  == 2 ) {
		
	document.getElementById("barras13").style.width = "85px";

	}else if (script_daptitudes  == 3 ) {
		
	document.getElementById("barras13").style.width = "127px";
	}
	else if (script_daptitudes  == 4 ) {
		
	document.getElementById("barras13").style.width = "169px";
	}
	else if (script_daptitudes  == 5 ) {
		
	document.getElementById("barras13").style.width = "211px";
	}
	else if (script_daptitudes  == 6 ) {
		
	document.getElementById("barras13").style.width = "253px";
	}
	else if (script_daptitudes  == 7 ) {
		
	document.getElementById("barras13").style.width = "300px";
	}
	else {
		document.getElementById("barras13").style.width = "0px";
	}

	if (script_eaptitudes  == 1 ) {
		
	document.getElementById("barras14").style.width = "42px";
	}else if (script_eaptitudes  == 2 ) {
		
	document.getElementById("barras14").style.width = "85px";

	}else if (script_eaptitudes  == 3 ) {
		
	document.getElementById("barras14").style.width = "127px";
	}
	else if (script_eaptitudes  == 4 ) {
		
	document.getElementById("barras14").style.width = "169px";
	}
	else if (script_eaptitudes  == 5 ) {
		
	document.getElementById("barras14").style.width = "211px";
	}
	else if (script_eaptitudes  == 6 ) {
		
	document.getElementById("barras14").style.width = "253px";
	}
	else if (script_eaptitudes  == 7 ) {
		
	document.getElementById("barras14").style.width = "300px";
	}
	else {
		document.getElementById("barras14").style.width = "0px";
	}




</script>
</body>
</html>