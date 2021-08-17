// Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado (lado) {
    return lado * 4;
}

//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado (lado) {
    return lado * lado;
}
//console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

// Código del triángilo

console.group("Triángulos");
//
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
//
// console.log(
//     "Los lados del triángulo miden: "
//     + ladoTriangulo1
//     + " cm, "
//     + ladoTriangulo2
//     + " cm, "
//     + " y la base mide: "
//     + baseTriangulo
//     + " cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

function areaTriangulo(altura, base) {
    return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + " cm^2");

console.groupEnd();

// Código del círculo

console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + " cm");

// Diámetro
function diameterioCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diameterioCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
function alturaTriangulo(ladoA, ladoB, ladoBase) {
    if (ladoA != ladoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        // ...
    }
}
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}