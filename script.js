// Botón menú en celular - muestra/oculta columna izquierda
document.getElementById('btnMenu').addEventListener('click', function() {
  document.querySelector('.izquierda').classList.toggle('activo');
});

// Ver / Ocultar cada tema
document.querySelectorAll('.ver').forEach(function(boton) {
  boton.addEventListener('click', function() {
    let contenido = this.nextElementSibling;
    contenido.style.display = (contenido.style.display === 'none') ? 'block' : 'none';
  });
});

// Buscador
document.getElementById('buscador').addEventListener('input', function() {
  let texto = this.value.toLowerCase();
  document.querySelectorAll('.card').forEach(function(card) {
    card.style.display = card.textContent.toLowerCase().includes(texto) ? 'block' : 'none';
  });
});

function probarSensor() {
  document.getElementById('resultadoSensor').textContent = ' Sensor detectado OK ✅';
  alert('Sensor activado: se está leyendo el movimiento (simulación).');
}
function mostrarNotificacion() {
  alert('🔔 Notificación: Tienes un mensaje nuevo de tu app.');
}