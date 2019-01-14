const botonClick = document.getElementById("boton1");
const botonPelicula = document.getElementById("boton2");
const botonTec = document.getElementById("boton3");
const botonPlay1 = document.getElementById("boton4");
const botonPlay2 = document.getElementById("boton5");
const botonResultado1 = document.getElementById("boton6");
const botonResultado2 = document.getElementById("boton7");
const botonSalir1 = document.getElementById("boton8");
const botonRegresar1 = document.getElementById("boton9");
const botonSalir2 = document.getElementById("boton10");
const botonRegresar2 = document.getElementById("boton11");

function ingresarNombre() {
  const name = document.getElementById("name").value;
  document.getElementById("name1").innerHTML=name;
  document.getElementById("screen1").style="display:none";
  //Aparezca la segunda pantalla
  document.getElementById("screen2").style="display:block";
}

//Saltar a la siguiente pantalla
function fnPel(){
  document.getElementById("screen2").style="display:none";
  //Aparezca la tercera pantalla
  document.getElementById("screen3").style="display:block";
}

//Saltar a la siguiente pantalla
function fnTec(){
  document.getElementById("screen2").style="display:none";
  //Aparezca la quinta pantalla
  document.getElementById("screen5").style="display:block";
}

//Función empezar a jugar Tema 1
function fnPrimerTema(){
  const rpta1=prompt("¿En que año se estrenó Titanic?\n a.2001\n b.1997\n c.2004\n d.1990").toUpperCase();
  console.log(rpta1);
  let score1=0;
  if (rpta1==='B'){
    alert("¡Respuesta correcta!");
    score1=1;
  } else {
    alert("¡Incorrecto!\n Titanic se estrenó en 1997.");
  }
  //Pregunta2
  const rpta2=prompt("¿Cómo se llama la primera película de Harry Potter?\n a.La piedra filosofal\n b.El principe mestizo\n c.La orden del fenix\n d.El caliz de fuego").toUpperCase();
  if (rpta2==='A'){
    alert("¡Respuesta correcta!");
    score1++;
  } else {
    alert("¡Incorrecto!\n Es 'La piedra filosofal'");
  }
  //Pregunta3
  const rpta3=prompt("¿Con quién se casa Shrek?\n a.El encantador\n b.Nacho\n c.Fiona\n d.MeganFox").toUpperCase();
  if (rpta3==='C'){
    alert("¡Respuesta correcta!");
    score1++;
  } else {
    alert("¡Incorrecto!\n Es Fiona");
  }
  document.getElementById("boton6").style="display:block";
  console.log(score1);
  document.getElementById("score1").innerHTML=score1;
}

function fnResultado1(){
  document.getElementById("screen3").style="display:none";
  document.getElementById("screen4").style="display:block";
}

//Función empezar a jugar Tema 2
function fnSegundoTema(){
  const rpta1=prompt("¿Quién es el fundador de Facebook?\n a.Mark Zuckerberg\n b.Larry Page\n c.Bill Gates\n d.Steve Jobs").toUpperCase();
  console.log(rpta1);
  let score2=0;
  if (rpta1==='A'){
    alert("¡Respuesta correcta!");
    score2=1;
  } else {
    alert("¡Incorrecto!\n El fundador es Mark Zuckerberg.");
  }
  //Pregunta2
  const rpta2=prompt("¿En qué año fue lanzado el iPad?\n a.2005\n b.2007\n c.2010\n d.2012").toUpperCase();
  if (rpta2==='C'){
    alert("¡Respuesta correcta!");
    score2++;
  } else {
    alert("¡Incorrecto!\n Fue lanzado en el 2010.");
  }
  //Pregunta3
  const rpta3=prompt("¿Qué no puede hacer Siri por ti?\n a.Decirte la ubicación de cafeterías cercanas\n b.Hacer una búsqueda en internet\n c.Hacer una llamada\n d.Siempre entender lo que dices").toUpperCase();
  if (rpta3==='D'){
    alert("¡Respuesta correcta!");
    score2++;
  } else {
    alert("¡Incorrecto!\n Siempre entender lo que dices."); 
  }  
  document.getElementById("boton7").style="display:block";
  document.getElementById("score2").innerHTML=score2;
}

function fnResultado2(){
  document.getElementById("screen5").style="display:none";
  document.getElementById("screen6").style="display:block"
}

function fnSalir1(){
  document.getElementById("screen4").style="display:none";
  document.getElementById("screen1").style="display:block";
}

function fnRegresar1(){
  document.getElementById("screen4").style="display:none";
  document.getElementById("screen2").style="display:block";
}

function fnSalir2(){
  document.getElementById("screen6").style="display:none";
  document.getElementById("screen1").style="display:block";
}

function fnRegresar2(){
  document.getElementById("screen6").style="display:none";
  document.getElementById("screen2").style="display:block";
}

botonClick.addEventListener('click',ingresarNombre);
botonPelicula.addEventListener('click',fnPel);
botonTec.addEventListener('click',fnTec);
botonPlay1.addEventListener('click',fnPrimerTema);
botonPlay2.addEventListener('click',fnSegundoTema);
botonResultado1.addEventListener('click',fnResultado1);
botonResultado2.addEventListener('click',fnResultado2);
botonSalir1.addEventListener('click',fnSalir1);
botonRegresar1.addEventListener('click',fnRegresar1);
botonSalir2.addEventListener('click',fnSalir2);
botonRegresar2.addEventListener('click',fnRegresar2);