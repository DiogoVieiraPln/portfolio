function iniciaModal(modalID) {
    const modal = document.getElementById(modalID)
    if (modal) {
        modal.classList.add('mostrar')
        modal.addEventListener('click', (e) => {
            if (e.target.id == 'fechou' || e.target.className == 'fechar' || e.target.className == 'modal' || e.target.id == 'modal-artes') {
                modal.classList.remove('mostrar')
            }
        });
    }
}

const imagens = document.querySelector('imagemH')

const botão = document.querySelector('.love')
const botão1 = document.querySelector('.love1')
const botão2 = document.querySelector('.love2')
const botão3 = document.querySelector('.love3')
const botão4 = document.querySelector('.love4')
const botão5 = document.querySelector('.love5')
const botão6 = document.querySelector('.love6')
const botão7 = document.querySelector('.love7')
const botão8 = document.querySelector('.love8')
const botão9 = document.querySelector('.love9')
const botão10 = document.querySelector('.love10')
const botão11 = document.querySelector('.love11')


botão.addEventListener('click', () => {iniciaModal('modal-artes')
document.querySelector('.imagemH').src = './img/fornecedores.jpg';
});

botão1.addEventListener('click', () => {iniciaModal('modal-artes')
  document.querySelector('.imagemH').src = './img/sitemassas.jpg';
});

botão2.addEventListener('click', () => {iniciaModal('modal-artes')
  document.querySelector('.imagemH').src = './img/netflix.jpg';
});

botão3.addEventListener('click', () => {iniciaModal('modal-artes')
  document.querySelector('.imagemH').src = './img/obaa.com.br.jpg';
});

botão4.addEventListener('click', () => {iniciaModal('modal-artes')
  document.querySelector('.imagemH').src = './img/sitevarycrazy.jpg';
});

botão5.addEventListener('click', () => {iniciaModal('modal-artes')
  document.querySelector('.imagemH').src = './img/sitevarycrazy2.jpg';
});

botão6.addEventListener('click', () => {iniciaModal('modal-artes')
  document.querySelector('.imagemH').src = 'img/banner-zema-C.jpg';
});

botão7.addEventListener('click', () => {iniciaModal('modal-artes')
  document.querySelector('.imagemH').src = './img/hamburguer-cardapio.jpg';
});

botão8.addEventListener('click', () => {iniciaModal('modal-artes')
  document.querySelector('.imagemH').src = 'img/mockup-hamburguer-2-C.jpg';
});

botão9.addEventListener('click', () => {iniciaModal('modal-artes')
  document.querySelector('.imagemH').src = 'img/mockup2-sonho-de-valsa-C.jpg';
});

botão10.addEventListener('click', () => {iniciaModal('modal-artes')
  document.querySelector('.imagemH').src = './img/pizzagrande.jpg';
});

botão11.addEventListener('click', () => {iniciaModal('modal-artes')
  document.querySelector('.imagemH').src = 'img/Biotrof-panfleto.png';
});