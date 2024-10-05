/*Funcion para copiar contraseñas del textarea
al portapapeltes */
/*function copiarpasswd(){
    //Obtener el elemento o contenido del textarea
    const textarea=document.getElementById("passwd");
    try {
        await navigator.clipboard.writeText(textarea.value);
        alert("Contraseña en el portapapeles");
    } catch (error) {
        console.error("Error al copiar: ", err)
    }
    /*Seleccionar todo el contenido del textarea
    textarea.select();

    //Copiar el contenido del textarea al portapapeles
    document.execCommand("copy");

    //Mensaje al usuario de confirmacion
    alert('Contraseña en el portapapeles')
}*/
function updateInnerLabel() {
  const innerLabel = document.getElementById("innerLabel");
  const rangeValue = document.getElementById("rangeInput").value;
  document.getElementById("rangeValue").textContent = rangeValue;
  let text = "x".repeat(rangeValue);
  if (rangeValue < 5) {
    innerLabel.textContent = "Muy poco segura";
    innerLabel.className = "inner-label muy_poco_segura";
  } else if (rangeValue < 7) {
    innerLabel.textContent = "Poco segura";
    innerLabel.className = "inner-label poco_segura";
  } else if (rangeValue < 10) {
    innerLabel.textContent = "Buena";
    innerLabel.className = "inner-label buena";
  } else if (rangeValue < 12) {
    innerLabel.textContent = "Segura";
    innerLabel.className = "inner-label segura";
  } else {
    innerLabel.textContent = "Muy segura";
    innerLabel.className = "inner-label muy_segura";
  }
}

/*function generatePassword() {

  const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minus = "abcdefghijklmnopqrstuvwxyz";
  const numero = "0123456789";
  const especial = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  const useMayus = document.getElementById("checkboxMayus").checked;
  const useMinus = document.getElementById("checkboxMinus").checked;
  const useNumbers = document.getElementById("checkboxNumbers").checked;
  const useSimbolos = document.getElementById("checkboxSimbolos").checked;

  let chars = "";
  if (useMayus) chars += mayus;
  if (useMinus) chars += minus;
  if (useNumbers) chars += numero;
  if (useSimbolos) chars += especial;

  const lenght = document.getElementById("rangeInput").value;
  document.getElementById("rangeValue").textContent = lenght;

  let password = "";
  for (let i = 0; i < lenght; i++) {
    const randomIndex = Math.floor(Math.random() * chars.lenght);
    password += chars[randomIndex];
  }
  document.getElementById("outerLabel").textContent = password;
}

//Funcion para cargar la pagina y se genera el password
window.onload = generatePassword;
*/

