// Array para almacenar los amigos
const amigos = []

// Función para agregar amigos
function agregarAmigo() {
  // Obtener el valor del input
  const nombre = document.getElementById("amigo").value

  // Validar que no esté vacío
  if (nombre) {
    // Agregar al array
    amigos.push(nombre)

    // Actualizar lista
    actualizarListaAmigos()

    // Limpiar input
    document.getElementById("amigo").value = ""
  }
}

// Función para actualizar la lista
function actualizarListaAmigos() {
  // Obtener la lista
  const lista = document.getElementById("listaAmigos")

  // Limpiar lista
  lista.innerHTML = ""

  // Agregar cada amigo a la lista
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li")
    li.textContent = amigos[i]
    lista.appendChild(li)
  }
}

// Función para sortear
function sortearAmigo() {
  // Verificar si hay amigos
  if (amigos.length > 0) {
    // Generar índice aleatorio
    const indice = Math.floor(Math.random() * amigos.length)

    // Mostrar resultado
    const resultado = document.getElementById("resultado")
    resultado.innerHTML = `<li>Amigo sorteado: ${amigos[indice]}</li>`
  }
}

// Permitir agregar amigos presionando Enter en el input
document.getElementById("amigo").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    agregarAmigo()
  }
})
