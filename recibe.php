<!DOCTYPE html>
<html>
<head>
	<title>GuideApp</title>
	<link rel="stylesheet"  href="estilos/estilo-recibe.css">

	<link rel="shortcut icon"  href="img/icon.png"/>
	<link href="https://fonts.googleapis.com/css?family=Amatic+SC|Open+Sans|Pacifico" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Fjalla+One|Josefin+Sans|Noto+Serif|PT+Serif" rel="stylesheet">
	<meta charset="utf-8">
</head>
<body >
<?php 
$cintereses = $_REQUEST['ci'];
$hintereses = $_REQUEST['hi'];
$aintereses = $_REQUEST['ai'];
$sintereses = $_REQUEST['si'];
$iintereses = $_REQUEST['ii'];
$dintereses = $_REQUEST['di'];
$eintereses = $_REQUEST['ei'];
$captitudes = $_REQUEST['ca'];
$haptitudes = $_REQUEST['ha'];
$aaptitudes = $_REQUEST['aa'];
$saptitudes = $_REQUEST['sa'];
$iaptitudes = $_REQUEST['ia'];
$daptitudes = $_REQUEST['da'];
$eaptitudes = $_REQUEST['ea'];
$resultadointereses;
$resultadoaptitudes;

if ($cintereses >= $hintereses && $cintereses >= $aintereses && $cintereses >= $sintereses && $cintereses >= $iintereses && $cintereses >= $dintereses && $cintereses >= $eintereses) {
	$resultadointereses="Administrativas y contables";
	
}
else if ($hintereses >= $cintereses && $hintereses >=$aintereses && $hintereses >= $sintereses && $hintereses >= $iintereses && $hintereses >= $dintereses && $hintereses >= $eintereses) {
	$resultadointereses="Humanisticas y Sociales";
	
}
else if ($aintereses >= $cintereses && $aintereses >=$hintereses && $aintereses >= $sintereses && $aintereses >= $iintereses && $aintereses >= $dintereses && $aintereses >= $eintereses) {
	$resultadointereses ="artisticas";
	
}
else if ($sintereses >= $cintereses && $sintereses >=$hintereses && $sintereses >= $aintereses && $sintereses >= $iintereses && $sintereses >= $dintereses && $sintereses >= $eintereses) {
	$resultadointereses ="Ciencias de la salud";
	
}
else if ($iintereses >= $cintereses && $iintereses >=$hintereses && $iintereses >= $aintereses && $iintereses >= $sintereses && $iintereses >= $dintereses && $iintereses >= $eintereses) {
	$resultadointereses ="ingenierias y computacion";
	
}
else if ($dintereses >= $cintereses && $dintereses >=$hintereses && $dintereses >= $aintereses && $dintereses >= $sintereses && $dintereses >= $iintereses && $dintereses >= $eintereses) {
	$resultadointereses="defensa y seguridad";
	
}
else if ($eintereses >= $cintereses && $eintereses >=$hintereses && $eintereses >= $aintereses && $eintereses >= $sintereses && $eintereses >= $iintereses && $eintereses >= $dintereses) {
	$resultadointereses="ciencias exactas y agrarias";
	
}







if ($captitudes >= $haptitudes && $captitudes >= $aaptitudes && $captitudes >= $saptitudes && $captitudes >= $iaptitudes && $captitudes >= $daptitudes && $captitudes >= $eaptitudes) {
	$resultadoaptitudes="Administrativas y contables";
	
}
else if ($haptitudes >= $captitudes&& $haptitudes >=$aaptitudes && $haptitudes >= $saptitudes && $haptitudes >= $iaptitudes && $haptitudes >= $daptitudes && $haptitudes >= $eaptitudes) {
	$resultadoaptitudes="Humanisticas y Sociales";
	
}
else if ($aaptitudes >= $captitudes && $aaptitudes >=$haptitudes && $aaptitudes >= $saptitudes && $aaptitudes >= $iaptitudes && $aaptitudes >= $daptitudes && $aaptitudes >= $eaptitudes) {
	$resultadoaptitudes ="artisticas";
	
}
else if ($saptitudes >= $captitudes && $saptitudes >=$haptitudes && $saptitudes >= $aaptitudes && $saptitudes >= $iaptitudes && $saptitudes >= $daptitudes && $saptitudes >= $eaptitudes) {
	$resultadoaptitudes ="Ciencias de la salud";

}
else if ($iaptitudes >= $captitudes && $iaptitudes >=$haptitudes && $iaptitudes >= $aaptitudes && $iaptitudes >= $saptitudes && $iaptitudes >= $daptitudes && $iaptitudes >= $eaptitudes) {
	$resultadoaptitudes ="ingenierias y computacion";
	
}
else if ($daptitudes >= $captitudes && $daptitudes >=$haptitudes && $daptitudes >= $aaptitudes && $daptitudes >= $saptitudes && $daptitudes >= $iaptitudes && $daptitudes >= $eaptitudes) {
	$resultadoaptitudes="defensa y seguridad";
	
}
else if ($eaptitudes >= $captitudes && $eaptitudes >=$haptitudes && $eaptitudes >= $aaptitudes && $eaptitudes >= $saptitudes && $eaptitudes >= $iaptitudes && $eaptitudes >= $daptitudes) {
	$resultadoaptitudes="ciencias exactas y agrarias";
	
}

 


	





 session_start();
$nombre= $_SESSION['variable'];

$apellido= $_SESSION['variable2'];

$correo= $_SESSION['variable3'];

$colegio= $_SESSION['variable4'];

$grado= $_SESSION['variable5'];

$ciudad= $_SESSION['variable6'];






 include("conexion.php");
//mysql_query("insert into registro(Nombre,Apellido,Correo,Colegio,grado,Ciudad,cintereses,hintereses,aintereses,sintereses,iintereses,dintereses,eintereses,captitudes,haptitudes,aaptitudes,saptitudes,iaptitudes,daptitudes,eaptitudes,intereses,aptitudes) value('$nombre','$apellido','$correo','$colegio','$grado','$ciudad','$cintereses','$hintereses','$aintereses','$sintereses','$iintereses','$dintereses','$eintereses','$captitudes','$haptitudes','$aaptitudes','$saptitudes','$iaptitudes','$daptitudes','$eaptitudes','$resultadointereses','$resultadoaptitudes')")or die(
		//mysql_error());
$sentencia=$conexion->query("INSERT INTO registro(Nombre,Apellido,Correo,Colegio,grado,Ciudad,cintereses,hintereses,aintereses,sintereses,iintereses,dintereses,eintereses,captitudes,haptitudes,aaptitudes,saptitudes,iaptitudes,daptitudes,eaptitudes,intereses,aptitudes) value('$nombre','$apellido','$correo','$colegio','$grado','$ciudad','$cintereses','$hintereses','$aintereses','$sintereses','$iintereses','$dintereses','$eintereses','$captitudes','$haptitudes','$aaptitudes','$saptitudes','$iaptitudes','$daptitudes','$eaptitudes','$resultadointereses','$resultadoaptitudes')")or die(mysqli_error());


?>

<center><h1 style="color: white; font-family: 'Pacifico', cursive; font-size: 70px; margin-top: 200px; text-shadow: 2px 2px 3px rgba(0,0,0,0.3);">Felicitaciones!</h1>
<h1 style="color: white; font-family:  'Amatic SC', cursive; font-size: 100px; margin-top: -90px; border-bottom:2px solid white; width: 700px; text-shadow: 2px 2px 3px rgba(0,0,0,0.3); ">HAS TERMINADO EL TEST</h1>
<h2 style="color: white; margin-top: -60px; font-family: 'Josefin Sans', sans-serif; font-size: 23px;"><?php echo "Intereses:";echo "   "; echo $resultadointereses; echo "   "; echo "   "; echo "Aptitudes:";echo "  "; echo $resultadoaptitudes; ?><!-- Tus resultados estarán listos muy pronto, esperalos! --></h2>

</center>

<img src="img/books.png" style=" margin-top: -300px; margin-left: 150px;">

<img src="img/chemistry.png" style="float: right; margin-top: -120px; margin-right: 150px;">

<img src="img/physics.png" style="float: right; margin-top: -430px; margin-right: 330px;">
<img src="img/blackboard.png" style="float: right; margin-top: -380px; margin-right: 30px;">
<img src="img/pencil.png" style="float: left; margin-top: -380px; margin-left: 300px;">
<img src="img/logo.png" style="float: right;  margin-right: 380px;width: 150px;margin-top: 80px;">

<img src="img/nube.png" id="nube1" style="float: right; margin-top: -420px; margin-right: 30px; width: 100px; height: 50px;">
<img src="img/nube.png"  id="nube2" style="float: right; margin-top: -400px; margin-right: -270px; width: 100px; height: 50px;">
<img src="img/nube.png" id="nube3" style="float: right; margin-top: -240px; margin-right: 300px; width: 100px; height: 50px;">
<img src="img/nube.png" id="nube4" style="float: right; margin-top: -300px; margin-right: 450px; width: 80px; height: 40px;">


<img src="img/nube.png" id="nube5" style="float: right; margin-top: -240px; margin-right: -520px; width: 100px; height: 50px;">
<img src="img/nube.png" id="nube6" style="float: right; margin-top: -300px; margin-right: -650px; width: 80px; height: 40px;">

<img src="img/nube.png" id="nube7" style="float: right; margin-top: -10px; margin-right: -350px; width: 60px; height: 30px;">
<img src="img/nube.png" id="nube8" style="float: right; margin-top: -10px; margin-right: 140px; width: 60px; height: 30px;">






















</body>
</html>