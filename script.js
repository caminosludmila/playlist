function entrar() {
  const nombre = document.getElementById("nombreInput").value;

  if (nombre.trim() === "") {
    alert("Por favor, escribe tu nombre para continuar.");
    return;
  }

  document.getElementById("saludoPersonalizado").innerText =
    "🎵 Hola " + nombre + ", elegí tu estado de ánimo";

  document.getElementById("bienvenida").style.display = "none";
}

function recomendar() {
  const estado = document.getElementById("estado").value;

  if (estado === "") {
    alert("Seleccioná un estado de ánimo.");
    return;
  }
  document.body.classList.remove(
    "fondo-triste",
    "fondo-motivacional",
    "fondo-animo",
    "fondo-alegre",
    "fondo-relajado"
  );

  // 🔥 Aplicar fondo según emoción
  document.body.classList.add("fondo-" + estado);

  let link = "";

  switch (estado) {
    case "triste":
      link = "https://open.spotify.com/playlist/4zFunMx93s5cFXl9wTcvAc";
      break;

    case "motivacional":
      link = "https://open.spotify.com/playlist/4GnyuE92kZ9iJUV2CwaVnt";
      break;

    case "animo":
      link = "https://open.spotify.com/playlist/5Bwg0Bq1dEQ0ejspk32Ow2";
      break;

    case "alegre":
      link = "https://open.spotify.com/playlist/1WQPbaubHeCv5ksnDUcNGl";
      break;

    case "relajado":
      link = "https://open.spotify.com/playlist/4bbMlfSYSVvaPuAVIN99mf";
      break;
  }

  window.open(link, "_blank");
}