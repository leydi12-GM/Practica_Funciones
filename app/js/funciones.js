/* ==========================================================================
   CASO PRÁCTICO 01 - 15 FUNCIONES (Lógica y DOM integrados)
   ========================================================================== */

// 01. Función para sumar
function sumar() {
    let a = Number(document.getElementById("sum1").value); // el getElementById llama al input con el id
    let b = Number(document.getElementById("sum2").value);
    document.getElementById("res-sum").innerText = "Resultado: " + (a + b); 
    //document.getElementById("res-sum") llama al div con el id res-sum
    // el innerText es para mostrar el resultado en el div con el id res-sum

}

// 02. Función para restar
function restar() {
    let a = Number(document.getElementById("res1").value);
    let b = Number(document.getElementById("res2").value);
    document.getElementById("res-res").innerText = "Resultado: " + (a - b);
}

// 03. Función para multiplicar
function multiplicar() {
    let a = Number(document.getElementById("mul1").value);
    let b = Number(document.getElementById("mul2").value);
    document.getElementById("res-mul").innerText = "Resultado: " + (a * b);
}

// 04. Función para dividir
function dividir() {
    let a = Number(document.getElementById("div1").value);
    let b = Number(document.getElementById("div2").value);
    
    if (b === 0) {
        document.getElementById("res-div").innerText = "Resultado: Error (División por 0)";
    } else {
        document.getElementById("res-div").innerText = "Resultado: " + (a / b);
    }
}

// 05. Función para hallar el cuadrado
function cuadrado() {
    let a = Number(document.getElementById("cua1").value);
    document.getElementById("res-cua").innerText = "Resultado: " + (a * a);
}

// 06. Función para hallar el cubo
function cubo() {
    let a = Number(document.getElementById("cub1").value);
    document.getElementById("res-cub").innerText = "Resultado: " + (a * a * a);
}

// 07. Función para hallar el promedio de 3 notas
function promedio() {
    let a = Number(document.getElementById("pro1").value);
    let b = Number(document.getElementById("pro2").value);
    let c = Number(document.getElementById("pro3").value);
    document.getElementById("res-pro").innerText = "Resultado: " + ((a + b + c) / 3);
}

// 08. Función para verificar par o impar
function esPar() {
    let a = Number(document.getElementById("par1").value);
    let resultado = (a % 2 === 0) ? "Es Par" : "Es Impar";
    document.getElementById("res-par").innerText = "Resultado: " + resultado;
}

// 09. Función para hallar el mayor de dos números
function mayorDeDos() {
    let a = Number(document.getElementById("may1").value);
    let b = Number(document.getElementById("may2").value);
    let mayor = (a > b) ? a : b;
    document.getElementById("res-may").innerText = "Resultado: " + mayor;
}

// 10. Función para calcular el área de un triángulo
function areaTriangulo() {
    let base = Number(document.getElementById("tri1").value);
    let altura = Number(document.getElementById("tri2").value);
    document.getElementById("res-tri").innerText = "Resultado: " + ((base * altura) / 2);
}

// 11. Función para calcular el Índice de Masa Corporal (IMC)
function calcularIMC() {
    let peso = Number(document.getElementById("imc-peso").value);
    let altura = Number(document.getElementById("imc-altura").value);
    let imc = peso / (altura * altura);
    document.getElementById("res-imc").innerText = "Resultado: " + imc.toFixed(2);
}

// 12. Función para verificar la mayoría de edad
function mayorDeEdad() {
    let edad = Number(document.getElementById("eda1").value);
    let resultado = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
    document.getElementById("res-eda").innerText = "Resultado: " + resultado;
}

// 13. Función para calcular el perímetro de un cuadrado
function perimetroCuadrado() {
    let lado = Number(document.getElementById("per1").value);
    document.getElementById("res-per").innerText = "Resultado: " + (lado * 4);
}

// 14. Función para verificar si un número es positivo o negativo
function positivoNegativo() {
    let num = Number(document.getElementById("pos1").value);
    let resultado = "Cero";
    if (num > 0) resultado = "Positivo";
    if (num < 0) resultado = "Negativo";
    document.getElementById("res-pos").innerText = "Resultado: " + resultado;
}

// 15. Función para mostrar un saludo personalizado
function saludar() {
    let nombre = document.getElementById("sal1").value;
    document.getElementById("res-sal").innerText = "Resultado: ¡Hola, " + nombre + "!";
}