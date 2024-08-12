
var total = 0


let count = 1;


setInterval(nextSlide, 3500);


function nextSlide() {
    count++;
    if (count > 6) {  
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;  
}







function comprarOleo() {
    total = total + 20
   alert("Você Comprou!")
   

    document.getElementById('valortotal').innerHTML = "Total: R$ " + total
}

function comprarVela() {
    total = total + 75

    alert("Você Comprou!")
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}

function comprarFiltroOleo() {
    total = total + 35
    
    alert("Você Comprou!")
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}

function comprarFiltroAr() {
    total = total + 50
    
    alert("Você Comprou!")
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}



function comprarBobina() {
    total = total + 125
    
    alert("Você Comprou!")
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}

function comprarVelaIridium() {
    total = total + 100
    
    alert("Você Comprou!")
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}

function comprarBicoInjetor() {
    total = total + 200
    
    alert("Você Comprou!")
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}

//cambio

function comprarOleoCambio() {
    total = total + 50
    
    alert("Você Comprou!")
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}

function comprarEmbreagem() {
    total = total + 150
    alert("Você Comprou!")
    
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}

function comprarArranque() {
    total = total + 750
    alert("Você Comprou!")
    
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}

function comprarConversor() {
    total = total + 1200
    alert("Você Comprou!")
    
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}

function comprarCaixa() {
    total = total + 2000
    alert("Você Comprou!")
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}



