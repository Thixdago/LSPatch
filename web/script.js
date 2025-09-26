const filtros = document.querySelectorAll('.filtro');
const tarjetas = document.querySelectorAll('.tarjeta');
const yearSpan = document.getElementById('year');

// Actualiza el año del footer
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Filtrado de mascotas
filtros.forEach((boton) => {
    boton.addEventListener('click', () => {
        const filtro = boton.dataset.filter;

        filtros.forEach((btn) => btn.classList.remove('activo'));
        boton.classList.add('activo');

        tarjetas.forEach((tarjeta) => {
            const categoria = tarjeta.dataset.category;
            const mostrar = filtro === 'todos' || categoria === filtro;
            tarjeta.style.display = mostrar ? 'flex' : 'none';
        });
    });
});

// Manejo simple del formulario
const formulario = document.querySelector('.formulario');

if (formulario) {
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        const nombre = formulario.nombre.value.trim();
        const mascota = formulario.mascota.value;

        if (!nombre || !mascota) {
            alert('Por favor completa todos los campos obligatorios.');
            return;
        }

        alert(`¡Gracias, ${nombre}! Nos pondremos en contacto contigo para continuar con la adopción.`);
        formulario.reset();
    });
}
