

<?php
   include("conexion.php");




if ($_POST) {

	$n=$_POST[ 'nom'];
	$ap=$_POST[ 'ape'];
	$em=$_POST[ 'corr'];
	$co=$_POST[ 'col'];
	$p=$_POST[ 'grad'];
	$c=$_POST[ 'ciu'];
	
  session_start();
 $_SESSION['variable']=$n;
 $_SESSION['variable2']=$ap;
 $_SESSION['variable3']=$em;
 $_SESSION['variable4']=$co;
 $_SESSION['variable5']=$p;
 $_SESSION['variable6']=$c;
         


//mysqli_query("insert into usuarios(Nombre,Apellido,Correo,Colegio,grado,Ciudad) value('$n','$ap','$em','$co','$p','$c')")or die(mysqli_error());
$sentencia=$conexion->query("INSERT INTO usuarios(Nombre,Apellido,Correo,Colegio,grado,Ciudad) value('$n','$ap','$em','$co','$p','$c')")or die(mysqli_error());






}
?>


<!DOCTYPE html>
<html lang="es">
<head>

<link rel="shortcut icon"  href="img/icon.png" />
<meta charset="utf-8">	
<title>GuideApp</title>
<link rel="stylesheet"  href="estilos/estilos-test.css">
<link href="https://fonts.googleapis.com/css?family=Boogaloo|Fredoka+One|Luckiest+Guy|Open+Sans" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Chewy|Pacifico|Reenie+Beanie|Righteous|Satisfy" rel="stylesheet">
</head>
<body  >
<header style="width: auto; height: 60px; background:black;box-shadow: 0 0  1em black;">
  <img src="img/logo.png" style="width: 110px; height: 60px;margin-left:200px;">
 <h4 style="float: right; font-family:'Josefin Sans', sans-serif;color: white; margin-right: 50px; margin-top: 10px;">E-mail:</br><?php echo "$em"; ?></h2>
 <h4 style="float: right; font-family:'Josefin Sans', sans-serif;color: white; margin-right: 50px; margin-top: 10px;">Ciudad:</br><?php echo "$c"; ?></h2>
  <h4 style="float: right; font-family:'Josefin Sans', sans-serif;color: white; margin-right: 50px; margin-top: 10px;">Colegio:</br><?php echo "$co"; ?></h2>
   <h4 style="float: right; font-family:'Josefin Sans', sans-serif;color: white; margin-right: 50px; margin-top: 10px;">Grado:</br><?php echo "$p"; ?></h2>
   
   <h4 style="float: right; font-family:'Josefin Sans', sans-serif;color: white; margin-right: 50px; margin-top: 10px;">Apellido:</br><?php echo "$ap"; ?></h2>
  <h4 style="float: right; font-family:'Josefin Sans', sans-serif;color: white; margin-right: 50px; margin-top: 10px; ">Nombre:</br><?php echo  "$n"; ?></h2>
  
  
  
 
  
</header>













<div id="fondo">






<div style="width: 200px; height: 115px; background: #2962FF; margin-top: 20px; float: left;margin-left: 7%;border-radius: 4px; border-bottom: 4px solid #F9A825;">
  <h3 style="color: white; font-family: sans-serif;margin-left: 10px;margin-top: 10px;">Recuerda:</h3><p style="color: white; font-family: sans-serif;margin-left: 10px;">La validez del test depende de la seriedad con que respondas las preguntas</p>
</div>

<center>
  <div style="width: 700px; height: 40px; background: #2962FF;;
  left: 27%; margin-top: 20px;position: absolute;">
  <h3 style="color: white; font-family: sans-serif;float: left; margin-left: 20px;margin-top: 8px;">Test Vocacional</h3>
</div>

<div id="pagina1" style="left: 27%; margin-top: 40px;"  >


<div class="progreso" style="background: rgba(0,0,0,0.2); border-radius: 4px; width: 700px; height: 8px; margin-top: 2px;float: left;">
 <div id="progres" style="background: #F9A825; width: 0px;border-radius: 4px; height: 8px; float: left;"></div> 
</div>
<div id="primero" style="background: #EEEEEE;">
  
<p style="font-size: 20px; margin-top: 10px;"> 1 ¿Prepararías un estudio acerca de la globalización de la economía?</p>
<button onclick="si()" id="respuesta1">Si</button>
<button onclick="no1()" id="respuesta2">No</button>
</div>
<div  id="segundo">
 
<p style="font-size: 20px;margin-top: 10px;">2 ¿Te entusiasma la idea de organizar fiestas y eventos?</p>
<button onclick="si2()" id="respuesta1">Si</button>
<button onclick="no2()" id="respuesta2"><span>No</span></button>
</div>
<div  id="tercero">
  
<p style="font-size: 20px;margin-top: 10px;" >3 ¿Te sientes atraído por la posibilidad de realizar trabajos de urbanización?</p>
<button onclick="si3()" id="respuesta1">Si</button>
<button onclick="no3()" id="respuesta2">No</button>
</div>
<div  id="cuarto">
  
<p style="font-size: 20px;margin-top: 10px;" >4 ¿Prevalecen en ti los pensamientos positivos sobre los negativos?</p>
<button onclick="si4()" id="respuesta1">Si</button>
<button onclick="no4()" id="respuesta2">No</button>
</div>
<div  id="quinto">
<p style="font-size: 20px;margin-top: 10px;">5 ¿Estarías dispuesto a confortar (ayudar, apoyar) víctimas de cualquier índole?</p>
<button onclick="si5()" id="respuesta1">Si</button>
<button onclick="no5()" id="respuesta2">No</button>
</div>
<div  id="sexto">
<p style="font-size: 20px;margin-top: 10px;"> 6 ¿Sientes curiosidad de saber cómo y porqué funciona una máquina?</p>
<button onclick="si6()" id="respuesta1">Si</button>
<button onclick="no6()" id="respuesta2">No</button>
</div>
<div  id="septimo">
<p style="font-size: 20px;margin-top: 10px;">7 ¿Te interesan más los misterios de la naturaleza que los secretos de la tecnología?</p>
<button onclick="si7()" id="respuesta1">Si</button>
<button onclick="no7()" id="respuesta2">No</button>
</div>
<div  id="octavo">
<p style="font-size: 20px;margin-top: 10px;">8 ¿Te interesa escuchar a un amigo cuando te cuenta un problema?</p>
<button onclick="si8()" id="respuesta1">Si</button>
<button  onclick="no8()" id="respuesta2">No</button><br><br>
</div>
<center><button onclick="siguiente()" id="siguiente"  style="display: none;">Siguiente</button></center>



</div>

<div id="pagina2" style="left: 27%; margin-top: 51px;">

<center>

<div style=" display: none;" id="primero2">
<p style="font-size: 20px; margin-top: 10px;">9 ¿Encuentras  interesante explicar un determinado tema a una o varias personas?</p>
<button onclick="si9()" id="respuesta1">Si</button>
<button onclick="no9()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="segundo2">
<p style="font-size: 20px; margin-top: 10px;">10 ¿Te sientes insatisfecho si un trabajo en equipo no está cien por ciento (100%) logrado?</p>
<button onclick="si10()" id="respuesta1">Si</button>
<button onclick="no10()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="tercero2">
<p style="font-size: 20px; margin-top: 10px;">11 ¿Te gustan los juegos de ingenio?</p>
<button onclick="si11()" id="respuesta1">Si</button>
<button  onclick="no11()"id="respuesta2">No</button>
</div>
<div style=" display: none;" id="cuarto2">
<p style="font-size: 20px; margin-top: 10px;">12 ¿Te agrada estudiar o investigar estadísticas?</p>
<button onclick="si12()" id="respuesta1">Si</button>
<button onclick="no12()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="quinto2">
<p style="font-size: 20px; margin-top: 10px;">13 ¿Usar uniforme te hace sentir importante?</p>
<button onclick="si13()" id="respuesta1">Si</button>
<button onclick="no13()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="sexto2">
<p style="font-size: 20px; margin-top: 10px;">14 ¿Participarías como profesional en un espectáculo de acrobacia aérea?</p>
<button onclick="si14()" id="respuesta1">Si</button>
<button onclick="no14()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="septimo2">
<p style="font-size: 20px; margin-top: 10px;">15 ¿Puedes decir que eres un buen administrador de tu dinero?</p>
<button onclick="si15()" id="respuesta1">Si</button>
<button onclick="no15()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="octavo2">
<p style="font-size: 20px; margin-top: 10px;">16 ¿Te resulta sencillo imponer tus puntos de vista a los demás?</p>
<button onclick="si16()" id="respuesta1">Si</button>
<button onclick="no16()" id="respuesta2">No</button><br><br>
</div>
<button onclick="siguiente2()" id="siguiente2" style=" display: none;">Siguiente</button></center>


</div>




<div id="pagina3" style="left: 27%; margin-top: 51px;">
<center>

<div style=" display: none;" id="primero3">
<p  style="font-size: 20px; margin-top: 10px;">17 Si alguien te habla del genoma humano, ¿sabes a qué se refiere?</p>
<button onclick="si17()" id="respuesta1">Si</button>
<button onclick="no17()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="segundo3">
<p  style="font-size: 20px; margin-top: 10px;">18 Eres testigo de un accidente grave, ¿acudes inmediatamente a socorrer a las víctimas?</p>
<button onclick="si18()" id="respuesta1">Si</button>
<button onclick="no18()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="tercero3">
<p  style="font-size: 20px; margin-top: 10px;">19 ¿Eres paciente en la resolución de un problema matemático?</p>
<button onclick="si19()" id="respuesta1">Si</button>
<button onclick="no19()" id="respuesta2">No</button>
</div>
<div style="display: none;" id="cuarto3">
<p  style="font-size: 20px; margin-top: 10px;">20 ¿Te ves organizando, dirigiendo y proponiendo ideas a integrantes de una entidad?</p>
<button onclick="si20()" id="respuesta1">Si</button>
<button onclick="no20()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="quinto3">
<p  style="font-size: 20px; margin-top: 10px;">21 ¿Sientes que a menudo eres el centro de atención de las reuniones?</p>
<button onclick="si21()" id="respuesta1">Si</button>
<button onclick="no21()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="sexto3">
<p  style="font-size: 20px; margin-top: 10px;">22 ¿Crees que a la hora de realizar algo eres perfeccionista?</p>
<button onclick="si22()" id="respuesta1">Si</button>
<button onclick="no22()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="septimo3">
<p  style="font-size: 20px; margin-top: 10px;">23 ¿Te consideras capaz de atender y consolar a personas enfermas todos los días?</p>
<button onclick="si23()" id="respuesta1">Si</button>
<button onclick="no23()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="octavo3">
<p  style="font-size: 20px; margin-top: 10px;">24 ¿Te presentarías voluntariamente para ayudar ante una emergencia social?</p>
<button onclick="si24()" id="respuesta1">Si</button>
<button onclick="no24()" id="respuesta2">No</button><br><br>
</div>
<button onclick="siguiente3()" id="siguiente3" style=" display: none;">Siguiente</button></center>

</div>

<div id="pagina4" style="left: 27%; margin-top: 51px;">
<center>

<div style=" display: none;" id="primero4">
<p style="font-size: 20px; margin-top: 10px;">25 ¿Eres capaz de apagar el televisor para dedicarte a leer un libro que te atrae?</p>
<button onclick="si25()" id="respuesta1">Si</button>
<button  onclick="no25()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="segundo4">
<p style="font-size: 20px; margin-top: 10px;">26 ¿Planificas detalladamente tus trabajos antes de empezar?</p>
<button onclick="si26()" id="respuesta1">Si</button>
<button onclick="no26()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="tercero4">
<p style="font-size: 20px; margin-top: 10px;">27 ¿Te sientes contraìdo (Incómodo, molesto) si tienes que pasar días sin tu celular o computador?</p>
<button onclick="si27()" id="respuesta1">Si</button>
<button onclick="no27()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="cuarto4">
<p style="font-size: 20px; margin-top: 10px;">28 Ante una escultura, ¿piensas que te hubiese gustado que tus manos la moldearan?</p>
<button onclick="si28()" id="respuesta1">Si</button>
<button onclick="no28()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="quinto4">
<p style="font-size: 20px; margin-top: 10px;">29 ¿Te molesta que en algunas calles no haya rampas para discapacitados?</p>
<button onclick="si29()" id="respuesta1">Si</button>
<button onclick="no29()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="sexto4">
<p style="font-size: 20px; margin-top: 10px;">30 ¿Consideras importante que desde la escuela se fomente la actitud crítica y la participación activa?</p>
<button onclick="si30()" id="respuesta1">Si</button>
<button onclick="no30()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="septimo4">
<p style="font-size: 20px; margin-top: 10px;">31 ¿Crees que el entrenamiento militar debe ser tan severo tanto para chicos como para chicas?</p>
<button onclick="si31()" id="respuesta1">Si</button>
<button onclick="no31()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="octavo4">
<p style="font-size: 20px; margin-top: 10px;">32 ¿te sentirías interesado en crear métodos para conocer la frecuencia de sueño de roedores?</p>
<button onclick="si32()" id="respuesta1">Si</button>
<button onclick="no32()" id="respuesta2">No</button><br><br>
</div>
<button onclick="siguiente4()" id="siguiente4" style=" display: none;">Siguiente</button></center>


</div>

<div id="pagina5" style="left: 27%; margin-top: 51px;">

<center>

<div style=" display: none;" id="primero5">
<p style="font-size: 20px; margin-top: 10px;">33 ¿Te unirías a un grupo en una campaña de vacunación de niños pobres?</p>
<button onclick="si33()" id="respuesta1">Si</button>
<button onclick="no33()" id="respuesta2">No</button>
</div>
<div style= "display: none;" id="segundo5">
<p style="font-size: 20px; margin-top: 10px;">34 ¿Sientes curiosidad si te hablan de la edad media?</p>
<button onclick="si34()" id="respuesta1">Si</button>
<button onclick="no34()" id="respuesta2">No</button>
</div>
<div style= "display: none;" id="tercero5">
<p style="font-size: 20px; margin-top: 10px;">35 ¿Te interesa saber cómo se componen las distintas capas de la superficie terrestre?</p>
<button onclick="si35()" id="respuesta1">Si</button>
<button onclick="no35()" id="respuesta2">No</button>
</div>
<div style= "display: none;" id="cuarto5">
<p style="font-size: 20px; margin-top: 10px;">36 ¿Te ocupas de tu cuerpo porque sientes que te hace muy bien física y espiritualmente?</p>
<button onclick="si36()" id="respuesta1">Si</button>
<button onclick="no36()" id="respuesta2">No</button>
</div>
<div style= "display: none;" id="quinto5">
<p style="font-size: 20px; margin-top: 10px;">37 ¿Formas parte de los que no pueden dejar de subirse a una montaña rusa?</p>
<button onclick="si37()" id="respuesta1">Si</button>
<button onclick="no37()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="sexto5">
<p style="font-size: 20px; margin-top: 10px;">38 ¿Sueñas con conocer Cabo cañaveral (Estación Espacial de la NASA)?</p>
<button onclick="si38()" id="respuesta1">Si</button>
<button onclick="no38()" id="respuesta2">No</button>
</div>
<div style= "display: none;" id="septimo5">
<p style="font-size: 20px; margin-top: 10px;">39 ¿Prefieres crear un objeto en lugar de pensar acerca de determinados temas?</p>
<button onclick="si39()" id="respuesta1">Si</button>
<button onclick="no39()" id="respuesta2">No</button>
</div>
<div style= "display: none;" id="octavo5">
<p style="font-size: 20px; margin-top: 10px;">40 ¿Estarías dispuesto a renunciar a un momento placentero para ofrecer tu servicio como profesional?</p>
<button onclick="si40()" id="respuesta1">Si</button>
<button onclick="no40()" id="respuesta2">No</button><br><br>
</div>
<button onclick="siguiente5()" id="siguiente5" style=" display: none;">Siguiente</button></center>

</div>
<div id="pagina6" style="left: 27%; margin-top: 51px;">
<center>

<div style="display: none;" id="primero6">
<p style="font-size: 20px; margin-top: 10px;">41 ¿Te anima la idea de investigar datos respecto a hechos de la vida cotidiana?</p>
<button onclick="si41()" id="respuesta1">Si</button>
<button onclick="no41()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="segundo6">
<p style="font-size: 20px; margin-top: 10px;">42 ¿Trabajarías con un químico para costearte los estudios?</p>
<button onclick="si42()" id="respuesta1">Si</button>
<button onclick="no42()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="tercero6">
<p style="font-size: 20px; margin-top: 10px;">43 ¿Pondrías en juego tu vida para salvar la de un desconocido?</p>
<button onclick="si43()" id="respuesta1">Si</button>
<button onclick="no43()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="cuarto6">
<p style="font-size: 20px; margin-top: 10px;">44 ¿Te gustaría estar preparado para asistir a alguien en un accidente?</p>
<button onclick="si44()" id="respuesta1">Si</button>
<button onclick="no44()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="quinto6">
<p style="font-size: 20px; margin-top: 10px;">45 ¿Consideras que eres perseverante en pos de tus deseos?</p>
<button onclick="si45()" id="respuesta1">Si</button>
<button onclick="no45()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="sexto6">
<p style="font-size: 20px; margin-top: 10px;">46 ¿Distribuyes tus horarios adecuadamente para poder hacer todo lo planeado?</p>
<button onclick="si46()" id="respuesta1">Si</button>
<button onclick="no46()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="septimo6">
<p style="font-size: 20px; margin-top: 10px;">47 ¿Te atraen los mecanismos que hacen posible el funcionamiento de una máquina?</p>
<button onclick="si47()" id="respuesta1">Si</button>
<button onclick="no47()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="octavo6">
<p style="font-size: 20px; margin-top: 10px;">48 ¿Elegirías un trabajo que te llevara lejos de tu casa?</p>
<button onclick="si48()" id="respuesta1">Si</button>
<button onclick="no48()" id="respuesta2">No</button><br><br>
</div>
<button onclick="siguiente6()" id="siguiente6" style="display: none;">Siguiente</button></center>

</div>

<div id="pagina7" style="left: 27%; margin-top: 51px;">
<center>

<div style=" display: none;" id="primero7">
<p style="font-size: 20px; margin-top: 10px;" >49 ¿Te gustaría vivir y trabajar en el campo?</p>
<button onclick="si49()" id="respuesta1">Si</button>
<button onclick="no49()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="segundo7">
<p style="font-size: 20px; margin-top: 10px;" >50 ¿Te atrae la participación activa en un grupo generando proyectos?</p>
<button onclick="si50()" id="respuesta1">Si</button>
<button onclick="no50()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="tercero7">
<p style="font-size: 20px; margin-top: 10px;" >51 ¿Te sientes bien imponiendo orden y métodos de trabajo?</p>
<button onclick="si51()" id="respuesta1">Si</button>
<button onclick="no51()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="cuarto7">
<p style="font-size: 20px; margin-top: 10px;" >52 ¿Leerías material acerca de la morfología de los seres vivos?</p>
<button onclick="si52()" id="respuesta1">Si</button>
<button onclick="no52()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="quinto7">
<p style="font-size: 20px; margin-top: 10px;" >53 ¿Te sientes a gusto negociando productos para su venta?</p>
<button onclick="si53()" id="respuesta1">Si</button>
<button onclick="no53()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="sexto7">
<p style="font-size: 20px; margin-top: 10px;" >54 ¿Te atraen los grandes proyectos nacionales?</p>
<button onclick="si54()" id="respuesta1">Si</button>
<button onclick="no54()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="septimo7">
<p  style="font-size: 20px; margin-top: 10px;">55 ¿Te interesa saber porqué se produce un tsunami, aunque vivas muy lejos del mar?</p>
<button onclick="si55()" id="respuesta1">Si</button>
<button onclick="no55()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="octavo7">
<p style="font-size: 20px; margin-top: 10px;" >56 ¿La lectura de algún libro ya te ha hecho decir: Esto es exactamente lo que yo pienso?</p>
<button onclick="si56()" id="respuesta1">Si</button>
<button onclick="no56()" id="respuesta2">No</button><br><br>
</div>
<button onclick="siguiente7()" id="siguiente7" style="display: none;">Siguiente</button></center>
</div>


<div id="pagina8" style="left: 27%; margin-top: 51px;">
<center>

<div style=" display: none;" id="primero8">
<p style="font-size: 20px; margin-top: 10px;">57 ¿Sería una buena idea que alguien te regalara una guitarra o algún otro instrumento musical?</p>
<button onclick="si57()" id="respuesta1">Si</button>
<button onclick="no57()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="segundo8">
<p style="font-size: 20px; margin-top: 10px;">58 ¿Te interesa colaborar en el mantenimiento del orden público?</p>
<button onclick="si58()" id="respuesta1">Si</button>
<button onclick="no58()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="tercero8">
<p style="font-size: 20px; margin-top: 10px;">59 ¿Generas ideas en las que confías y por las cuales estás dispuesto a luchar?</p>
<button onclick="si59()" id="respuesta1">Si</button>
<button onclick="no59()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="cuarto8">
<p style="font-size: 20px; margin-top: 10px;">60 ¿Te gusta reparar artefactos?</p>
<button onclick="si60()" id="respuesta1">Si</button>
<button onclick="no60()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="quinto8">
<p style="font-size: 20px; margin-top: 10px;">61 ¿sientes que deberías hacer algo cuando escuchas informes sobre la matanza de las ballenas?</p>
<button onclick="si61()" id="respuesta1">Si</button>
<button onclick="no61()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="sexto8">
<p style="font-size: 20px; margin-top: 10px;">62 ¿Estás al tanto de cuáles son los últimos descubrimientos acerca de la cirugía cardiovascular?</p>
<button onclick="si62()" id="respuesta1">Si</button>
<button onclick="no62()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="septimo8">
<p style="font-size: 20px; margin-top: 10px;">63 ¿te agrada que varios edificios de Colombia han sido declarados históricos, y así, preservados?</p>
<button onclick="si63()" id="respuesta1">Si</button>
<button onclick="no63()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="octavo8">
<p style="font-size: 20px; margin-top: 10px;">64 ¿Te ocuparías de temas relacionados con una mejor distribución de los recursos económicos?</p>
<button onclick="si64()" id="respuesta1">Si</button>
<button onclick="no64()" id="respuesta2">No</button><br><br>
</div>
<button onclick="siguiente8()" id="siguiente8" style=" display: none;">Siguiente</button></center>
</div>

<div id="pagina9" style="left: 27%; margin-top: 51px;">

<center>

<div style=" display: none;" id="primero9">
<p style="font-size: 20px; margin-top: 10px;">65 ¿Es de tu interés la navegación marítima y las múltiples actividades relacionadas con ella?</p>
<button onclick="si65()" id="respuesta1">Si</button>
<button onclick="no65()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="segundo9">
<p style="font-size: 20px; margin-top: 10px;">66 ¿Estás en contra del desarme (Entregar las armas)?</p>
<button onclick="si66()" id="respuesta1">Si</button>
<button onclick="no66()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="tercero9">
<p style="font-size: 20px; margin-top: 10px;">67 ¿Sientes que es difícil luchar por determinados valores?</p>
<button onclick="si67()" id="respuesta1">Si</button>
<button onclick="no67()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="cuarto9">
<p style="font-size: 20px; margin-top: 10px;">68 ¿Te gustaría saber cómo se produce la cadena de conservación de los alimentos?</p>
<button onclick="si68()" id="respuesta1">Si</button>
<button onclick="no68()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="quinto9">
<p style="font-size: 20px; margin-top: 10px;">69 ¿Hay aspectos de la salud pública que desearías que mejoraran?</p>
<button onclick="si69()" id="respuesta1">Si</button>
<button onclick="no69()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="sexto9">
<p style="font-size: 20px; margin-top: 10px;">70 ¿Te interesaría investigar acerca de una nueva vacuna?</p>
<button onclick="si70()" id="respuesta1">Si</button>
<button onclick="no70()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="septimo9">
<p style="font-size: 20px; margin-top: 10px;">71 En un equipo de trabajo, ¿prefieres el rol de coordinador?</p>
<button onclick="si71()" id="respuesta1">Si</button>
<button onclick="no71()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="octavo9">
<p style="font-size: 20px; margin-top: 10px;">72 En medio de una discusión, ¿intentas que las partes lleguen a un acuerdo?</p>
<button onclick="si72()" id="respuesta1">Si</button>
<button onclick="no72()" id="respuesta2">No</button><br><br>
</div>
<button onclick="siguiente9()" id="siguiente9" style=" display: none;">Siguiente</button></center>

</div>

<div id="pagina10" style="left: 27%; margin-top: 51px;">

<center>

<div style=" display: none;" id="primero10">
<p style="font-size: 20px; margin-top: 10px;">73 ¿Consideras valida la creación de un grupo de soldados profesionales?</p>
<button onclick="si73()" id="respuesta1">Si</button>
<button onclick="no73()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="segundo10">
<p style="font-size: 20px; margin-top: 10px;">74 ¿Defenderías siempre lo que consideras justo, a pesar de las posibles consecuencias?</p>
<button onclick="si74()" id="respuesta1">Si</button>
<button onclick="no74()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="tercero10">
<p style="font-size: 20px; margin-top: 10px;">75 ¿Los estudios que realizan los ingenieros agrónomos, te despiertan algún tipo de interés?</p>
<button onclick="si75()" id="respuesta1">Si</button>
<button onclick="no75()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="cuarto10">
<p style="font-size: 20px; margin-top: 10px;">76 ¿Diseñarías tu propio vestuario?</p>
<button onclick="si76()" id="respuesta1">Si</button>
<button onclick="no76()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="quinto10">
<p style="font-size: 20px; margin-top: 10px;">77 ¿Te gustaría conocer cómo funciona un telescopio?</p>
<button onclick="si77()" id="respuesta1">Si</button>
<button onclick="no77()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="sexto10">
<p style="font-size: 20px; margin-top: 10px;">78 ¿Te sentirías cómodo trabajando en la comercialización de productos al exterior?</p>
<button onclick="si78()" id="respuesta1">Si</button>
<button onclick="no78()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="septimo10">
<p style="font-size: 20px; margin-top: 10px;">79 ¿Te produce timidez conocer gente nueva?</p>
<button onclick="si79()" id="respuesta1">Si</button>
<button onclick="no79()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="octavo10">
<p style="font-size: 20px; margin-top: 10px;">80 ¿Imaginas un trabajo relacionado con niños?</p>
<button onclick="si80()" id="respuesta1">Si</button>
<button onclick="no80()" id="respuesta2">No</button><br><br>
</div>
<button onclick="siguiente10()" id="siguiente10" style=" display: none;">Siguiente</button></center>
</div>



<div id="pagina11" style="left: 27%; margin-top: 51px;">
<center>

<div style=" display: none;" id="primero11">
<p style="font-size: 20px; margin-top: 10px;">81 ¿Estarías interesado en la creación de mensajes que alerten a la sociedad acerca de un delito?</p>
<button onclick="si81()" id="respuesta1">Si</button>
<button onclick="no81()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="segundo11">
<p style="font-size: 20px; margin-top: 10px;">82 ¿Te gusta la actuación?</p>
<button onclick="si82()" id="respuesta1">Si</button>
<button onclick="no82()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="tercero11">
<p style="font-size: 20px; margin-top: 10px;">83 ¿Trabajarías en aéreas relacionadas con la fabricación de automóviles?</p>
<button onclick="si83()" id="respuesta1">Si</button>
<button onclick="no83()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="cuarto11">
<p style="font-size: 20px; margin-top: 10px;">84 ¿Colaborarías en la defensa de otras naciones?</p>
<button onclick="si84()" id="respuesta1">Si</button>
<button onclick="no84()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="quinto11">
<p style="font-size: 20px; margin-top: 10px;">85 ¿Te gustaría adquirir experiencia en un estudio contable?</p>
<button onclick="si85()" id="respuesta1">Si</button>
<button onclick="no85()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="sexto11">
<p style="font-size: 20px; margin-top: 10px;">86 ¿Te consideras un idealista (soñador)?</p>
<button onclick="si86()" id="respuesta1">Si</button>
<button onclick="no86()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="septimo11">
<p style="font-size: 20px; margin-top: 10px;">87 ¿Te presentarías voluntariamente para ayudar a las víctimas de catástrofes naturales ?</p>
<button onclick="si87()" id="respuesta1">Si</button>
<button onclick="no87()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="octavo11">
<p style="font-size: 20px; margin-top: 10px;">88 ¿Haz sentido curiosidad por el estudio de la herencia genética?</p>
<button onclick="si88()" id="respuesta1">Si</button>
<button onclick="no88()" id="respuesta2">No</button><br><br>
</div>
<button onclick="siguiente11()" id="siguiente11" style=" display: none;">Siguiente</button></center>
</div>

<div id="pagina12" style="left: 27%; margin-top: 51px;">
<center>

<div style=" display: none;" id="primero12">
<p style="font-size: 20px; margin-top: 10px;">89 ¿Preferirías utilizar en tu trabajo otro idioma que no fuera el tuyo de origen?</p>
<button onclick="si89()" id="respuesta1">Si</button>
<button onclick="no89()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="segundo12">
<p style="font-size: 20px; margin-top: 10px;">90 ¿Trabajar con objetos te resulta más gratificante que trabajar con personas?</p>
<button onclick="si90()" id="respuesta1">Si</button>
<button onclick="no90()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="tercero12">
<p style="font-size: 20px; margin-top: 10px;">91 ¿Te gusta trabajar con números y cifras?</p>
<button onclick="si91()" id="respuesta1">Si</button>
<button onclick="no91()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="cuarto12">
<p style="font-size: 20px; margin-top: 10px;">92 ¿Te desconsuela el sufrimiento de los demás?</p>
<button onclick="si92()" id="respuesta1">Si</button>
<button onclick="no92()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="quinto12">
<p style="font-size: 20px; margin-top: 10px;">93 ¿Sientes atracción por conocer en detalle qué es una estrella?</p>
<button onclick="si93()" id="respuesta1">Si</button>
<button onclick="no93()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="sexto12">
<p style="font-size: 20px; margin-top: 10px;">94 ¿Consideras que tienes que hacerte cargo de las cosas, porque sino los otros no las hacen?</p>
<button onclick="si94()" id="respuesta1">Si</button>
<button onclick="no94()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="septimo12">
<p style="font-size: 20px; margin-top: 10px;">95 ¿Colaborarías con trabajos en una ciudad en emergencia?</p>
<button onclick="si95()" id="respuesta1">Si</button>
<button onclick="no95()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="octavo12">
<p style="font-size: 20px; margin-top: 10px;">96 ¿Cuidas que tu ropa combine adecuadamente?</p>
<button onclick="si96()" id="respuesta1">Si</button>
<button onclick="no96()" id="respuesta2">No</button><br><br>
</div>
<button onclick="siguiente12()" id="siguiente12" style=" display: none;">Siguiente</button></center>
</div>

<div id="pagina13" style="left: 27%; margin-top: 51px;">
<center>

<div style=" display: none;" id="primero13">
<p style="font-size: 20px; margin-top: 10px;">97 ¿Te interesa todo lo relacionado con las fuentes de generación de energía?</p>
<button onclick="si97()" id="respuesta1">Si</button>
<button onclick="no97()" id="respuesta2">No</button>
</div>
<div style=" display: none;" id="segundo13">
<p style="font-size: 20px; margin-top: 10px;">98 ¿Podrías explicar que significa la sigla PYME?</p>
<button onclick="si98()" id="respuesta1">Si</button>
<button onclick="no98()" id="respuesta2">No</button>

</div>
<form name="formulario" method="post" action="javascript:resul()">
	
	<input type="submit" value="Resultado" id="resultado" style="display: none;"></form>
</center>
</center>
</div>
</div>
</center>

</div>







<script type="text/javascript">
   
var cIntereses=0;
var hIntereses=0;
var aIntereses=0;
var sIntereses=0;
var iIntereses=0;
var dIntereses=0;
var eIntereses=0;

var cAptitudes=0;
var hAptitudes=0;
var aAptitudes=0;
var sAptitudes=0;
var iAptitudes=0;
var dAptitudes=0;
var eAptitudes=0;



	function si(){
 document.getElementById("progres").style.width = "7px";
  document.getElementById("primero").style.display = "none";
		cIntereses++;}
        function si2(){
document.getElementById("progres").style.width = "14px";
  document.getElementById("segundo").style.display = "none";
        	cAptitudes++;}
        	  function si3(){
              document.getElementById("progres").style.width = "21px";
  document.getElementById("tercero").style.display = "none";
        	aIntereses++;}
        	    function si4(){
                document.getElementById("progres").style.width = "28px";
  document.getElementById("cuarto").style.display = "none";
        	sAptitudes++;}
        	      function si5(){
                  document.getElementById("progres").style.width = "35px";
  document.getElementById("quinto").style.display = "none";
        	dIntereses++;}
        	 function si6(){
            document.getElementById("progres").style.width = "42px";
  document.getElementById("sexto").style.display = "none";
        	iIntereses++;}
        	 function si7(){
            document.getElementById("progres").style.width = "49px";
  document.getElementById("septimo").style.display = "none";
        	eAptitudes++;}
        	 function si8(){
            document.getElementById("progres").style.width = "56px";
  document.getElementById("octavo").style.display = "none";
              sIntereses++;
             document.getElementById("siguiente").style.display = "block";
            }
            function no8(){
              document.getElementById("siguiente").style.display = "block";
              document.getElementById("progres").style.width = "56px";
  document.getElementById("octavo").style.display = "none";
            }

            function no1(){
              document.getElementById("progres").style.width = "7px";
  document.getElementById("primero").style.display = "none";

            }
            function no2(){
             document.getElementById("progres").style.width = "14px";
  document.getElementById("segundo").style.display = "none"; 
            }
            function no3(){
              document.getElementById("progres").style.width = "21px";
  document.getElementById("tercero").style.display = "none";
            }
            function no4(){
               document.getElementById("progres").style.width = "28px";
  document.getElementById("cuarto").style.display = "none";
            }
            function no5(){
             document.getElementById("progres").style.width = "35px";
  document.getElementById("quinto").style.display = "none"; 
            }
            function no6(){
             document.getElementById("progres").style.width = "42px";
  document.getElementById("sexto").style.display = "none"; 
            }
            function no7(){
             document.getElementById("progres").style.width = "49px";
  document.getElementById("septimo").style.display = "none"; 
            }



               function si9(){
                document.getElementById("progres").style.width = "63px";
  document.getElementById("primero2").style.display = "none";
              hIntereses++;}
              function no9(){
               document.getElementById("progres").style.width = "63px";
  document.getElementById("primero2").style.display = "none"; 
              }
               function si10(){
                document.getElementById("progres").style.width = "70px";
  document.getElementById("segundo2").style.display = "none";
              iAptitudes++;}
              function no10(){
               document.getElementById("progres").style.width = "70px";
  document.getElementById("segundo2").style.display = "none"; 
              }
               function si11(){
                document.getElementById("progres").style.width = "77px";
  document.getElementById("tercero2").style.display = "none";
              aIntereses++;}
              function no11(){
               document.getElementById("progres").style.width = "77px";
  document.getElementById("tercero2").style.display = "none"; 
              }
               function si12(){
                document.getElementById("progres").style.width = "84px";
  document.getElementById("cuarto2").style.display = "none";
              cIntereses++;}
              function no12(){
              document.getElementById("progres").style.width = "84px";
  document.getElementById("cuarto2").style.display = "none";  
              }
               function si13(){
                document.getElementById("progres").style.width = "91px";
  document.getElementById("quinto2").style.display = "none";
              dAptitudes++;}
              function no13(){
              document.getElementById("progres").style.width = "84px";
  document.getElementById("quinto2").style.display = "none";
                   } 
               function si14(){
                document.getElementById("progres").style.width = "98px";
  document.getElementById("sexto2").style.display = "none";
              dIntereses++;}
              function no14(){
               document.getElementById("progres").style.width = "98px";
  document.getElementById("sexto2").style.display = "none"; 
              }
               function si15(){
                document.getElementById("progres").style.width = "105px";
  document.getElementById("septimo2").style.display = "none";
              cAptitudes++;}
              function no15(){
                document.getElementById("progres").style.width = "105px";
  document.getElementById("septimo2").style.display = "none";
              }
               function si16(){
                document.getElementById("progres").style.width = "112px";
  document.getElementById("octavo2").style.display = "none";
              sIntereses++;

 document.getElementById("siguiente2").style.display = "block";
            }
            function no16(){
               document.getElementById("siguiente2").style.display = "block";
               document.getElementById("progres").style.width = "112px";
  document.getElementById("octavo2").style.display = "none";
            }






               function si17(){
                document.getElementById("progres").style.width = "119px";
  document.getElementById("primero3").style.display = "none";
              eIntereses++;}
              function no17(){
               document.getElementById("progres").style.width = "119px";
  document.getElementById("primero3").style.display = "none"; 
              }
               function si18(){
                document.getElementById("progres").style.width = "126px";
  document.getElementById("segundo3").style.display = "none";
              dAptitudes++;}
              function no18(){
                document.getElementById("progres").style.width = "126px";
  document.getElementById("segundo3").style.display = "none";
              }
               function si19(){
                document.getElementById("progres").style.width = "133px";
  document.getElementById("tercero3").style.display = "none";
              iIntereses++;}
              function no19(){
                document.getElementById("progres").style.width = "133px";
  document.getElementById("tercero3").style.display = "none";
              }
               function si20(){
                document.getElementById("progres").style.width = "140px";
  document.getElementById("cuarto3").style.display = "none";
              cIntereses++;}
              function no20(){
                document.getElementById("progres").style.width = "140px";
  document.getElementById("cuarto3").style.display = "none";
              }
               function si21(){
                document.getElementById("progres").style.width = "147px";
  document.getElementById("quinto3").style.display = "none";
              aIntereses++;}
              function no21(){
              document.getElementById("progres").style.width = "147px";
  document.getElementById("quinto3").style.display = "none";  
              }
               function si22(){
                document.getElementById("progres").style.width = "154px";
  document.getElementById("sexto3").style.display = "none";
              aAptitudes++;}
              function no22(){
               document.getElementById("progres").style.width = "154px";
  document.getElementById("sexto3").style.display = "none"; 
              }
               function si23(){
                document.getElementById("progres").style.width = "161px";
  document.getElementById("septimo3").style.display = "none";
              sIntereses++;}
              function no23(){
                 document.getElementById("progres").style.width = "161px";
  document.getElementById("septimo3").style.display = "none";
              }
               function si24(){
                document.getElementById("progres").style.width = "168px";
  document.getElementById("octavo3").style.display = "none";
              dIntereses++;
 document.getElementById("siguiente3").style.display = "block";
            }
            function no24(){
               document.getElementById("siguiente3").style.display = "block";
               document.getElementById("progres").style.width = "168px";
  document.getElementById("octavo3").style.display = "none";
            }







               function si25(){
                document.getElementById("progres").style.width = "175px";
  document.getElementById("primero4").style.display = "none";
              hIntereses++;}
              function no25(){
               document.getElementById("progres").style.width = "175px";
  document.getElementById("primero4").style.display = "none"; 
              }
               function si26(){
                document.getElementById("progres").style.width = "182px";
  document.getElementById("segundo4").style.display = "none";
              iAptitudes++;}
              function no26(){
                document.getElementById("progres").style.width = "182px";
  document.getElementById("segundo4").style.display = "none";
              }

               function si27(){
document.getElementById("progres").style.width = "189px";
  document.getElementById("tercero4").style.display = "none";
              iIntereses++;}
              function no27(){
                document.getElementById("progres").style.width = "189px";
  document.getElementById("tercero4").style.display = "none";
              }
               function si28(){
                document.getElementById("progres").style.width = "196px";
  document.getElementById("cuarto4").style.display = "none";
              aIntereses++;}
              function no28(){
               document.getElementById("progres").style.width = "196px";
  document.getElementById("cuarto4").style.display = "none"; 
              }
               function si29(){
                document.getElementById("progres").style.width = "203px";
  document.getElementById("quinto4").style.display = "none";
              sAptitudes++;}
              function no29(){
                 document.getElementById("progres").style.width = "203px";
  document.getElementById("quinto4").style.display = "none";
              }
               function si30(){
                document.getElementById("progres").style.width = "210px";
  document.getElementById("sexto4").style.display = "none";
              hAptitudes++;}
              function no30(){
                document.getElementById("progres").style.width = "210px";
  document.getElementById("sexto4").style.display = "none"; 
              }
               function si31(){
                document.getElementById("progres").style.width = "217px";
  document.getElementById("septimo4").style.display = "none";
              dIntereses++;}
              function no31(){
                document.getElementById("progres").style.width = "217px";
  document.getElementById("septimo4").style.display = "none"; 
              }
               function si32(){
                document.getElementById("progres").style.width = "224px";
  document.getElementById("octavo4").style.display = "none";
              eIntereses++;
 document.getElementById("siguiente4").style.display = "block";
            }
            function no32(){
               document.getElementById("siguiente4").style.display = "block";
                document.getElementById("progres").style.width = "224px";
  document.getElementById("octavo4").style.display = "none";
            }



               function si33(){
                document.getElementById("progres").style.width = "231px";
  document.getElementById("primero5").style.display = "none";
              sIntereses++;}
              function no33(){
               document.getElementById("progres").style.width = "231px";
  document.getElementById("primero5").style.display = "none"; 
              }
               function si34(){
                document.getElementById("progres").style.width = "238px";
  document.getElementById("segundo5").style.display = "none";
              hIntereses++;}
              function no34(){
                document.getElementById("progres").style.width = "238px";
  document.getElementById("segundo5").style.display = "none";
              }
               function si35(){
                document.getElementById("progres").style.width = "245px";
  document.getElementById("tercero5").style.display = "none";
              eIntereses++;}
              function no35(){
                document.getElementById("progres").style.width = "245px";
  document.getElementById("tercero5").style.display = "none";
              }
               function si36(){
                document.getElementById("progres").style.width = "252px";
  document.getElementById("cuarto5").style.display = "none";
              aIntereses++;}
              function no36(){
                document.getElementById("progres").style.width = "252px";
  document.getElementById("cuarto5").style.display = "none";
              }
               function si37(){
                document.getElementById("progres").style.width = "259px";
  document.getElementById("quinto5").style.display = "none";
              dIntereses++;}
              function no37(){
                document.getElementById("progres").style.width = "259px";
  document.getElementById("quinto5").style.display = "none";
              }
               function si38(){
                document.getElementById("progres").style.width = "266px";
  document.getElementById("sexto5").style.display = "none";
              iIntereses++;}
              function no38(){
                 document.getElementById("progres").style.width = "266px";
  document.getElementById("sexto5").style.display = "none";
              }
               function si39(){
                document.getElementById("progres").style.width = "273px";
  document.getElementById("septimo5").style.display = "none";
              aAptitudes++;}
              function no39(){
               document.getElementById("progres").style.width = "273px";
  document.getElementById("septimo5").style.display = "none"; 
              }  
             function si40(){
                 document.getElementById("progres").style.width = "280px";
  document.getElementById("octavo5").style.display = "none";
              sAptitudes++;
 document.getElementById("siguiente5").style.display = "block";
            }
            function no40(){
               document.getElementById("siguiente5").style.display = "block";
               document.getElementById("progres").style.width = "280px";
  document.getElementById("octavo5").style.display = "none";
            }



               function si41(){
                document.getElementById("progres").style.width = "287px";
  document.getElementById("primero6").style.display = "none";
              hIntereses++;}
              function no41(){
               document.getElementById("progres").style.width = "287px";
  document.getElementById("primero6").style.display = "none"; 
              }
               function si42(){
                document.getElementById("progres").style.width = "294px";
  document.getElementById("segundo6").style.display = "none";
              eIntereses++;}
              function no42(){
                 document.getElementById("progres").style.width = "294px";
  document.getElementById("segundo6").style.display = "none";
              }
               function si43(){
                document.getElementById("progres").style.width = "301px";
  document.getElementById("tercero6").style.display = "none";
              dAptitudes++;}
              function no43(){
                document.getElementById("progres").style.width = "301px";
  document.getElementById("tercero6").style.display = "none";
              }
               function si44(){
                document.getElementById("progres").style.width = "308px";
  document.getElementById("cuarto6").style.display = "none";
              sIntereses++;}
              function no44(){
                document.getElementById("progres").style.width = "308px";
  document.getElementById("cuarto6").style.display = "none"; 
              }
               function si45(){
                document.getElementById("progres").style.width = "315px";
  document.getElementById("quinto6").style.display = "none";
              aIntereses++;}
              function no45(){
                document.getElementById("progres").style.width = "315px";
  document.getElementById("quinto6").style.display = "none";
              }
               function si46(){
                document.getElementById("progres").style.width = "322px";
  document.getElementById("sexto6").style.display = "none";
              cAptitudes++;}
              function no46(){
                  document.getElementById("progres").style.width = "322px";
  document.getElementById("sexto6").style.display = "none"; 
              }
               function si47(){
                document.getElementById("progres").style.width = "329px";
  document.getElementById("septimo6").style.display = "none";
              iIntereses++;}
              function no47(){
                 document.getElementById("progres").style.width = "329px";
  document.getElementById("septimo6").style.display = "none";
              }
               function si48(){
                document.getElementById("progres").style.width = "336px";
  document.getElementById("octavo6").style.display = "none";
              dIntereses++;
 document.getElementById("siguiente6").style.display = "block";
            }
            function no48(){
               document.getElementById("siguiente6").style.display = "block";
                document.getElementById("progres").style.width = "336px";
  document.getElementById("octavo6").style.display = "none";
            }



               function si49(){
                 document.getElementById("progres").style.width = "343px";
  document.getElementById("primero7").style.display = "none";
              eIntereses++;}
              function no49(){
                  document.getElementById("progres").style.width = "343px";
  document.getElementById("primero7").style.display = "none";

              }


               function si50(){
                 document.getElementById("progres").style.width = "350px";
  document.getElementById("segundo7").style.display = "none";
              aIntereses++;}
              function no50(){
                document.getElementById("progres").style.width = "350px";
  document.getElementById("segundo7").style.display = "none";
              }

               function si51(){
                 document.getElementById("progres").style.width = "357px";
  document.getElementById("tercero7").style.display = "none";
              cAptitudes++;}

              function no51(){
                 document.getElementById("progres").style.width = "357px";
  document.getElementById("tercero7").style.display = "none";
              }

              function si52(){
                 document.getElementById("progres").style.width = "364px";
  document.getElementById("cuarto7").style.display = "none";
              sIntereses++;}
              function no52(){
               document.getElementById("progres").style.width = "364px";
  document.getElementById("cuarto7").style.display = "none"; 
              }
              function si53(){
                 document.getElementById("progres").style.width = "371px";
  document.getElementById("quinto7").style.display = "none";
              cIntereses++;}
              function no53(){
                document.getElementById("progres").style.width = "371px";
  document.getElementById("quinto7").style.display = "none";
              }
              function si54(){
                 document.getElementById("progres").style.width = "378px";
  document.getElementById("sexto7").style.display = "none";
              iAptitudes++;}
              function no54(){
               document.getElementById("progres").style.width = "378px";
  document.getElementById("sexto7").style.display = "none"; 
              }
              function si55(){
                 document.getElementById("progres").style.width = "385px";
  document.getElementById("septimo7").style.display = "none";
              eAptitudes++;}
              function no55(){
                 document.getElementById("progres").style.width = "385px";
  document.getElementById("septimo7").style.display = "none";
              }
              function si56(){
                 document.getElementById("progres").style.width = "392px";
  document.getElementById("octavo7").style.display = "none";
               hIntereses++;
 document.getElementById("siguiente7").style.display = "block";
             }
             function no56(){
               document.getElementById("siguiente7").style.display = "block";
               document.getElementById("progres").style.width = "392px";
  document.getElementById("octavo7").style.display = "none";
             }




               function si57(){
                 document.getElementById("progres").style.width = "399px";
  document.getElementById("primero8").style.display = "none";
              aIntereses++;}
              function no57(){
                 document.getElementById("progres").style.width = "399px";
  document.getElementById("primero8").style.display = "none";
              }
              function si58(){
                 document.getElementById("progres").style.width = "406px";
  document.getElementById("segundo8").style.display = "none";
              dIntereses++;}
              function no58(){
                 document.getElementById("progres").style.width = "406px";
  document.getElementById("segundo8").style.display = "none"; 
              }
              function si59(){
                 document.getElementById("progres").style.width = "413px";
  document.getElementById("tercero8").style.display = "none";
              iAptitudes++;}
              function no59(){
              document.getElementById("progres").style.width = "413px";
  document.getElementById("tercero8").style.display = "none";  
              }
              function si60(){
                 document.getElementById("progres").style.width = "420px";
  document.getElementById("cuarto8").style.display = "none";
              iIntereses++;}
              function no60(){
                document.getElementById("progres").style.width = "420px";
  document.getElementById("cuarto8").style.display = "none";
              }
              function si61(){
                 document.getElementById("progres").style.width = "427px";
  document.getElementById("quinto8").style.display = "none";
              eIntereses++;}
              function no61(){
                document.getElementById("progres").style.width = "427px";
  document.getElementById("quinto8").style.display = "none";
              }
              function si62(){
                 document.getElementById("progres").style.width = "434px";
  document.getElementById("sexto8").style.display = "none";
              sIntereses++;}
              function no62(){
                document.getElementById("progres").style.width = "434px";
  document.getElementById("sexto8").style.display = "none";
              }
              function si63(){
                 document.getElementById("progres").style.width = "441px";
  document.getElementById("septimo8").style.display = "none";
              hAptitudes++;}
              function no63(){
                 document.getElementById("progres").style.width = "441px";
  document.getElementById("septimo8").style.display = "none";
              }
              function si64(){
                 document.getElementById("progres").style.width = "448px";
  document.getElementById("octavo8").style.display = "none";
              cIntereses++;
 document.getElementById("siguiente8").style.display = "block";
            }
            function no64(){
               document.getElementById("siguiente8").style.display = "block";
                document.getElementById("progres").style.width = "448px";
  document.getElementById("octavo8").style.display = "none";
            }


              function si65(){
                document.getElementById("progres").style.width = "455px";
  document.getElementById("primero9").style.display = "none";
              dIntereses++;}
              function no65(){
                document.getElementById("progres").style.width = "455px";
  document.getElementById("primero9").style.display = "none";
              }
              function si66(){
                document.getElementById("progres").style.width = "462px";
  document.getElementById("segundo9").style.display = "none";
              dAptitudes++;}
              function no66(){
                document.getElementById("progres").style.width = "462px";
  document.getElementById("segundo9").style.display = "none";
              }
              function si67(){
                document.getElementById("progres").style.width = "469px";
  document.getElementById("tercero9").style.display = "none";
              hIntereses++;}
              function no67(){
                document.getElementById("progres").style.width = "469px";
  document.getElementById("tercero9").style.display = "none";
              }
              function si68(){
                document.getElementById("progres").style.width = "476px";
  document.getElementById("cuarto9").style.display = "none";
              eIntereses++;}
              function no68(){
                document.getElementById("progres").style.width = "476px";
  document.getElementById("cuarto9").style.display = "none";
              }
              function si69(){
                document.getElementById("progres").style.width = "483px";
  document.getElementById("quinto9").style.display = "none";
              sAptitudes++;}
              function no69(){
               document.getElementById("progres").style.width = "483px";
  document.getElementById("quinto9").style.display = "none"; 
              }
              function si70(){
                document.getElementById("progres").style.width = "490px";
  document.getElementById("sexto9").style.display = "none";
              sIntereses++;}
              function no70(){
                document.getElementById("progres").style.width = "490px";
  document.getElementById("sexto9").style.display = "none";
              }
              function si71(){
                document.getElementById("progres").style.width = "497px";
  document.getElementById("septimo9").style.display = "none";
              cIntereses++;}
              function no71(){
               document.getElementById("progres").style.width = "497px";
  document.getElementById("septimo9").style.display = "none"; 
              }
              function si72(){
                document.getElementById("progres").style.width = "504px";
  document.getElementById("octavo9").style.display = "none";
               hAptitudes++;
 document.getElementById("siguiente9").style.display = "block";
             }
             function no72(){
               document.getElementById("siguiente9").style.display = "block";
               document.getElementById("progres").style.width = "504px";
  document.getElementById("octavo9").style.display = "none";
             }



               function si73(){
                document.getElementById("progres").style.width = "511px";
  document.getElementById("primero10").style.display = "none";

              dIntereses++;}
              function no73(){
                document.getElementById("progres").style.width = "511px";
  document.getElementById("primero10").style.display = "none"; 
              }
              function si74(){
                document.getElementById("progres").style.width = "518px";
  document.getElementById("segundo10").style.display = "none";

              hIntereses++;}
              function no74(){
                document.getElementById("progres").style.width = "518px";
  document.getElementById("segundo10").style.display = "none";
              }
              function si75(){
                document.getElementById("progres").style.width = "525px";
  document.getElementById("tercero10").style.display = "none";

              iIntereses++;}
              function no75(){
               document.getElementById("progres").style.width = "525px";
  document.getElementById("tercero10").style.display = "none"; 
              }
              function si76(){
                document.getElementById("progres").style.width = "532px";
  document.getElementById("cuarto10").style.display = "none";

              aAptitudes++;}
              function no76(){
  document.getElementById("progres").style.width = "532px";
  document.getElementById("cuarto10").style.display = "none";
              }
              function si77(){
                document.getElementById("progres").style.width = "539px";
  document.getElementById("quinto10").style.display = "none";

              eIntereses++;}
              function no77(){
                 document.getElementById("progres").style.width = "539px";
  document.getElementById("quinto10").style.display = "none";
              }
              function si78(){
                document.getElementById("progres").style.width = "546px";
  document.getElementById("sexto10").style.display = "none";

              cIntereses++;}
              function no78(){
                 document.getElementById("progres").style.width = "546px";
  document.getElementById("sexto10").style.display = "none";
              }
              function si79(){
                document.getElementById("progres").style.width = "553px";
  document.getElementById("septimo10").style.display = "none";

              eAptitudes++;}
              function no79(){
               document.getElementById("progres").style.width = "553px";
  document.getElementById("septimo10").style.display = "none"; 
              }
              function si80(){
                document.getElementById("progres").style.width = "560px";
  document.getElementById("octavo10").style.display = "none";

              hIntereses++;
 document.getElementById("siguiente10").style.display = "block";
            }
            function no80(){
               document.getElementById("siguiente10").style.display = "block";
               document.getElementById("progres").style.width = "560px";
  document.getElementById("octavo10").style.display = "none";
            }


              function si81(){
                document.getElementById("progres").style.width = "567px";
  document.getElementById("primero11").style.display = "none";
              aIntereses++;}
              function no81(){
                document.getElementById("progres").style.width = "567px";
  document.getElementById("primero11").style.display = "none";
              }
              function si82(){
                document.getElementById("progres").style.width = "574px";
  document.getElementById("segundo11").style.display = "none";
              aAptitudes++;}
              function no82(){
               document.getElementById("progres").style.width = "574px";
  document.getElementById("segundo11").style.display = "none"; 
              }
              function si83(){
                document.getElementById("progres").style.width = "581px";
  document.getElementById("tercero11").style.display = "none";
              iIntereses++;}
              function no83(){
               document.getElementById("progres").style.width = "581px";
  document.getElementById("tercero11").style.display = "none"; 
              }
              function si84(){
                document.getElementById("progres").style.width = "588px";
  document.getElementById("cuarto11").style.display = "none";
              dIntereses++;}
              function no84(){
                document.getElementById("progres").style.width = "588px";
  document.getElementById("cuarto11").style.display = "none";
              }
              function si85(){
                document.getElementById("progres").style.width = "595px";
  document.getElementById("quinto11").style.display = "none";
              cIntereses++;}
              function no85(){
                document.getElementById("progres").style.width = "595px";
  document.getElementById("quinto11").style.display = "none";
              }
              function si86(){
                document.getElementById("progres").style.width = "602px";
  document.getElementById("sexto11").style.display = "none";
              hAptitudes++;}
              function no86(){
                document.getElementById("progres").style.width = "602px";
  document.getElementById("sexto11").style.display = "none"; 
              }
              function si87(){
                document.getElementById("progres").style.width = "609px";
  document.getElementById("septimo11").style.display = "none";
              sIntereses++;}
              function no87(){
                document.getElementById("progres").style.width = "609px";
  document.getElementById("septimo11").style.display = "none"; 
              }
              function si88(){
                document.getElementById("progres").style.width = "616px";
  document.getElementById("octavo11").style.display = "none";
              eIntereses++;
 document.getElementById("siguiente11").style.display = "block";
            }
            function no88(){
               document.getElementById("siguiente11").style.display = "block";
               document.getElementById("progres").style.width = "616px";
  document.getElementById("octavo11").style.display = "none";
            }


              function si89(){
                document.getElementById("progres").style.width = "623px";
  document.getElementById("primero12").style.display = "none";
              hIntereses++;}
              function no89(){
               document.getElementById("progres").style.width = "623px";
  document.getElementById("primero12").style.display = "none";  
              }
              function si90(){
                document.getElementById("progres").style.width = "630px";
  document.getElementById("segundo12").style.display = "none";
              iAptitudes++;}
              function no90(){
               document.getElementById("progres").style.width = "630px";
  document.getElementById("segundo12").style.display = "none";  
              }
              function si91(){
                document.getElementById("progres").style.width = "637px";
  document.getElementById("tercero12").style.display = "none";
              cIntereses++;}
              function no91(){
              document.getElementById("progres").style.width = "637px";
  document.getElementById("tercero12").style.display = "none";  
              }
              function si92(){
                document.getElementById("progres").style.width = "644px";
  document.getElementById("cuarto12").style.display = "none";
              sIntereses++;}
              function no92(){
                 document.getElementById("progres").style.width = "644px";
  document.getElementById("cuarto12").style.display = "none";
              }
              function si93(){
                document.getElementById("progres").style.width = "651px";
  document.getElementById("quinto12").style.display = "none";
              eIntereses++;}
              function no93(){
                document.getElementById("progres").style.width = "651px";
  document.getElementById("quinto12").style.display = "none";
              }
              function si94(){
                document.getElementById("progres").style.width = "658px";
  document.getElementById("sexto12").style.display = "none";
              eAptitudes++;}
              function no94(){
               document.getElementById("progres").style.width = "658px";
  document.getElementById("sexto12").style.display = "none"; 
              }
              function si95(){
                document.getElementById("progres").style.width = "665px";
  document.getElementById("septimo12").style.display = "none";
              hIntereses++;}
              function no95(){
               document.getElementById("progres").style.width = "665px";
  document.getElementById("septimo12").style.display = "none"; 
              }
              function si96(){
                document.getElementById("progres").style.width = "672px";
  document.getElementById("octavo12").style.display = "none";
              aIntereses++;
 document.getElementById("siguiente12").style.display = "block";
            }
            function no96(){
               document.getElementById("siguiente12").style.display = "block";
               document.getElementById("progres").style.width = "672px";
  document.getElementById("octavo12").style.display = "none";
            }


              function si97(){
                document.getElementById("progres").style.width = "684px";
  document.getElementById("primero13").style.display = "none";
              iIntereses++;}
              function no97(){
                 document.getElementById("progres").style.width = "684px";
  document.getElementById("primero13").style.display = "none";
              }
              function si98(){
                document.getElementById("progres").style.width = "708px";
  document.getElementById("segundo13").style.display = "none";
              cIntereses++;}
              function no98(){
                document.getElementById("progres").style.width = "708px";
  document.getElementById("segundo13").style.display = "none";
              }
              

















        	function siguiente(){
        	document.getElementById("primero").style.display = "none";
        	document.getElementById("segundo").style.display = "none";
        	document.getElementById("tercero").style.display = "none";
        	document.getElementById("cuarto").style.display = "none";
        	document.getElementById("quinto").style.display = "none";
        	document.getElementById("sexto").style.display = "none";
        	document.getElementById("septimo").style.display = "none";
        	document.getElementById("octavo").style.display = "none";
        	document.getElementById("siguiente").style.display = "none";

        	document.getElementById("primero2").style.display = "block";
        	document.getElementById("segundo2").style.display = "block";
        	document.getElementById("tercero2").style.display = "block";
        	document.getElementById("cuarto2").style.display = "block";
        	document.getElementById("quinto2").style.display = "block";
        	document.getElementById("sexto2").style.display = "block";
        	document.getElementById("septimo2").style.display = "block";
        	document.getElementById("octavo2").style.display = "block";
        
        	}
        	function siguiente2(){
        		document.getElementById("primero").style.display = "none";
        	document.getElementById("segundo").style.display = "none";
        	document.getElementById("tercero").style.display = "none";
        	document.getElementById("cuarto").style.display = "none";
        	document.getElementById("quinto").style.display = "none";
        	document.getElementById("sexto").style.display = "none";
        	document.getElementById("septimo").style.display = "none";
        	document.getElementById("octavo").style.display = "none";
        	document.getElementById("siguiente").style.display = "none";

        	document.getElementById("primero2").style.display = "none";
        	document.getElementById("segundo2").style.display = "none";
        	document.getElementById("tercero2").style.display = "none";
        	document.getElementById("cuarto2").style.display = "none";
        	document.getElementById("quinto2").style.display = "none";
        	document.getElementById("sexto2").style.display = "none";
        	document.getElementById("septimo2").style.display = "none";
        	document.getElementById("octavo2").style.display = "none";
        	document.getElementById("siguiente2").style.display = "none";


        	document.getElementById("primero3").style.display = "block";
        	document.getElementById("segundo3").style.display = "block";
        	document.getElementById("tercero3").style.display = "block";
        	document.getElementById("cuarto3").style.display = "block";
        	document.getElementById("quinto3").style.display = "block";
        	document.getElementById("sexto3").style.display = "block";
        	document.getElementById("septimo3").style.display = "block";
        	document.getElementById("octavo3").style.display = "block";
        	


        	}
        	function siguiente3(){
        			document.getElementById("primero").style.display = "none";
        	document.getElementById("segundo").style.display = "none";
        	document.getElementById("tercero").style.display = "none";
        	document.getElementById("cuarto").style.display = "none";
        	document.getElementById("quinto").style.display = "none";
        	document.getElementById("sexto").style.display = "none";
        	document.getElementById("septimo").style.display = "none";
        	document.getElementById("octavo").style.display = "none";
        	document.getElementById("siguiente").style.display = "none";

        	document.getElementById("primero2").style.display = "none";
        	document.getElementById("segundo2").style.display = "none";
        	document.getElementById("tercero2").style.display = "none";
        	document.getElementById("cuarto2").style.display = "none";
        	document.getElementById("quinto2").style.display = "none";
        	document.getElementById("sexto2").style.display = "none";
        	document.getElementById("septimo2").style.display = "none";
        	document.getElementById("octavo2").style.display = "none";
        	document.getElementById("siguiente2").style.display = "none";

        	document.getElementById("primero3").style.display = "none";
        	document.getElementById("segundo3").style.display = "none";
        	document.getElementById("tercero3").style.display = "none";
        	document.getElementById("cuarto3").style.display = "none";
        	document.getElementById("quinto3").style.display = "none";
        	document.getElementById("sexto3").style.display = "none";
        	document.getElementById("septimo3").style.display = "none";
        	document.getElementById("octavo3").style.display = "none";
        	document.getElementById("siguiente3").style.display = "none";

        	document.getElementById("primero4").style.display = "block";
        	document.getElementById("segundo4").style.display = "block";
        	document.getElementById("tercero4").style.display = "block";
        	document.getElementById("cuarto4").style.display = "block";
        	document.getElementById("quinto4").style.display = "block";
        	document.getElementById("sexto4").style.display = "block";
        	document.getElementById("septimo4").style.display = "block";
        	document.getElementById("octavo4").style.display = "block";
        	


        	}
        	function siguiente4(){
        				document.getElementById("primero").style.display = "none";
        	document.getElementById("segundo").style.display = "none";
        	document.getElementById("tercero").style.display = "none";
        	document.getElementById("cuarto").style.display = "none";
        	document.getElementById("quinto").style.display = "none";
        	document.getElementById("sexto").style.display = "none";
        	document.getElementById("septimo").style.display = "none";
        	document.getElementById("octavo").style.display = "none";
        	document.getElementById("siguiente").style.display = "none";

        	document.getElementById("primero2").style.display = "none";
        	document.getElementById("segundo2").style.display = "none";
        	document.getElementById("tercero2").style.display = "none";
        	document.getElementById("cuarto2").style.display = "none";
        	document.getElementById("quinto2").style.display = "none";
        	document.getElementById("sexto2").style.display = "none";
        	document.getElementById("septimo2").style.display = "none";
        	document.getElementById("octavo2").style.display = "none";
        	document.getElementById("siguiente2").style.display = "none";

        	document.getElementById("primero3").style.display = "none";
        	document.getElementById("segundo3").style.display = "none";
        	document.getElementById("tercero3").style.display = "none";
        	document.getElementById("cuarto3").style.display = "none";
        	document.getElementById("quinto3").style.display = "none";
        	document.getElementById("sexto3").style.display = "none";
        	document.getElementById("septimo3").style.display = "none";
        	document.getElementById("octavo3").style.display = "none";
        	document.getElementById("siguiente3").style.display = "none";

        	document.getElementById("primero4").style.display = "none";
        	document.getElementById("segundo4").style.display = "none";
        	document.getElementById("tercero4").style.display = "none";
        	document.getElementById("cuarto4").style.display = "none";
        	document.getElementById("quinto4").style.display = "none";
        	document.getElementById("sexto4").style.display = "none";
        	document.getElementById("septimo4").style.display = "none";
        	document.getElementById("octavo4").style.display = "none";
        	document.getElementById("siguiente4").style.display = "none";

        	document.getElementById("primero5").style.display = "block";
        	document.getElementById("segundo5").style.display = "block";
        	document.getElementById("tercero5").style.display = "block";
        	document.getElementById("cuarto5").style.display = "block";
        	document.getElementById("quinto5").style.display = "block";
        	document.getElementById("sexto5").style.display = "block";
        	document.getElementById("septimo5").style.display = "block";
        	document.getElementById("octavo5").style.display = "block";
        	

        	}

           function siguiente5(){
           				document.getElementById("primero").style.display = "none";
        	document.getElementById("segundo").style.display = "none";
        	document.getElementById("tercero").style.display = "none";
        	document.getElementById("cuarto").style.display = "none";
        	document.getElementById("quinto").style.display = "none";
        	document.getElementById("sexto").style.display = "none";
        	document.getElementById("septimo").style.display = "none";
        	document.getElementById("octavo").style.display = "none";
        	document.getElementById("siguiente").style.display = "none";

        	document.getElementById("primero2").style.display = "none";
        	document.getElementById("segundo2").style.display = "none";
        	document.getElementById("tercero2").style.display = "none";
        	document.getElementById("cuarto2").style.display = "none";
        	document.getElementById("quinto2").style.display = "none";
        	document.getElementById("sexto2").style.display = "none";
        	document.getElementById("septimo2").style.display = "none";
        	document.getElementById("octavo2").style.display = "none";
        	document.getElementById("siguiente2").style.display = "none";

        	document.getElementById("primero3").style.display = "none";
        	document.getElementById("segundo3").style.display = "none";
        	document.getElementById("tercero3").style.display = "none";
        	document.getElementById("cuarto3").style.display = "none";
        	document.getElementById("quinto3").style.display = "none";
        	document.getElementById("sexto3").style.display = "none";
        	document.getElementById("septimo3").style.display = "none";
        	document.getElementById("octavo3").style.display = "none";
        	document.getElementById("siguiente3").style.display = "none";

        	document.getElementById("primero4").style.display = "none";
        	document.getElementById("segundo4").style.display = "none";
        	document.getElementById("tercero4").style.display = "none";
        	document.getElementById("cuarto4").style.display = "none";
        	document.getElementById("quinto4").style.display = "none";
        	document.getElementById("sexto4").style.display = "none";
        	document.getElementById("septimo4").style.display = "none";
        	document.getElementById("octavo4").style.display = "none";
        	document.getElementById("siguiente4").style.display = "none";

        	document.getElementById("primero5").style.display = "none";
        	document.getElementById("segundo5").style.display = "none";
        	document.getElementById("tercero5").style.display = "none";
        	document.getElementById("cuarto5").style.display = "none";
        	document.getElementById("quinto5").style.display = "none";
        	document.getElementById("sexto5").style.display = "none";
        	document.getElementById("septimo5").style.display = "none";
        	document.getElementById("octavo5").style.display = "none";
        	document.getElementById("siguiente5").style.display = "none";

        	document.getElementById("primero6").style.display = "block";
        	document.getElementById("segundo6").style.display = "block";
        	document.getElementById("tercero6").style.display = "block";
        	document.getElementById("cuarto6").style.display = "block";
        	document.getElementById("quinto6").style.display = "block";
        	document.getElementById("sexto6").style.display = "block";
        	document.getElementById("septimo6").style.display = "block";
        	document.getElementById("octavo6").style.display = "block";
        



           }

           function siguiente6(){
           		document.getElementById("primero").style.display = "none";
        	document.getElementById("segundo").style.display = "none";
        	document.getElementById("tercero").style.display = "none";
        	document.getElementById("cuarto").style.display = "none";
        	document.getElementById("quinto").style.display = "none";
        	document.getElementById("sexto").style.display = "none";
        	document.getElementById("septimo").style.display = "none";
        	document.getElementById("octavo").style.display = "none";
        	document.getElementById("siguiente").style.display = "none";

        	document.getElementById("primero2").style.display = "none";
        	document.getElementById("segundo2").style.display = "none";
        	document.getElementById("tercero2").style.display = "none";
        	document.getElementById("cuarto2").style.display = "none";
        	document.getElementById("quinto2").style.display = "none";
        	document.getElementById("sexto2").style.display = "none";
        	document.getElementById("septimo2").style.display = "none";
        	document.getElementById("octavo2").style.display = "none";
        	document.getElementById("siguiente2").style.display = "none";

        	document.getElementById("primero3").style.display = "none";
        	document.getElementById("segundo3").style.display = "none";
        	document.getElementById("tercero3").style.display = "none";
        	document.getElementById("cuarto3").style.display = "none";
        	document.getElementById("quinto3").style.display = "none";
        	document.getElementById("sexto3").style.display = "none";
        	document.getElementById("septimo3").style.display = "none";
        	document.getElementById("octavo3").style.display = "none";
        	document.getElementById("siguiente3").style.display = "none";

        	document.getElementById("primero4").style.display = "none";
        	document.getElementById("segundo4").style.display = "none";
        	document.getElementById("tercero4").style.display = "none";
        	document.getElementById("cuarto4").style.display = "none";
        	document.getElementById("quinto4").style.display = "none";
        	document.getElementById("sexto4").style.display = "none";
        	document.getElementById("septimo4").style.display = "none";
        	document.getElementById("octavo4").style.display = "none";
        	document.getElementById("siguiente4").style.display = "none";

        	document.getElementById("primero5").style.display = "none";
        	document.getElementById("segundo5").style.display = "none";
        	document.getElementById("tercero5").style.display = "none";
        	document.getElementById("cuarto5").style.display = "none";
        	document.getElementById("quinto5").style.display = "none";
        	document.getElementById("sexto5").style.display = "none";
        	document.getElementById("septimo5").style.display = "none";
        	document.getElementById("octavo5").style.display = "none";
        	document.getElementById("siguiente5").style.display = "none";

        	document.getElementById("primero6").style.display = "none";
        	document.getElementById("segundo6").style.display = "none";
        	document.getElementById("tercero6").style.display = "none";
        	document.getElementById("cuarto6").style.display = "none";
        	document.getElementById("quinto6").style.display = "none";
        	document.getElementById("sexto6").style.display = "none";
        	document.getElementById("septimo6").style.display = "none";
        	document.getElementById("octavo6").style.display = "none";
        	document.getElementById("siguiente6").style.display = "none";

        	document.getElementById("primero7").style.display = "block";
        	document.getElementById("segundo7").style.display = "block";
        	document.getElementById("tercero7").style.display = "block";
        	document.getElementById("cuarto7").style.display = "block";
        	document.getElementById("quinto7").style.display = "block";
        	document.getElementById("sexto7").style.display = "block";
        	document.getElementById("septimo7").style.display = "block";
        	document.getElementById("octavo7").style.display = "block";
        	
        	



           }

           function siguiente7(){
           			document.getElementById("primero").style.display = "none";
        	document.getElementById("segundo").style.display = "none";
        	document.getElementById("tercero").style.display = "none";
        	document.getElementById("cuarto").style.display = "none";
        	document.getElementById("quinto").style.display = "none";
        	document.getElementById("sexto").style.display = "none";
        	document.getElementById("septimo").style.display = "none";
        	document.getElementById("octavo").style.display = "none";
        	document.getElementById("siguiente").style.display = "none";

        	document.getElementById("primero2").style.display = "none";
        	document.getElementById("segundo2").style.display = "none";
        	document.getElementById("tercero2").style.display = "none";
        	document.getElementById("cuarto2").style.display = "none";
        	document.getElementById("quinto2").style.display = "none";
        	document.getElementById("sexto2").style.display = "none";
        	document.getElementById("septimo2").style.display = "none";
        	document.getElementById("octavo2").style.display = "none";
        	document.getElementById("siguiente2").style.display = "none";

        	document.getElementById("primero3").style.display = "none";
        	document.getElementById("segundo3").style.display = "none";
        	document.getElementById("tercero3").style.display = "none";
        	document.getElementById("cuarto3").style.display = "none";
        	document.getElementById("quinto3").style.display = "none";
        	document.getElementById("sexto3").style.display = "none";
        	document.getElementById("septimo3").style.display = "none";
        	document.getElementById("octavo3").style.display = "none";
        	document.getElementById("siguiente3").style.display = "none";

        	document.getElementById("primero4").style.display = "none";
        	document.getElementById("segundo4").style.display = "none";
        	document.getElementById("tercero4").style.display = "none";
        	document.getElementById("cuarto4").style.display = "none";
        	document.getElementById("quinto4").style.display = "none";
        	document.getElementById("sexto4").style.display = "none";
        	document.getElementById("septimo4").style.display = "none";
        	document.getElementById("octavo4").style.display = "none";
        	document.getElementById("siguiente4").style.display = "none";

        	document.getElementById("primero5").style.display = "none";
        	document.getElementById("segundo5").style.display = "none";
        	document.getElementById("tercero5").style.display = "none";
        	document.getElementById("cuarto5").style.display = "none";
        	document.getElementById("quinto5").style.display = "none";
        	document.getElementById("sexto5").style.display = "none";
        	document.getElementById("septimo5").style.display = "none";
        	document.getElementById("octavo5").style.display = "none";
        	document.getElementById("siguiente5").style.display = "none";

        	document.getElementById("primero6").style.display = "none";
        	document.getElementById("segundo6").style.display = "none";
        	document.getElementById("tercero6").style.display = "none";
        	document.getElementById("cuarto6").style.display = "none";
        	document.getElementById("quinto6").style.display = "none";
        	document.getElementById("sexto6").style.display = "none";
        	document.getElementById("septimo6").style.display = "none";
        	document.getElementById("octavo6").style.display = "none";
        	document.getElementById("siguiente6").style.display = "none";

        	document.getElementById("primero7").style.display = "none";
        	document.getElementById("segundo7").style.display = "none";
        	document.getElementById("tercero7").style.display = "none";
        	document.getElementById("cuarto7").style.display = "none";
        	document.getElementById("quinto7").style.display = "none";
        	document.getElementById("sexto7").style.display = "none";
        	document.getElementById("septimo7").style.display = "none";
        	document.getElementById("octavo7").style.display = "none";
        	document.getElementById("siguiente7").style.display = "none";
        	

        	document.getElementById("primero8").style.display = "block";
        	document.getElementById("segundo8").style.display = "block";
        	document.getElementById("tercero8").style.display = "block";
        	document.getElementById("cuarto8").style.display = "block";
        	document.getElementById("quinto8").style.display = "block";
        	document.getElementById("sexto8").style.display = "block";
        	document.getElementById("septimo8").style.display = "block";
        	document.getElementById("octavo8").style.display = "block";
        	
        	

           }
           function siguiente8(){
           	document.getElementById("primero").style.display = "none";
        	document.getElementById("segundo").style.display = "none";
        	document.getElementById("tercero").style.display = "none";
        	document.getElementById("cuarto").style.display = "none";
        	document.getElementById("quinto").style.display = "none";
        	document.getElementById("sexto").style.display = "none";
        	document.getElementById("septimo").style.display = "none";
        	document.getElementById("octavo").style.display = "none";
        	document.getElementById("siguiente").style.display = "none";

        	document.getElementById("primero2").style.display = "none";
        	document.getElementById("segundo2").style.display = "none";
        	document.getElementById("tercero2").style.display = "none";
        	document.getElementById("cuarto2").style.display = "none";
        	document.getElementById("quinto2").style.display = "none";
        	document.getElementById("sexto2").style.display = "none";
        	document.getElementById("septimo2").style.display = "none";
        	document.getElementById("octavo2").style.display = "none";
        	document.getElementById("siguiente2").style.display = "none";

        	document.getElementById("primero3").style.display = "none";
        	document.getElementById("segundo3").style.display = "none";
        	document.getElementById("tercero3").style.display = "none";
        	document.getElementById("cuarto3").style.display = "none";
        	document.getElementById("quinto3").style.display = "none";
        	document.getElementById("sexto3").style.display = "none";
        	document.getElementById("septimo3").style.display = "none";
        	document.getElementById("octavo3").style.display = "none";
        	document.getElementById("siguiente3").style.display = "none";

        	document.getElementById("primero4").style.display = "none";
        	document.getElementById("segundo4").style.display = "none";
        	document.getElementById("tercero4").style.display = "none";
        	document.getElementById("cuarto4").style.display = "none";
        	document.getElementById("quinto4").style.display = "none";
        	document.getElementById("sexto4").style.display = "none";
        	document.getElementById("septimo4").style.display = "none";
        	document.getElementById("octavo4").style.display = "none";
        	document.getElementById("siguiente4").style.display = "none";

        	document.getElementById("primero5").style.display = "none";
        	document.getElementById("segundo5").style.display = "none";
        	document.getElementById("tercero5").style.display = "none";
        	document.getElementById("cuarto5").style.display = "none";
        	document.getElementById("quinto5").style.display = "none";
        	document.getElementById("sexto5").style.display = "none";
        	document.getElementById("septimo5").style.display = "none";
        	document.getElementById("octavo5").style.display = "none";
        	document.getElementById("siguiente5").style.display = "none";

        	document.getElementById("primero6").style.display = "none";
        	document.getElementById("segundo6").style.display = "none";
        	document.getElementById("tercero6").style.display = "none";
        	document.getElementById("cuarto6").style.display = "none";
        	document.getElementById("quinto6").style.display = "none";
        	document.getElementById("sexto6").style.display = "none";
        	document.getElementById("septimo6").style.display = "none";
        	document.getElementById("octavo6").style.display = "none";
        	document.getElementById("siguiente6").style.display = "none";

        	document.getElementById("primero7").style.display = "none";
        	document.getElementById("segundo7").style.display = "none";
        	document.getElementById("tercero7").style.display = "none";
        	document.getElementById("cuarto7").style.display = "none";
        	document.getElementById("quinto7").style.display = "none";
        	document.getElementById("sexto7").style.display = "none";
        	document.getElementById("septimo7").style.display = "none";
        	document.getElementById("octavo7").style.display = "none";
        	document.getElementById("siguiente7").style.display = "none";
        	

        	document.getElementById("primero8").style.display = "none";
        	document.getElementById("segundo8").style.display = "none";
        	document.getElementById("tercero8").style.display = "none";
        	document.getElementById("cuarto8").style.display = "none";
        	document.getElementById("quinto8").style.display = "none";
        	document.getElementById("sexto8").style.display = "none";
        	document.getElementById("septimo8").style.display = "none";
        	document.getElementById("octavo8").style.display = "none";
        	document.getElementById("siguiente8").style.display = "none";

        	document.getElementById("primero9").style.display = "block";
        	document.getElementById("segundo9").style.display = "block";
        	document.getElementById("tercero9").style.display = "block";
        	document.getElementById("cuarto9").style.display = "block";
        	document.getElementById("quinto9").style.display = "block";
        	document.getElementById("sexto9").style.display = "block";
        	document.getElementById("septimo9").style.display = "block";
        	document.getElementById("octavo9").style.display = "block";
        
        	
           }
           function siguiente9(){
           	document.getElementById("primero").style.display = "none";
        	document.getElementById("segundo").style.display = "none";
        	document.getElementById("tercero").style.display = "none";
        	document.getElementById("cuarto").style.display = "none";
        	document.getElementById("quinto").style.display = "none";
        	document.getElementById("sexto").style.display = "none";
        	document.getElementById("septimo").style.display = "none";
        	document.getElementById("octavo").style.display = "none";
        	document.getElementById("siguiente").style.display = "none";

        	document.getElementById("primero2").style.display = "none";
        	document.getElementById("segundo2").style.display = "none";
        	document.getElementById("tercero2").style.display = "none";
        	document.getElementById("cuarto2").style.display = "none";
        	document.getElementById("quinto2").style.display = "none";
        	document.getElementById("sexto2").style.display = "none";
        	document.getElementById("septimo2").style.display = "none";
        	document.getElementById("octavo2").style.display = "none";
        	document.getElementById("siguiente2").style.display = "none";

        	document.getElementById("primero3").style.display = "none";
        	document.getElementById("segundo3").style.display = "none";
        	document.getElementById("tercero3").style.display = "none";
        	document.getElementById("cuarto3").style.display = "none";
        	document.getElementById("quinto3").style.display = "none";
        	document.getElementById("sexto3").style.display = "none";
        	document.getElementById("septimo3").style.display = "none";
        	document.getElementById("octavo3").style.display = "none";
        	document.getElementById("siguiente3").style.display = "none";

        	document.getElementById("primero4").style.display = "none";
        	document.getElementById("segundo4").style.display = "none";
        	document.getElementById("tercero4").style.display = "none";
        	document.getElementById("cuarto4").style.display = "none";
        	document.getElementById("quinto4").style.display = "none";
        	document.getElementById("sexto4").style.display = "none";
        	document.getElementById("septimo4").style.display = "none";
        	document.getElementById("octavo4").style.display = "none";
        	document.getElementById("siguiente4").style.display = "none";

        	document.getElementById("primero5").style.display = "none";
        	document.getElementById("segundo5").style.display = "none";
        	document.getElementById("tercero5").style.display = "none";
        	document.getElementById("cuarto5").style.display = "none";
        	document.getElementById("quinto5").style.display = "none";
        	document.getElementById("sexto5").style.display = "none";
        	document.getElementById("septimo5").style.display = "none";
        	document.getElementById("octavo5").style.display = "none";
        	document.getElementById("siguiente5").style.display = "none";

        	document.getElementById("primero6").style.display = "none";
        	document.getElementById("segundo6").style.display = "none";
        	document.getElementById("tercero6").style.display = "none";
        	document.getElementById("cuarto6").style.display = "none";
        	document.getElementById("quinto6").style.display = "none";
        	document.getElementById("sexto6").style.display = "none";
        	document.getElementById("septimo6").style.display = "none";
        	document.getElementById("octavo6").style.display = "none";
        	document.getElementById("siguiente6").style.display = "none";

        	document.getElementById("primero7").style.display = "none";
        	document.getElementById("segundo7").style.display = "none";
        	document.getElementById("tercero7").style.display = "none";
        	document.getElementById("cuarto7").style.display = "none";
        	document.getElementById("quinto7").style.display = "none";
        	document.getElementById("sexto7").style.display = "none";
        	document.getElementById("septimo7").style.display = "none";
        	document.getElementById("octavo7").style.display = "none";
        	document.getElementById("siguiente7").style.display = "none";
        	

        	document.getElementById("primero8").style.display = "none";
        	document.getElementById("segundo8").style.display = "none";
        	document.getElementById("tercero8").style.display = "none";
        	document.getElementById("cuarto8").style.display = "none";
        	document.getElementById("quinto8").style.display = "none";
        	document.getElementById("sexto8").style.display = "none";
        	document.getElementById("septimo8").style.display = "none";
        	document.getElementById("octavo8").style.display = "none";
        	document.getElementById("siguiente8").style.display = "none";

        	document.getElementById("primero9").style.display = "none";
        	document.getElementById("segundo9").style.display = "none";
        	document.getElementById("tercero9").style.display = "none";
        	document.getElementById("cuarto9").style.display = "none";
        	document.getElementById("quinto9").style.display = "none";
        	document.getElementById("sexto9").style.display = "none";
        	document.getElementById("septimo9").style.display = "none";
        	document.getElementById("octavo9").style.display = "none";
        	document.getElementById("siguiente9").style.display = "none";
        	document.getElementById("resultado").style.display = "none";

        	document.getElementById("primero10").style.display = "block";
        	document.getElementById("segundo10").style.display = "block";
        	document.getElementById("tercero10").style.display = "block";
        	document.getElementById("cuarto10").style.display = "block";
        	document.getElementById("quinto10").style.display = "block";
        	document.getElementById("sexto10").style.display = "block";
        	document.getElementById("septimo10").style.display = "block";
        	document.getElementById("octavo10").style.display = "block";
        
        	
           }
           function siguiente10(){
           	document.getElementById("primero").style.display = "none";
        	document.getElementById("segundo").style.display = "none";
        	document.getElementById("tercero").style.display = "none";
        	document.getElementById("cuarto").style.display = "none";
        	document.getElementById("quinto").style.display = "none";
        	document.getElementById("sexto").style.display = "none";
        	document.getElementById("septimo").style.display = "none";
        	document.getElementById("octavo").style.display = "none";
        	document.getElementById("siguiente").style.display = "none";

        	document.getElementById("primero2").style.display = "none";
        	document.getElementById("segundo2").style.display = "none";
        	document.getElementById("tercero2").style.display = "none";
        	document.getElementById("cuarto2").style.display = "none";
        	document.getElementById("quinto2").style.display = "none";
        	document.getElementById("sexto2").style.display = "none";
        	document.getElementById("septimo2").style.display = "none";
        	document.getElementById("octavo2").style.display = "none";
        	document.getElementById("siguiente2").style.display = "none";

        	document.getElementById("primero3").style.display = "none";
        	document.getElementById("segundo3").style.display = "none";
        	document.getElementById("tercero3").style.display = "none";
        	document.getElementById("cuarto3").style.display = "none";
        	document.getElementById("quinto3").style.display = "none";
        	document.getElementById("sexto3").style.display = "none";
        	document.getElementById("septimo3").style.display = "none";
        	document.getElementById("octavo3").style.display = "none";
        	document.getElementById("siguiente3").style.display = "none";

        	document.getElementById("primero4").style.display = "none";
        	document.getElementById("segundo4").style.display = "none";
        	document.getElementById("tercero4").style.display = "none";
        	document.getElementById("cuarto4").style.display = "none";
        	document.getElementById("quinto4").style.display = "none";
        	document.getElementById("sexto4").style.display = "none";
        	document.getElementById("septimo4").style.display = "none";
        	document.getElementById("octavo4").style.display = "none";
        	document.getElementById("siguiente4").style.display = "none";

        	document.getElementById("primero5").style.display = "none";
        	document.getElementById("segundo5").style.display = "none";
        	document.getElementById("tercero5").style.display = "none";
        	document.getElementById("cuarto5").style.display = "none";
        	document.getElementById("quinto5").style.display = "none";
        	document.getElementById("sexto5").style.display = "none";
        	document.getElementById("septimo5").style.display = "none";
        	document.getElementById("octavo5").style.display = "none";
        	document.getElementById("siguiente5").style.display = "none";

        	document.getElementById("primero6").style.display = "none";
        	document.getElementById("segundo6").style.display = "none";
        	document.getElementById("tercero6").style.display = "none";
        	document.getElementById("cuarto6").style.display = "none";
        	document.getElementById("quinto6").style.display = "none";
        	document.getElementById("sexto6").style.display = "none";
        	document.getElementById("septimo6").style.display = "none";
        	document.getElementById("octavo6").style.display = "none";
        	document.getElementById("siguiente6").style.display = "none";

        	document.getElementById("primero7").style.display = "none";
        	document.getElementById("segundo7").style.display = "none";
        	document.getElementById("tercero7").style.display = "none";
        	document.getElementById("cuarto7").style.display = "none";
        	document.getElementById("quinto7").style.display = "none";
        	document.getElementById("sexto7").style.display = "none";
        	document.getElementById("septimo7").style.display = "none";
        	document.getElementById("octavo7").style.display = "none";
        	document.getElementById("siguiente7").style.display = "none";
        	

        	document.getElementById("primero8").style.display = "none";
        	document.getElementById("segundo8").style.display = "none";
        	document.getElementById("tercero8").style.display = "none";
        	document.getElementById("cuarto8").style.display = "none";
        	document.getElementById("quinto8").style.display = "none";
        	document.getElementById("sexto8").style.display = "none";
        	document.getElementById("septimo8").style.display = "none";
        	document.getElementById("octavo8").style.display = "none";
        	document.getElementById("siguiente8").style.display = "none";

        	document.getElementById("primero9").style.display = "none";
        	document.getElementById("segundo9").style.display = "none";
        	document.getElementById("tercero9").style.display = "none";
        	document.getElementById("cuarto9").style.display = "none";
        	document.getElementById("quinto9").style.display = "none";
        	document.getElementById("sexto9").style.display = "none";
        	document.getElementById("septimo9").style.display = "none";
        	document.getElementById("octavo9").style.display = "none";
        	document.getElementById("siguiente9").style.display = "none";
        	document.getElementById("resultado").style.display = "none";

        	document.getElementById("primero10").style.display = "none";
        	document.getElementById("segundo10").style.display = "none";
        	document.getElementById("tercero10").style.display = "none";
        	document.getElementById("cuarto10").style.display = "none";
        	document.getElementById("quinto10").style.display = "none";
        	document.getElementById("sexto10").style.display = "none";
        	document.getElementById("septimo10").style.display = "none";
        	document.getElementById("octavo10").style.display = "none";
        	document.getElementById("siguiente10").style.display = "none";

        	document.getElementById("primero11").style.display = "block";
        	document.getElementById("segundo11").style.display = "block";
        	document.getElementById("tercero11").style.display = "block";
        	document.getElementById("cuarto11").style.display = "block";
        	document.getElementById("quinto11").style.display = "block";
        	document.getElementById("sexto11").style.display = "block";
        	document.getElementById("septimo11").style.display = "block";
        	document.getElementById("octavo11").style.display = "block";
        


           }
           function siguiente11(){
           	document.getElementById("primero").style.display = "none";
        	document.getElementById("segundo").style.display = "none";
        	document.getElementById("tercero").style.display = "none";
        	document.getElementById("cuarto").style.display = "none";
        	document.getElementById("quinto").style.display = "none";
        	document.getElementById("sexto").style.display = "none";
        	document.getElementById("septimo").style.display = "none";
        	document.getElementById("octavo").style.display = "none";
        	document.getElementById("siguiente").style.display = "none";

        	document.getElementById("primero2").style.display = "none";
        	document.getElementById("segundo2").style.display = "none";
        	document.getElementById("tercero2").style.display = "none";
        	document.getElementById("cuarto2").style.display = "none";
        	document.getElementById("quinto2").style.display = "none";
        	document.getElementById("sexto2").style.display = "none";
        	document.getElementById("septimo2").style.display = "none";
        	document.getElementById("octavo2").style.display = "none";
        	document.getElementById("siguiente2").style.display = "none";

        	document.getElementById("primero3").style.display = "none";
        	document.getElementById("segundo3").style.display = "none";
        	document.getElementById("tercero3").style.display = "none";
        	document.getElementById("cuarto3").style.display = "none";
        	document.getElementById("quinto3").style.display = "none";
        	document.getElementById("sexto3").style.display = "none";
        	document.getElementById("septimo3").style.display = "none";
        	document.getElementById("octavo3").style.display = "none";
        	document.getElementById("siguiente3").style.display = "none";

        	document.getElementById("primero4").style.display = "none";
        	document.getElementById("segundo4").style.display = "none";
        	document.getElementById("tercero4").style.display = "none";
        	document.getElementById("cuarto4").style.display = "none";
        	document.getElementById("quinto4").style.display = "none";
        	document.getElementById("sexto4").style.display = "none";
        	document.getElementById("septimo4").style.display = "none";
        	document.getElementById("octavo4").style.display = "none";
        	document.getElementById("siguiente4").style.display = "none";

        	document.getElementById("primero5").style.display = "none";
        	document.getElementById("segundo5").style.display = "none";
        	document.getElementById("tercero5").style.display = "none";
        	document.getElementById("cuarto5").style.display = "none";
        	document.getElementById("quinto5").style.display = "none";
        	document.getElementById("sexto5").style.display = "none";
        	document.getElementById("septimo5").style.display = "none";
        	document.getElementById("octavo5").style.display = "none";
        	document.getElementById("siguiente5").style.display = "none";

        	document.getElementById("primero6").style.display = "none";
        	document.getElementById("segundo6").style.display = "none";
        	document.getElementById("tercero6").style.display = "none";
        	document.getElementById("cuarto6").style.display = "none";
        	document.getElementById("quinto6").style.display = "none";
        	document.getElementById("sexto6").style.display = "none";
        	document.getElementById("septimo6").style.display = "none";
        	document.getElementById("octavo6").style.display = "none";
        	document.getElementById("siguiente6").style.display = "none";

        	document.getElementById("primero7").style.display = "none";
        	document.getElementById("segundo7").style.display = "none";
        	document.getElementById("tercero7").style.display = "none";
        	document.getElementById("cuarto7").style.display = "none";
        	document.getElementById("quinto7").style.display = "none";
        	document.getElementById("sexto7").style.display = "none";
        	document.getElementById("septimo7").style.display = "none";
        	document.getElementById("octavo7").style.display = "none";
        	document.getElementById("siguiente7").style.display = "none";
        	

        	document.getElementById("primero8").style.display = "none";
        	document.getElementById("segundo8").style.display = "none";
        	document.getElementById("tercero8").style.display = "none";
        	document.getElementById("cuarto8").style.display = "none";
        	document.getElementById("quinto8").style.display = "none";
        	document.getElementById("sexto8").style.display = "none";
        	document.getElementById("septimo8").style.display = "none";
        	document.getElementById("octavo8").style.display = "none";
        	document.getElementById("siguiente8").style.display = "none";

        	document.getElementById("primero9").style.display = "none";
        	document.getElementById("segundo9").style.display = "none";
        	document.getElementById("tercero9").style.display = "none";
        	document.getElementById("cuarto9").style.display = "none";
        	document.getElementById("quinto9").style.display = "none";
        	document.getElementById("sexto9").style.display = "none";
        	document.getElementById("septimo9").style.display = "none";
        	document.getElementById("octavo9").style.display = "none";
        	document.getElementById("siguiente9").style.display = "none";
        	document.getElementById("resultado").style.display = "none";

        	document.getElementById("primero10").style.display = "none";
        	document.getElementById("segundo10").style.display = "none";
        	document.getElementById("tercero10").style.display = "none";
        	document.getElementById("cuarto10").style.display = "none";
        	document.getElementById("quinto10").style.display = "none";
        	document.getElementById("sexto10").style.display = "none";
        	document.getElementById("septimo10").style.display = "none";
        	document.getElementById("octavo10").style.display = "none";
        	document.getElementById("siguiente10").style.display = "none";

        	document.getElementById("primero11").style.display = "none";
        	document.getElementById("segundo11").style.display = "none";
        	document.getElementById("tercero11").style.display = "none";
        	document.getElementById("cuarto11").style.display = "none";
        	document.getElementById("quinto11").style.display = "none";
        	document.getElementById("sexto11").style.display = "none";
        	document.getElementById("septimo11").style.display = "none";
        	document.getElementById("octavo11").style.display = "none";
        	document.getElementById("siguiente11").style.display = "none";

        	document.getElementById("primero12").style.display = "block";
        	document.getElementById("segundo12").style.display = "block";
        	document.getElementById("tercero12").style.display = "block";
        	document.getElementById("cuarto12").style.display = "block";
        	document.getElementById("quinto12").style.display = "block";
        	document.getElementById("sexto12").style.display = "block";
        	document.getElementById("septimo12").style.display = "block";
        	document.getElementById("octavo12").style.display = "block";
        	
        	
           }
           function siguiente12(){
           	document.getElementById("primero").style.display = "none";
        	document.getElementById("segundo").style.display = "none";
        	document.getElementById("tercero").style.display = "none";
        	document.getElementById("cuarto").style.display = "none";
        	document.getElementById("quinto").style.display = "none";
        	document.getElementById("sexto").style.display = "none";
        	document.getElementById("septimo").style.display = "none";
        	document.getElementById("octavo").style.display = "none";
        	document.getElementById("siguiente").style.display = "none";

        	document.getElementById("primero2").style.display = "none";
        	document.getElementById("segundo2").style.display = "none";
        	document.getElementById("tercero2").style.display = "none";
        	document.getElementById("cuarto2").style.display = "none";
        	document.getElementById("quinto2").style.display = "none";
        	document.getElementById("sexto2").style.display = "none";
        	document.getElementById("septimo2").style.display = "none";
        	document.getElementById("octavo2").style.display = "none";
        	document.getElementById("siguiente2").style.display = "none";

        	document.getElementById("primero3").style.display = "none";
        	document.getElementById("segundo3").style.display = "none";
        	document.getElementById("tercero3").style.display = "none";
        	document.getElementById("cuarto3").style.display = "none";
        	document.getElementById("quinto3").style.display = "none";
        	document.getElementById("sexto3").style.display = "none";
        	document.getElementById("septimo3").style.display = "none";
        	document.getElementById("octavo3").style.display = "none";
        	document.getElementById("siguiente3").style.display = "none";

        	document.getElementById("primero4").style.display = "none";
        	document.getElementById("segundo4").style.display = "none";
        	document.getElementById("tercero4").style.display = "none";
        	document.getElementById("cuarto4").style.display = "none";
        	document.getElementById("quinto4").style.display = "none";
        	document.getElementById("sexto4").style.display = "none";
        	document.getElementById("septimo4").style.display = "none";
        	document.getElementById("octavo4").style.display = "none";
        	document.getElementById("siguiente4").style.display = "none";

        	document.getElementById("primero5").style.display = "none";
        	document.getElementById("segundo5").style.display = "none";
        	document.getElementById("tercero5").style.display = "none";
        	document.getElementById("cuarto5").style.display = "none";
        	document.getElementById("quinto5").style.display = "none";
        	document.getElementById("sexto5").style.display = "none";
        	document.getElementById("septimo5").style.display = "none";
        	document.getElementById("octavo5").style.display = "none";
        	document.getElementById("siguiente5").style.display = "none";

        	document.getElementById("primero6").style.display = "none";
        	document.getElementById("segundo6").style.display = "none";
        	document.getElementById("tercero6").style.display = "none";
        	document.getElementById("cuarto6").style.display = "none";
        	document.getElementById("quinto6").style.display = "none";
        	document.getElementById("sexto6").style.display = "none";
        	document.getElementById("septimo6").style.display = "none";
        	document.getElementById("octavo6").style.display = "none";
        	document.getElementById("siguiente6").style.display = "none";

        	document.getElementById("primero7").style.display = "none";
        	document.getElementById("segundo7").style.display = "none";
        	document.getElementById("tercero7").style.display = "none";
        	document.getElementById("cuarto7").style.display = "none";
        	document.getElementById("quinto7").style.display = "none";
        	document.getElementById("sexto7").style.display = "none";
        	document.getElementById("septimo7").style.display = "none";
        	document.getElementById("octavo7").style.display = "none";
        	document.getElementById("siguiente7").style.display = "none";
        	

        	document.getElementById("primero8").style.display = "none";
        	document.getElementById("segundo8").style.display = "none";
        	document.getElementById("tercero8").style.display = "none";
        	document.getElementById("cuarto8").style.display = "none";
        	document.getElementById("quinto8").style.display = "none";
        	document.getElementById("sexto8").style.display = "none";
        	document.getElementById("septimo8").style.display = "none";
        	document.getElementById("octavo8").style.display = "none";
        	document.getElementById("siguiente8").style.display = "none";

        	document.getElementById("primero9").style.display = "none";
        	document.getElementById("segundo9").style.display = "none";
        	document.getElementById("tercero9").style.display = "none";
        	document.getElementById("cuarto9").style.display = "none";
        	document.getElementById("quinto9").style.display = "none";
        	document.getElementById("sexto9").style.display = "none";
        	document.getElementById("septimo9").style.display = "none";
        	document.getElementById("octavo9").style.display = "none";
        	document.getElementById("siguiente9").style.display = "none";
        	document.getElementById("resultado").style.display = "none";

        	document.getElementById("primero10").style.display = "none";
        	document.getElementById("segundo10").style.display = "none";
        	document.getElementById("tercero10").style.display = "none";
        	document.getElementById("cuarto10").style.display = "none";
        	document.getElementById("quinto10").style.display = "none";
        	document.getElementById("sexto10").style.display = "none";
        	document.getElementById("septimo10").style.display = "none";
        	document.getElementById("octavo10").style.display = "none";
        	document.getElementById("siguiente10").style.display = "none";

        	document.getElementById("primero11").style.display = "none";
        	document.getElementById("segundo11").style.display = "none";
        	document.getElementById("tercero11").style.display = "none";
        	document.getElementById("cuarto11").style.display = "none";
        	document.getElementById("quinto11").style.display = "none";
        	document.getElementById("sexto11").style.display = "none";
        	document.getElementById("septimo11").style.display = "none";
        	document.getElementById("octavo11").style.display = "none";
        	document.getElementById("siguiente11").style.display = "none";

        	document.getElementById("primero12").style.display = "none";
        	document.getElementById("segundo12").style.display = "none";
        	document.getElementById("tercero12").style.display = "none";
        	document.getElementById("cuarto12").style.display = "none";
        	document.getElementById("quinto12").style.display = "none";
        	document.getElementById("sexto12").style.display = "none";
        	document.getElementById("septimo12").style.display = "none";
        	document.getElementById("octavo12").style.display = "none";
        	document.getElementById("siguiente12").style.display = "none";

        	document.getElementById("primero13").style.display = "block";
        	document.getElementById("segundo13").style.display = "block";
        	document.getElementById("resultado").style.display = "block";
           }









</script>

<script type="text/javascript">
        	function resul(){
        	


           window.location= "recibe.php?ci= " + cIntereses+ "&hi="+hIntereses+"&ai="+aIntereses+"&si="+sIntereses+"&ii="+iIntereses+"&di="+dIntereses+"&ei="+eIntereses+"&ca="+cAptitudes+"&ha="+hAptitudes+"&aa="+aAptitudes+"&sa="+sAptitudes+"&ia="+iAptitudes+"&da="+dAptitudes+"&ea="+eAptitudes;

        
          
        }
               
		
	


</script>




</body>
</html>







