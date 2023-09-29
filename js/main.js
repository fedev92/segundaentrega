const gk = "rochet";

// const li = "piquerez";
// const cbl = "viña";
// const cbr = "caceres";
// const lr = "nandez";

const defensas = ["piquerez", "viña", "caceres", "nandez"]

// const dml = "ugarte";
// const dmr = "valverde";
// const lw = "araujo";
// const am = "de la cruz";
// const rw = "canobbio";

const medioCampo = ["ugarte", "valverde", "araujo", "de la cruz", "canobbio"];

const cf = "nuñez";

function respuestaArquero() {
  const valorIngresado = document.getElementById('gk').value;
  const respuestaCorrecta = gk; // Reemplaza con la respuesta correcta
  
  if (valorIngresado === respuestaCorrecta) {
      alert('respuesta correcta');
      
      const respuestaDiv = document.getElementById('respuesta-correcta');
      respuestaDiv.textContent = respuestaCorrecta;
      respuestaDiv.style.display = 'block';
      document.getElementById('consultar').style.display = 'none';
      document.getElementById('gk').style.display = 'none';
      
  } else {
      alert('Respuesta incorrecta. Inténtalo de nuevo.');
  }


}


function comprobarPosicionDefensas() {
    const defensaRespuestaLi = document.getElementById("li").value;
    // const defensaRespuestaCbl = document.getElementById("cbl").value;
    // const defensaRespuestaCbr = document.getElementById("cbr").value;
    // const defensaRespuestaLr = document.getElementById("lr").value;

    // if(defensaRespuestaLi === defensas[0]){
    //     alert("correcto!");
    // } else {
    //     alert("incorrecto");
    // }

    if(defensas.includes(defensaRespuestaLi)) {
      alert('correcto!');
      // Mostrar la respuesta correcta con fondo celeste
      const respuestaDiv = document.getElementById('respuesta-correcta');
      respuestaDiv.textContent = respuestaCorrecta;
      respuestaDiv.style.display = 'block';
    } else {
        alert("incorrecto");
    }

}

