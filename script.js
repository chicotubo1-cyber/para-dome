```javascript
document.addEventListener("DOMContentLoaded", function () {

    const boton = document.getElementById("boton");
    const mensajeFinal = document.getElementById("mensajeFinal");
    const corazones = document.getElementById("corazones");

    // Comprobar que los elementos existen
    console.log("JavaScript funcionando");
    console.log("Botón:", boton);
    console.log("Mensaje:", mensajeFinal);


    // BOTÓN
    boton.addEventListener("click", function () {

        console.log("¡Botón presionado!");

        // Mostrar mensaje
        mensajeFinal.classList.add("mostrar");

        // Cambiar texto del botón
        boton.textContent = "❤️ Gracias por leerme";

        // Crear lluvia de corazones
        crearExplosion();

    });


    // CREAR UN CORAZÓN
    function crearCorazon() {

        const corazon = document.createElement("div");

        corazon.className = "corazon-flotante";

        const emojis = [
            "❤️",
            "💕",
            "💗",
            "💖",
            "💓"
        ];

        corazon.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        corazon.style.left =
            Math.random() * 100 + "vw";

        corazon.style.fontSize =
            Math.random() * 20 + 15 + "px";

        corazon.style.animationDuration =
            Math.random() * 3 + 4 + "s";

        corazones.appendChild(corazon);


        setTimeout(function () {

            corazon.remove();

        }, 7000);

    }


    // EXPLOSIÓN DE CORAZONES
    function crearExplosion() {

        for (let i = 0; i < 30; i++) {

            setTimeout(function () {

                crearCorazon();

            }, i * 100);

        }

    }


    // CORAZONES DEL FONDO
    setInterval(function () {

        crearCorazon();

    }, 800);

});
```
