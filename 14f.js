document.addEventListener("DOMContentLoaded", function() {

  const fechaInicio = new Date("2022-08-19T00:00:00");

  /* =======================
     CONTADOR
  ======================= */

  function actualizarTiempo() {
    const ahora = new Date();
    let diferencia = ahora - fechaInicio;

    const segundosTotales = Math.floor(diferencia / 1000);
    const minutosTotales = Math.floor(segundosTotales / 60);
    const horasTotales = Math.floor(minutosTotales / 60);
    const diasTotales = Math.floor(horasTotales / 24);

    const years = Math.floor(diasTotales / 365);
    const days = diasTotales % 365;
    const hours = horasTotales % 24;
    const minutes = minutosTotales % 60;
    const seconds = segundosTotales % 60;

    document.getElementById("years").textContent = years;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  setInterval(actualizarTiempo, 1000);
  actualizarTiempo();


  /* =======================
     MENSAJE FINAL
  ======================= */

  function mostrarFinal() {
    const mensaje = document.getElementById("mensajeFinal");

    if (!mensaje.classList.contains("hidden")) return;

    mensaje.classList.remove("hidden");

    const texto = `
Volvería a mirarte igual,
volvería a elegirte igual,
volvería a empezar todo contigo sin dudarlo.

Porque no fue suerte…
fue destino ❤️
`;

    mensaje.innerHTML = "<h3>Si volviera al 19 de agosto de 2022...</h3><p id='type'></p>";

    let i = 0;
    function escribir() {
      if (i < texto.length) {
        document.getElementById("type").innerHTML += texto.charAt(i);
        i++;
        setTimeout(escribir, 35);
      }
    }

    escribir();
  }

  window.mostrarFinal = mostrarFinal;


  /* =======================
     CORAZONES
  ======================= */

  function crearCorazones() {
    const contenedor = document.querySelector(".corazones");

    setInterval(() => {
      const corazon = document.createElement("span");
      corazon.innerHTML = "❤️";
      corazon.style.left = Math.random() * 100 + "vw";
      corazon.style.fontSize = (Math.random() * 20 + 10) + "px";
      corazon.style.opacity = Math.random();
      corazon.style.animationDuration = (Math.random() * 5 + 5) + "s";

      contenedor.appendChild(corazon);

      setTimeout(() => {
        corazon.remove();
      }, 10000);
    }, 600);
  }

  crearCorazones();


  /* =======================
     MODAL IMÁGENES
  ======================= */

  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");

  document.querySelectorAll(".imagenes img").forEach(img => {
    img.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modalImg.src = img.src;
    });
  });

  function cerrarModal() {
    modal.classList.add("hidden");
  }

  window.cerrarModal = cerrarModal;

  // Cerrar al tocar fuera de la imagen
  modal.addEventListener("click", function(e) {
    if (e.target === modal) {
      cerrarModal();
    }
  });


  /* =======================
     REVEAL SCROLL
  ======================= */

  function revelar() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revelar);
  revelar();


  /* =======================
     VIBRACIÓN
  ======================= */

  function vibrar() {
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }
  }

  window.vibrar = vibrar;


  /* =======================
     BOTÓN SECRETO
  ======================= */

  function mostrarSecreto() {
    const secreto = document.getElementById("mensajeSecreto");
    secreto.classList.remove("hidden");
  }

  window.mostrarSecreto = mostrarSecreto;


  /* =======================
     INTRO + MÚSICA
  ======================= */

  const intro = document.getElementById("intro");
  const musica = document.getElementById("musica");

  intro.addEventListener("click", function() {

    musica.play().catch(() => {});

    this.style.opacity = "0";
    setTimeout(() => {
      this.style.display = "none";
    }, 800);
  });

});


function mostrarFinal() {
  const mensaje = document.getElementById("mensajeFinal");

  if (!mensaje.classList.contains("hidden")) return;

  mensaje.classList.remove("hidden");

  const texto = `
Volvería a mirarte igual,
volvería a elegirte igual,
volvería a empezar todo contigo sin dudarlo.

Porque no fue suerte…
fue el destino ❤️
`;

  mensaje.innerHTML = "<h3>Si volviera al 19 de agosto de 2022...</h3><p id='type'></p>";

  let i = 0;
  function escribir() {
    if (i < texto.length) {
      document.getElementById("type").innerHTML += texto.charAt(i);
      i++;
      setTimeout(escribir, 35);
    }
  }

  escribir();
}



function mostrarCarta() {
  const carta = document.getElementById("carta");
  const textoElemento = document.getElementById("textoCarta");

  if (!carta.classList.contains("hidden")) return;

  carta.classList.remove("hidden");

  const texto = `
  Hola mi amor, espero que te guste este detalle mi vida, lo hice con muchísimo amor.
Hoy es nuestro cuarto San Valentín juntos… cuatro, mi vida. Hemos pasado tanto tiempo, tantas cosas, tantos recuerdos, tantos momentos que son imposibles de olvidar.

Aún recuerdo el día que salimos por primera vez. Estaba demasiado nervioso. Estabas con tu amiga y yo ni siquiera sabía bien quién eras, ni por qué habías aceptado mi salida. Tenía una noción, pero nada claro… y apenas te vi sentí algo tan bonito. Me enamoré de ti muy rápido, demasiado. Conectamos tan bien, teníamos tantas cosas en común, familia, conocidos, tantas coincidencias que parecían destino.

Me acuerdo de la primera vez que fuimos a Iquique, cuando te empujé del transfer porque yo quería pagar sksksk. Cómo llegamos al liceo y no éramos nada todavía, pero yo ya estaba demasiado enganchado con usted… y usted decía que no le gustaba tanto sksks, ahí salió mi versión más intensa.

El día que te pedí que fueras mi novia, en mi sala… qué bonito recuerdo. Son cosas que ahora me dan nostalgia. Cuántos años han pasado desde entonces, mi vida. Mira ahora… ya somos mayores, hemos pasado tantas etapas juntos.

Hemos vivido cumpleaños, celebraciones, viajes, risas, discusiones, momentos buenos y momentos difíciles… pero nada ha podido cortar esto que tenemos. Y eso es lo que más me enamora: que seguimos aquí, eligiéndonos.

Mi vida, gracias por crecer conmigo. Gracias por aguantar mi intensidad, mis locuras, mis sueños. Gracias por cada abrazo, cada palabra, cada apoyo en los momentos en que más lo necesitaba.

Si volviera atrás, te volvería a elegir mil veces más. Porque lo nuestro no es solo amor, es compañerismo, es historia, es complicidad, es todo lo que hemos construido con el tiempo.

Y hoy, en nuestro cuarto San Valentín, solo quiero decirte que te amo más que aquel primer día nervioso… pero ahora con la seguridad de que quiero seguir caminando a tu lado muchos años más.❤️
`;

  let i = 0;
  textoElemento.innerHTML = "";

  function escribir() {
    if (i < texto.length) {
      textoElemento.innerHTML += texto.charAt(i);
      i++;
      setTimeout(escribir, 25);
    }
  }

  escribir();
}
