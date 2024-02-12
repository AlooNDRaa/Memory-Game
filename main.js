let cards = [
        {id: 1, image: './images/dabi.jpg'},
        {id: 2, image: './images/Gaara.jpg'},
        {id: 3, image: './images/hisoka.png'},
        {id: 4, image: './images/kabuto.png'},
        {id: 5, image: './images/Korosensei.webp'},
        {id: 6, image: './images/monokuma.webp'},
        {id: 7, image: './images/muzan.jpg'},
        {id: 8, image: './images/sukuna.png'},
        {id: 1, image: './images/dabi.jpg'},
        {id: 2, image: './images/Gaara.jpg'},
        {id: 3, image: './images/hisoka.png'},
        {id: 4, image: './images/kabuto.png'},
        {id: 5, image: './images/Korosensei.webp'},
        {id: 6, image: './images/monokuma.webp'},
        {id: 7, image: './images/muzan.jpg'},
        {id: 8, image: './images/sukuna.png'}
];

function flipsCards(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

cards = flipsCards(cards);

function createCardsElement(card) {
     let element = document.createElement('div');
     element.className = 'card';
     element.dataset.cardId = card.id;
    let image = document.createElement('img');
    image.src = card.image;
    element.appendChild(image);
    element.addEventListener('click', cardClickHandler);
     return element;
}


function renderGameBoard() {
    let gameBoard = document.querySelector('#Board');
    cards.forEach(function(card){
        let cardElement = createCardsElement(card);
        gameBoard.appendChild(cardElement);
    });
}

function renderScore(){
    let scoreBoard = document.querySelector('#score');
    scoreBoard.innerHTML = 'Score: ' + score;
}

let score = 0; 
flipsCards = [];

function cardClickHandler(event){
    let card = event.target;
    if (flipsCards.length < 2 && !card.classList.contains('flipped')) {
        flipsCard(card);
        flipsCards.push(card);
        if (flipsCards.length === 2) {
            checkForMath();
        }
    }
}

function flipsCard(card) {
    card.classList.add('flipped');
}

function checkForMath() {
    let card1 = flipsCards[0];
    let card2 = flipsCards[1];

    if (card1.dataset.cardId === card2.dataset.cardId) {
        score += 2;
        flipsCards= [];
        renderScore();
    }
    else {
        setTimeout (function() {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flipsCards = [];
            renderScore();
        }, 1000);
    }
}


function restartGame() {
    
}

renderGameBoard();
renderScore();