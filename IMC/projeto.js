function Somar(){
    var tn = window.document.getElementById('txtn1');
    var peso = window.document.getElementById('txtn2');
    var altura = window.document.getElementById('txtn3');
    
    var nome = prompt('Confirme seu nome novamente...')
    var n1 = Number(peso.value);
    var n2 = Number(altura.value); 

    var total = n2 * n2;
    var peso2 = n1 / total;

    if(peso2 < 18.5){
        res.innerHTML = `Seu cálculo é: <h1>${peso2.toFixed(3.1)}</h1><br><br> Olá ${nome}.<br> Seu peso está baixo da média!`
    } else if (peso2 >= 18.5 && peso2 < 24.9 ){
       res.innerHTML = `Seu cálculo é: <h1>${peso2.toFixed(3.1)}</h1><br><br>  Olá ${nome}.<br> Seu peso está normal!`
    } else if (peso2 >= 25 && peso2 < 29.9){
        res.innerHTML = `Seu cálculo é: <h1>${peso2.toFixed(3.1)}</h1><br><br>  Olá ${nome}.<br> Você está com sobrepeso! `
    } else if (peso2 >= 30 && peso2 < 34.9){
        res.innerHTML = `Seu cálculo é: <h1>${peso2.toFixed(3.1)}</h1><br><br>  Olá ${nome}.<br> Você está com obesidade Grau I.`
    } else if (peso2 >= 35 && peso2 < 39.9){
        res.innerHTML = `Seu cálculo é: <h1>${peso2.toFixed(3.1)}</h1><br><br>  Olá ${nome}.<br> Você está com obesidade Grau II. `
    } else if (peso2 >= 40) {
        res.innerHTML = `Seu cálculo é: <h1>${peso2.toFixed(3.1)}</h1><br><br>  Olá ${nome}.<br> Você está com obesidade Grau III ou Mórbida.`
    }

 

}
