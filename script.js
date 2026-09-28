let botao = document.getElementById("btnCalcular");

botao.addEventListener("click", calcularIMC);

function calcularIMC() {
    console.log("A funcao foi executada!");
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let imc = peso / (altura * altura);
    document.getElementById("resultado").innerHTML = imc.toFixed(2);

    if(imc < 16.0){
        document.getElementById("indice").innerHTML = "Magreza Grave";
    }else if (imc < 16.9){
        document.getElementById("indice").innerHTML = "Magreza Moderada";
    }else if (imc < 18.4){
        document.getElementById("indice").innerHTML = "Magreza Leve";
    }else if (imc < 24.9){
        document.getElementById("indice").innerHTML = "Peso Normal";
    }else if (imc < 29.9){
        document.getElementById("indice").innerHTML = "Sobrepeso";
    }else if (imc < 34.0){
        document.getElementById("indice").innerHTML = "Obesidade Grau I";
    }else if (imc < 39.9){
        document.getElementById("indice").innerHTML = "Obesidade Grau II";
    }else{
        document.getElementById("indice").innerHTML = "Obesidade Grau III";
    }
}