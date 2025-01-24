document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.querySelector('.search-bar');
    const searchInput = searchBar.querySelector('input');
  
    // Alterna la clase 'active' al hacer clic en el botón
    searchBar.querySelector('button').addEventListener('click', function () {
      searchBar.classList.toggle('active');
  
      // Enfocar el input cuando esté activo
      if (searchBar.classList.contains('active')) {
        searchInput.focus();
      }
    });
  });
 // Selección de elementos
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');

// Abrir el modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Cerrar el modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera de él
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const carouselContainer = document.querySelector('.carousel-container');
  const images = document.querySelectorAll('.carousel-image');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');

  let currentIndex = 1; // Comienza desde la primera imagen duplicada
  const imageCount = images.length;

  // Duplicar las imágenes
  const firstImage = images[0].cloneNode(true);
  const lastImage = images[imageCount - 1].cloneNode(true);
  carouselContainer.appendChild(firstImage);
  carouselContainer.insertBefore(lastImage, images[0]);

  const imageWidth = images[0].clientWidth;
  carouselContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

  // Deshabilitar transiciones para evitar glitches al inicio
  const disableTransition = () => {
    carouselContainer.style.transition = 'none';
  };

  // Habilitar transiciones
  const enableTransition = () => {
    carouselContainer.style.transition = 'transform 0.5s ease-in-out';
  };

  // Restablecer la posición del carrusel al final o inicio
  const resetPosition = () => {
    if (currentIndex === 0) {
      disableTransition();
      currentIndex = imageCount; // Salta a la última imagen original
      carouselContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }
    if (currentIndex === imageCount + 1) {
      disableTransition();
      currentIndex = 1; // Salta a la primera imagen original
      carouselContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }
  };

  // Mover el carrusel
  const moveCarousel = () => {
    enableTransition();
    carouselContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  };

  // Mostrar la siguiente imagen
  const nextImage = () => {
    currentIndex++;
    moveCarousel();
  };

  // Mostrar la imagen anterior
  const prevImage = () => {
    currentIndex--;
    moveCarousel();
  };

  // Eventos para botones
  nextButton.addEventListener('click', () => {
    nextImage();
  });

  prevButton.addEventListener('click', () => {
    prevImage();
  });

  // Movimiento automático
  const autoSlide = setInterval(() => {
    nextImage();
  }, 5000);

  // Escuchar el final de la transición para reiniciar la posición
  carouselContainer.addEventListener('transitionend', resetPosition);

  // Asegurar que la transición está habilitada al final del reinicio
  carouselContainer.addEventListener('transitionstart', enableTransition);
});


  // Obtén la URL actual
  const currentPath = window.location.pathname;

  // Encuentra todos los enlaces del menú
  const menuLinks = document.querySelectorAll(".menu-link");
  const submenuLinks = document.querySelectorAll(".submenu-link");

  // Verifica si algún submenú está activo
  submenuLinks.forEach((submenu) => {
    if (submenu.href.includes(currentPath)) {
      submenu.classList.add("active"); // Marca el submenú como activo

      // Encuentra al padre (menú principal) y actívalo
      const parentMenu = submenu.closest(".has-submenu").querySelector(".menu-link");
      if (parentMenu) {
        parentMenu.classList.add("active");
      }
    }
  });

  // Si ningún submenú está activo, verifica si el menú principal está activo
  menuLinks.forEach((menu) => {
    if (menu.href.includes(currentPath)) {
      menu.classList.add("active");
    }
  });

function mostrarCarpeta(nombreCarpeta, rutaPdf) {
  // Obtener los elementos del DOM
  const vistaArchivos = document.getElementById('vista-archivos');
  const tituloCarpeta = document.getElementById('titulo-carpeta');
  const nombreArchivo = document.getElementById('nombre-archivo');
  const enlaceDescargar = document.getElementById('enlace-descargar');
  const enlaceVista = document.getElementById('enlace-vista');

  // Establecer los datos dinámicos
  tituloCarpeta.textContent = nombreCarpeta;
  nombreArchivo.textContent = rutaPdf.split('/').pop(); // Obtener solo el nombre del archivo
  enlaceDescargar.href = rutaPdf;
  enlaceVista.href = rutaPdf;

  // Mostrar la vista de archivos y ocultar la vista de carpetas
  vistaArchivos.classList.remove('hidden');
}

function mostrarCarpeta(nombreCarpeta, rutaPdf) {
    document.querySelector(".folder-view").classList.add("hidden");
    document.querySelector("#file-view").classList.remove("hidden");

    document.getElementById("folder-title").textContent = nombreCarpeta;
    document.getElementById("nombre-archivo").textContent = rutaPdf.split('/').pop();
    document.getElementById("enlace-descargar").href = rutaPdf;
    document.getElementById("enlace-vista").href = rutaPdf;
}

function goBack() {
    document.querySelector(".folder-view").classList.remove("hidden");
    document.querySelector("#file-view").classList.add("hidden");
}

function showTab(tabId) {
  // Ocultar todas las pestañas
  document.querySelectorAll('.tab-content').forEach((content) => {
    content.classList.remove('active');
  });

  // Quitar la clase activa de todos los botones
  document.querySelectorAll('.tab-button').forEach((button) => {
    button.classList.remove('active');
  });

  // Mostrar la pestaña activa
  document.getElementById(tabId).classList.add('active');

  // Activar el botón correspondiente
  event.currentTarget.classList.add('active');
}
