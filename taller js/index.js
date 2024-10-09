function esBisiesto(año) {
    // Variable que almacena el resultado de si es divisible entre 4
    let divisiblePor4 = año % 4 === 0;
    // Variable que almacena el resultado de si es divisible entre 100
    let divisiblePor100 = año % 100 === 0;
    // Variable que almacena el resultado de si es divisible entre 400
    let divisiblePor400 = año % 400 === 0;

    // Un año es bisiesto si es divisible por 4 pero no por 100,
    // o si es divisible por 400.
    if (divisiblePor4 && (!divisiblePor100 || divisiblePor400)) {
        return true; // El año es bisiesto
    } else {
        return false; // El año no es bisiesto
    }
}

// Pruebas con diferentes entradas
console.log(esBisiesto(2020)); // true (bisiesto)
console.log(esBisiesto(1900)); // false (no bisiesto)
console.log(esBisiesto(2000)); // true (bisiesto)
console.log(esBisiesto(2023)); // false (no bisiesto)

function celsiusAFahrenheit(celsius) {
    // Convertir Celsius a Fahrenheit usando la fórmula
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Pruebas con diferentes entradas
console.log(celsiusAFahrenheit(0));    // 32 (punto de congelación del agua)
console.log(celsiusAFahrenheit(100));  // 212 (punto de ebullición del agua)
console.log(celsiusAFahrenheit(25));   // 77 (temperatura moderada)
console.log(celsiusAFahrenheit(-10));  // 14 (temperatura bajo cero)



function mayorDeDos(n1, n2) {
    // Comparar los dos números y devolver el mayor
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

// Pruebas con diferentes entradas
console.log(mayorDeDos(10, 5));   // 10
console.log(mayorDeDos(3, 7));    // 7
console.log(mayorDeDos(-1, -5));  // -1
console.log(mayorDeDos(8, 8));    // 8 (si ambos son iguales, devuelve cualquiera de los dos)

function convertirMinutos(minutos) {
    // Variable para calcular las horas
    let horas = Math.floor(minutos / 60);
    
    // Variable para calcular los minutos restantes
    let minutosRestantes = minutos % 60;

    // Devolver una cadena con el formato "X horas y Y minutos"
    return `${horas} horas y ${minutosRestantes} minutos`;
}

// Pruebas con diferentes entradas
console.log(convertirMinutos(135));  // "2 horas y 15 minutos"
console.log(convertirMinutos(45));   // "0 horas y 45 minutos"
console.log(convertirMinutos(60));   // "1 horas y 0 minutos"
console.log(convertirMinutos(200));  // "3 horas y 20 minutos"

function estaEnRango(numero, inicio, fin) {
    // Comprobar si el número está dentro del rango, incluyendo los límites
    return numero >= inicio && numero <= fin;
}

// Pruebas con diferentes entradas
console.log(estaEnRango(5, 1, 10));   // true
console.log(estaEnRango(15, 1, 10));  // false
console.log(estaEnRango(1, 1, 10));   // true
console.log(estaEnRango(10, 1, 10));  // true
console.log(estaEnRango(-3, -5, 0));  // true

function calcularPrecioFinal(precioInicial, descuento) {
    // Calcular el monto del descuento
    let montoDescuento = (precioInicial * descuento) / 100;
    
    // Calcular el precio final restando el monto del descuento al precio inicial
    let precioFinal = precioInicial - montoDescuento;
    
    // Devolver el precio final
    return precioFinal;
}

// Pruebas con diferentes entradas
console.log(calcularPrecioFinal(100, 20));  // 80
console.log(calcularPrecioFinal(250, 15));  // 212.5
console.log(calcularPrecioFinal(50, 10));   // 45
console.log(calcularPrecioFinal(500, 50));  // 250
console.log(calcularPrecioFinal(1000, 5));  // 950

function puedeVotar(edad) {
    // Devolver true si la edad es 18 o mayor, false en caso contrario
    return edad >= 18;
}

// Pruebas con diferentes entradas
console.log(puedeVotar(17)); // false
console.log(puedeVotar(18)); // true
console.log(puedeVotar(20)); // true
console.log(puedeVotar(15)); // false
console.log(puedeVotar(25)); // true

function calcularAreaTriangulo(base, altura) {
    // Calcular el área del triángulo usando la fórmula: (base * altura) / 2
    return (base * altura) / 2;
}

// Pruebas con diferentes entradas
console.log(calcularAreaTriangulo(5, 10));  // 25
console.log(calcularAreaTriangulo(3, 7));   // 10.5
console.log(calcularAreaTriangulo(8, 2));   // 8
console.log(calcularAreaTriangulo(10, 5));  // 25
console.log(calcularAreaTriangulo(6, 4));   // 12

