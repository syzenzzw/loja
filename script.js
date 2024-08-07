const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {

    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
        this.currentIndex = 0; // Adiciona um índice para rastrear o item atual
        this.updateGallery();
    }

    updateGallery() {
        // Remove classes de todos os itens
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1', 'gallery-item-2', 'gallery-item-3', 'gallery-item-4', 'gallery-item-5');
        });

        // Adiciona classes aos 5 itens visíveis
        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
        });
    }

    setCurrentState(direction) {
        if (direction === 'previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else if (direction === 'next') {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach(control => {
            const button = document.createElement('button');
            button.className = `gallery-controls-${control}`;
            button.innerText = control.charAt(0).toUpperCase() + control.slice(1); // Capitaliza a primeira letra
            button.addEventListener('click', () => this.setCurrentState(control));
            galleryControlsContainer.appendChild(button);
        });
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

// Não é necessário chamar `useControls` aqui porque os eventos são adicionados diretamente em `setControls`








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

function comprarVela() {
    total = total + 75
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'comprar2' || e.target.id == 'janela-modal')
            modal.classList.remove('abrir')
    })
    
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}

function comprarFiltroOleo() {
    total = total + 35
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'comprar2' || e.target.id == 'janela-modal')
            modal.classList.remove('abrir')
    })
    
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}

function comprarFiltroAr() {
    total = total + 50
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'comprar2' || e.target.id == 'janela-modal')
            modal.classList.remove('abrir')
    })
    
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}



function comprarBobina() {
    total = total + 125
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'comprar2' || e.target.id == 'janela-modal')
            modal.classList.remove('abrir')
    })
    
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}

function comprarVelaIridium() {
    total = total + 100
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'comprar2' || e.target.id == 'janela-modal')
            modal.classList.remove('abrir')
    })
    
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}

function comprarBicoInjetor() {
    total = total + 200
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'comprar2' || e.target.id == 'janela-modal')
            modal.classList.remove('abrir')
    })
    
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}










//cambio

function comprarOleoCambio() {
    total = total + 50
    const modal = document.getElementById('janela-modal2')
    modal.classList.add('abrir')
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'comprar2' || e.target.id == 'janela-modal2')
            modal.classList.remove('abrir')
    })
    
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}

function comprarEmbreagem() {
    total = total + 150
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'comprar2' || e.target.id == 'janela-modal')
            modal.classList.remove('abrir')
    })
    
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}

function comprarArranque() {
    total = total + 750
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'comprar2' || e.target.id == 'janela-modal')
            modal.classList.remove('abrir')
    })
    
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}

function comprarConversor() {
    total = total + 1200
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'comprar2' || e.target.id == 'janela-modal')
            modal.classList.remove('abrir')
    })
    
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}

function comprarCaixa() {
    total = total + 2000
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'comprar2' || e.target.id == 'janela-modal')
            modal.classList.remove('abrir')
    })
    
    document.getElementById('valortotal').innerHTML = "Total : R$ " + total
}



