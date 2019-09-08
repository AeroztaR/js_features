const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove', rotate);
    card.addEventListener('mouseout', defaultPos);
}

function rotate(e) {
    const cardItem = this.querySelector('.card__item');
    const halfHeight = cardItem.offsetHeight / 2;
    const halfWidth = cardItem.offsetWidth / 2;
    cardItem.style.transform = 'rotateX('+-(e.offsetY - halfHeight)/5+'deg) rotateY('+(e.offsetX - halfWidth)/5 +'deg)';
}

function defaultPos() {
    const cardItem = this.querySelector('.card__item');
    cardItem.style.transform = 'rotate(0)';
}