function Somar(){
    var tn = window.document.getElementById('txtn1');
    var peso = window.document.getElementById('txtn2');
    var altura = window.document.getElementById('txtn3');
    

    var n1 = Number(peso.value);
    var n2 = Number(altura.value); 

    var total = n2 * n2;
    var peso2 = n1 / total;

    if(peso2 < 18.5){
        res.innerHTML = `${peso2}<br> Peso baixo da média!`
    }

 

}
