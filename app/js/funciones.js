/* ==========================================================================
   CASO PRÁCTICO 01 - 15 FUNCIONES
   ========================================================================== */

// 01. Función para sumar
function sumar(a, b) { 
    return a + b; 
}

// 02. Función para restar
function restar(a, b) { 
    return a - b; 
}

// 03. Función para multiplicar
function multiplicar(a, b) { 
    return a * b; 
}

// 04. Función para dividir (con validación de cero)
function dividir(a, b) { 
    if (b === 0) return "Error: División por 0"; 
    return a / b; 
}

// 05. Función para hallar el cuadrado
function cuadrado(a) { 
    return a * a; 
}

// 06. Función para hallar el cubo
function cubo(a) { 
    return a * a * a; 
}

// 07. Función para hallar el promedio de 3 notas
function promedio(a, b, c) { 
    return (a + b + c) / 3; 
}

// 08. Función para verificar par o impar
function esPar(a) { 
    return a % 2 === 0 ? "Es Par" : "Es Impar"; 
}

// 09. Función para hallar el mayor de dos números
function mayorDeDos(a, b) { 
    return a > b ? a : b; 
}

// 10. Función para calcular el área de un triángulo
function areaTriangulo(base, altura) { 
    return (base * altura) / 2; 
}


// 11. Función para calcular el Índice de Masa Corporal (IMC)
function calcularIMC(peso, altura) { 
    return peso / (altura * altura); 
}

// 12. Función para verificar la mayoría de edad
function mayorDeEdad(edad) { 
    return edad >= 18 ? "Mayor de edad" : "Menor de edad"; 
}

// 13. Función para calcular el perímetro de un cuadrado
function perimetroCuadrado(lado) { 
    return lado * 4; 
}

// 14. Función para verificar si un número es positivo o negativo
function positivoNegativo(num) { 
    if (num === 0) return "Cero";
    return num > 0 ? "Positivo" : "Negativo"; 
}

// 15. Función para mostrar un saludo personalizado
function saludar(nombre) { 
    return "¡Hola, " + nombre + "!"; 
}