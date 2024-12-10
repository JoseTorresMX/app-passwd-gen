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
  const rangeValue = document.getElementById("passwordLenght").value;
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
/*
function getRandomMinus() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomMayus() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumero() {
  return +String, fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSimbolos() {
  const simbolos = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  return simbolos[Math.floor(Math.random() * simbolos.length)];
}

const randonFunc = {
  minus: getRandomMinus,
  mayus: getRandomMayus,
  numero: getRandomNumero,
  simbol: getRandomSimbolos,
};

const generate = document.getElementById("update-button");
generate.addEventListener("click", () => {
  const longitud = document.getElementById("passwordLength").value;
  const Mayusculas = document.getElementById("uppercase").checked;
  const Minusculas = document.getElementById("lowercase").checked;
  const Numeros = document.getElementById("numbers").checked;
  const Simbologia = document.getElementById("symbols").checked;
  const resultado = document.getElementById("passwordResult");
  resultado.innerText = generatePassword(
    Mayusculas,
    Minusculas,
    Numeros,
    Simbologia,
    longitud
  );
});

function generatePassword(minus, mayus, numero, simbol, longitud) {
  let generatePassword = "";
  const typesCount = minus + mayus + numero + simbol;
  const typerArr = [{ minus }, { mayus }, { numero }, { simbol }].filter(
    (item) => Object.values(item)[0]
  );
  for (let i = 0; i < longitud; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatePassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatePassword.slice(0, length);
  return finalPassword;
}*/

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() *26) +97);
}
function getRandomUpper(){
    return String.fromCharCode (Math.floor(Math.random()*26) +65);
}
function getRandomNumber(){
    return +String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSymbol(){
    const symbols = "!@#$%{}_-[]";
    return symbols[Math.floor(Math.random() * symbols.length)];
}
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

const generate = document.getElementById("generateBtn");
generate.addEventListener("click", ()=>{
    const length = document.getElementById("passwordLength").value;
    const hasUpper = document.getElementById("uppercase").checked;
    const hasLower = document.getElementById("lowercase").checked;
    const hasNumber = document.getElementById("numbers").checked;
    const hasSymbol = document.getElementById("symbols").checked;
    const result = document.getElementById("passwordResult");
    result.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    );
});

function generatePassword(lower, upper, number, symbol, length){
    let generatePassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
        (item) => Object.values(item)[0]
    );

    for (let i=0; i< length; i += typesCount){
        typesArr.forEach((type) => {
            const funcName = Object.keys(type) [0];
            generatePassword += randomFunc[funcName]();
        });
    }
    const finalPassword = generatePassword.slice(0, length);
    return finalPassword;
}

// Function for copy to clipboard
let button = document.getElementById("clipboardBtn");
button.addEventListener("click", (e) =>{
    e.preventDefault();
    document.execCommand(
        "copy",
        false,
        document.getElementById("passwordResult").select()
    );
})


