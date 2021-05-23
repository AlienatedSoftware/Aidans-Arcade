document.addEventListener('DOMContentLoaded', () => {
    
    //Cards
    const cardArray = [
        {
            name: 'game console',
            img: 'assets/memory/game-console.png'
        },
        {
            name: 'game console',
            img: 'assets/memory/game-console.png'
        },
        {
            name: 'gamer',
            img: 'assets/memory/gamer.png'
        },
        {
            name: 'gamer',
            img: 'assets/memory/gamer.png'
        },
        {
            name: 'ghost',
            img: 'assets/memory/ghost.png'
        },
        {
            name: 'ghost',
            img: 'assets/memory/ghost.png'
        },
        {
            name: 'hand held',
            img: 'assets/memory/hand-held.png'
        },
        {
            name: 'hand held',
            img: 'assets/memory/hand-held.png'
        },
        {
            name: 'heart',
            img: 'assets/memory/heart.png'
        },
        {
            name: 'heart',
            img: 'assets/memory/heart.png'
        },
        {
            name: 'rubik',
            img: 'assets/memory/rubik.png'
        },
        {
            name: 'rubik',
            img: 'assets/memory/rubik.png'
        },
    ]

    const grid = document.querySelector('.grid')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //Board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'assets/images/memory/question-mark.png')
            card.setAttribute('data-id', i)
            // card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //Card Match
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('Match!')
            cards[optionOneId].setAttribute('src', 'assets/images/white.png')
            cards[optionTwoId].setAttribute('src', 'assets/images/white.png')
            cardsWon.push(cardsChosen)
        }   else {
            cards[optionOneId].setAttribute('src', 'assets/images/question-mark.png')
            cards[optionTwoId].setAttribute('src', 'assets/images/question-mark.png')
            alert('Try Again!')
        }
        cardsChosen = []
        cardsChosenId = []
    }

    //Flip Card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})