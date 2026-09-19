```javascript
/* =========================
   MENÚ PARA CELULAR
========================= */

function toggleMenu() {

    const nav = document.getElementById("nav");

    nav.classList.toggle("show");

}


/* =========================
   FILTRO DE EVENTOS
========================= */

function filterEvents(category) {

    const events = document.querySelectorAll(".event-card");
    const buttons = document.querySelectorAll(".filter");

    // Quitar estado activo
    buttons.forEach(button => {
        button.classList.remove("active");
    });

    // Activar botón seleccionado
    event.target.classList.add("active");


    events.forEach(card => {

        if (category === "todos") {

            card.style.display = "flex";

        } else {

            if (card.classList.contains(category)) {

                card.style.display = "flex";

            } else {

                card.style.display = "none";

            }

        }

    });

}


/* =========================
   CERRAR MENÚ AL SELECCIONAR
========================= */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("nav")
            .classList.remove("show");

    });

});
```
