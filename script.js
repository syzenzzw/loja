var total = 0

function comprarOleo() {
    total = total + 20
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'comprar2' || e.target.id == 'janela-modal')
            modal.classList.remove('abrir')
    })

    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}



