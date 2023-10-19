document.addEventListener('DOMContentLoaded', function () {
    // Initialize Bootstrap Carousel
    var textCarousel = new bootstrap.Carousel(document.getElementById('textCarousel'), {
        interval: 2000, // Change every 2 seconds
        pause: 'hover', // Pause on hover
        wrap: true // Wrap around when reaching the last item
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var opcionesContainer = document.getElementById('opcionesContainer');
    var navbar = document.querySelector('.navbar-nav');
    var searchForm = document.querySelector('.navbar form');

    function toggleOpciones() {
        // Muestra u oculta la lista de opciones y "Opciones" en la barra de navegación
        if (opcionesContainer.style.display === 'block') {
            opcionesContainer.style.display = 'none';
            searchForm.style.display = 'block';
        } else {
            opcionesContainer.style.display = 'block';
            searchForm.style.display = 'none';
        }
    }

    // Crea el elemento "Opciones" en la barra de navegación
    var opcionesNavItem = document.createElement('li');
    opcionesNavItem.classList.add('nav-item');
    opcionesNavItem.classList.add('d-lg-none'); // Agrega la clase d-lg-none para ocultar en tamaños LG y mayores
    var opcionesNavLink = document.createElement('a');
    opcionesNavLink.classList.add('nav-link');
    opcionesNavLink.href = '#'; // Agrega un enlace con href="#" para que sea cliclable
    opcionesNavLink.innerText = 'Opciones';
    opcionesNavItem.appendChild(opcionesNavLink);

    // Inserta "Opciones" al final de la barra de navegación
    navbar.appendChild(opcionesNavItem);

    // Agrega un evento de clic al elemento "Opciones"
    opcionesNavLink.addEventListener('click', function (event) {
        event.preventDefault(); // Evita que el enlace redirija a otra página
        toggleOpciones();
    });

    // Vuelve a llamar a toggleOpciones cuando cambia el tamaño de la pantalla
    window.addEventListener('resize', function () {
        if (window.innerWidth < 992) {
            toggleOpciones();
        } else {
            opcionesContainer.style.display = 'none';
            searchForm.style.display = 'block';
        }
    });
});

function toggleOpciones() {
    // Muestra u oculta la lista de opciones y "Opciones" en la barra de navegación
    if (opcionesContainer.style.display === 'block') {
        opcionesContainer.style.display = 'none';
        mainContent.style.position = 'static'; // Restaura la posición del contenido principal
    } else {
        opcionesContainer.style.display = 'block';
        mainContent.style.position = 'relative'; // Ajusta la posición del contenido principal
    }
}

