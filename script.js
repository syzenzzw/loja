const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ('previous', 'next');
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items]
        
    }

    updateGallery(){
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
        });

        this.carouselArray.slice(0, 5).forEach((el , i) => {
            el.classList.add('gallery-item-${i+1}');
        });

    }

    setCurrentState(direction){
        if (direction.className == 'gallery-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = 'gallery-controls-${control}';
            document.querySelectorAll('.gallery-controls-${control}').innerText = control;

        })
    }

    useControls(){
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }

}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();






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



