```javascript
const boton = document.getElementById("boton");
const mensajeFinal = document.getElementById("mensajeFinal");
const corazones = document.getElementById("corazones");

// Comprobamos que los elementos existan
if (boton && mensajeFinal) {

    boton.addEventListener("click", function () {

        // Mostrar el mensaje
        mensajeFinal.classList.add("mostrar");

        // Cambiar el texto del botón
        boton.textContent = "❤️ Gracias por leerme";

        // Crear lluvia de corazones
        crearExplosion();
    });

}


// Crear un corazón
function crearCorazon() {

    if (!corazones) return;

    const corazon = document.createElement("div");

    corazon.className = "corazon-flotante";

    const emojis = ["❤️", "💕", "💗", "💖", "💓"];

    corazon.textContent =
        emojis[Math.floor(Math.random() * emojis.length)];

    corazon.style.left =
        Math.random() * 100 + "vw";

    corazon.style.fontSize =
        (Math.random() * 20 + 15) + "px";

    const duracion =
        Math.random() * 4 + 4;

    corazon.style.animationDuration =
        duracion + "s";

    corazones.appendChild(corazon);

    setTimeout(function () {
        corazon.remove();
    }, duracion * 1000);
}


// Lluvia de corazones
function crearExplosion() {

    for (let i = 0; i < 30; i++) {

        setTimeout(function () {
            crearCorazon();
        }, i * 80);

    }
}


// Corazones normales de fondo
setInterval(crearCorazon, 700);
```

