let idGlobal = 2;
let notas = [
  { id: 1, titulo: 'Sacar la basura', texto: 'Mi mama me va a retar si no lo hago', realizada: false },
  { id: 2, titulo: 'LLamar a mama', texto: 'El dia lunes a las 20:00 hs', realizada: true }
];

function agregarNota() {
  const titulo = document.getElementById('nota-titulo').value;
  const texto = document.getElementById('nota-texto').value;

  if (titulo.trim() !== '' && texto.trim() !== '') {
    const nota = { id: ++idGlobal, titulo, texto, realizada: false };
    notas.push(nota);
    limpiarFormatoNota();
    aplicarFiltros();
    console.log('Nota agregada');
  }
}

function limpiarFormatoNota() {
  document.getElementById('nota-titulo').value = '';
  document.getElementById('nota-texto').value = '';
}

function aplicarFiltros() {
  const filtroTexto = document.getElementById('filtro-texto').value.toLowerCase();
  const filtroRealizada = document.getElementById('filtro-realizada').checked;

  let notasFiltradas = filtrarPorTexto(notas, filtroTexto);
  notasFiltradas = filtrarPorRealizada(notasFiltradas, filtroRealizada);

  mostrarNotas(notasFiltradas);
}

function mostrarNotas(notasFiltradas) {
  const notaContainer = document.getElementById('nota-container');
  notaContainer.innerHTML = '';

  if (notasFiltradas.length === 0) {
    const mensajeSinNotas = document.createElement('div');
    mensajeSinNotas.textContent = 'NO HAY NOTAS PARA MOSTRAR';
    mensajeSinNotas.style.textAlign = 'center';
    notaContainer.appendChild(mensajeSinNotas);
    console.log('No hay notas para mostrar');
  } else {
    notasFiltradas.forEach((nota) => {
      const elementoNota = document.createElement('div');
      elementoNota.classList.add('nota');
      if (nota.realizada) {
        elementoNota.classList.add('tachada');
      }

      const elementoTitulo = document.createElement('h3');
      elementoTitulo.textContent = nota.titulo;

      const elementoTexto = document.createElement('p');
      elementoTexto.textContent = nota.texto;

      const checkboxRealizada = document.createElement('input');
      checkboxRealizada.type = 'checkbox';
      checkboxRealizada.checked = nota.realizada;
      checkboxRealizada.onclick = () => marcarRealizada(nota.id);

      const botonEliminar = document.createElement('button');
      botonEliminar.classList.add('eliminar');
      botonEliminar.textContent = 'Eliminar';
      botonEliminar.onclick = () => eliminarNota(nota.id);

      elementoNota.appendChild(checkboxRealizada);
      elementoNota.appendChild(elementoTitulo);
      elementoNota.appendChild(elementoTexto);
      elementoNota.appendChild(botonEliminar);
      notaContainer.appendChild(elementoNota);
    });
  }
}

function eliminarNota(id) {
  const index = notas.findIndex((nota) => nota.id === id);
  if (index !== -1) {
    notas.splice(index, 1);
    aplicarFiltros();
    console.log('Nota eliminada');
  }
}

function marcarRealizada(id) {
  const nota = notas.find((n) => n.id === id);
  if (nota) {
    nota.realizada = !nota.realizada;
    aplicarFiltros();
    console.log('Estado de la nota cambiado');
  }
}

function filtrarPorRealizada(array, realizada) {
  return array.filter(nota => nota.realizada === realizada);
}

function filtrarPorTexto(array, texto) {
  if (!texto) return array;
  return array.filter(nota => nota.titulo.toLowerCase().includes(texto) || nota.texto.toLowerCase().includes(texto));
}

aplicarFiltros();