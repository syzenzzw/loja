var total = 0

function comprarOleo() {
    total = total + 20
    alert("Você comprou um Óleo para motor Sintético")
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}

function show() {
    alert("Comprou!")
}

let count= 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
nextImage();
}, 3500)

function nextImage(){
	count++;
	if (count>6){
		count = 1;

	}

	document.getElementById("radio"+count).checked = true;
}