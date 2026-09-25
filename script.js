function calcularIMC() {
    console.log("A funcao foi executada!");
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let imc = peso / (altura * altura);
    document.getElementById("resultado").innerHTML = imc.toFixed(2);
}