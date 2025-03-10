// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declaración de una variable tipo array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombreAmigo = inputAmigo.value.trim();

  if (nombreAmigo === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  amigos.push(nombreAmigo);
  mostrarListaAmigos();
  inputAmigo.value = ""; // Limpiar el campo de texto
}

// Función para mostrar la lista de amigos en la página
function mostrarListaAmigos() {
  const listaElement = document.getElementById("listaAmigos");
  listaElement.innerHTML = ""; // Limpiar lista existente

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${amigo}`;
    listaElement.appendChild(li);
  });
}

// Función para realizar el sorteo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("La lista está vacía. Agrega al menos un nombre antes de sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];

  mostrarResultado(amigoSecreto);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigo) {
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigo}</strong>!</li>`;
}
