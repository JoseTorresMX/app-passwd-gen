function generatePassword() {
  const length = 16; // Longitud fija de 16 caracteres
  const uppercase = true; // Mayúsculas activadas por defecto
  const lowercase = true; // Minúsculas activadas por defecto
  //const length = document.getElementById('length').value;
  //const uppercase = document.getElementById('uppercase').checked;
  //const lowercase = document.getElementById('lowercase').checked;
  const numbers = document.getElementById("numbers").checked;
  const symbols = document.getElementById("symbols").checked;

  // Verificar si el usuario seleccionó al menos un criterio y si la longitud es válida
  if (length < 4 || !(uppercase || lowercase || numbers || symbols)) {
    alert(
      "Por favor, seleccione al menos un criterio y una longitud de 4 caracteres o más."
    );
    return;
  }

  // Crear un conjunto de caracteres posibles
  let characters = "";
  if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) characters += "0123456789";
  if (symbols) characters += "!@#$%^&*()_-+=[]{}|;:,.<>/?";

  // Generar la contraseña
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  // Mostrar la contraseña en el div
  document.getElementById("password").textContent = password;
}
