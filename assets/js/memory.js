document.addEventListener('DOMContentLoaded', () => {
    
    /*----Selectible Cards for players to choose from----*/
    const cardArray = [
        {
            name: 'game console',
            img: 'assets/images/memory/game-console.png'
        },
        {
            name: 'game console',
            img: 'assets/images/memory/game-console.png'
        },
        {
            name: 'gamer',
            img: 'assets/images/memory/gamer.png'
        },
        {
            name: 'gamer',
            img: 'assets/images/memory/gamer.png'
        },
        {
            name: 'ghost',
            img: 'assets/images/memory/ghost.png'
        },
        {
            name: 'ghost',
            img: 'assets/images/memory/ghost.png'
        },
        {
            name: 'hand held',
            img: 'assets/images/memory/hand-held.png'
        },
        {
            name: 'hand held',
            img: 'assets/images/memory/hand-held.png'
        },
        {
            name: 'heart',
            img: 'assets/images/memory/heart.png'
        },
        {
            name: 'heart',
            img: 'assets/images/memory/heart.png'
        },
        {
            name: 'rubik',
            img: 'assets/images/memory/rubik.png'
        },
        {
            name: 'rubik',
            img: 'assets/images/memory/rubik.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    /*----Game Board Creation----*/
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'assets/images/memory/question-mark.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    /*----Card Matching Function----*/
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        
        /*----Added Function to prevent players from picking same card to cheat----*/
        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'assets/images/memory/question-mark.png')
            cards[optionTwoId].setAttribute('src', 'assets/images/memory/question-mark.png')
            alert('You clicked the same card twice, find where the matching pair is!')
          }
          else if (cardsChosen[0] === cardsChosen[1]) {
            alert('Match!')
            cards[optionOneId].setAttribute('src', 'assets/images/memory/white.png')
            cards[optionTwoId].setAttribute('src', 'assets/images/memory/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        }   else {
            cards[optionOneId].setAttribute('src', 'assets/images/memory/question-mark.png')
            cards[optionTwoId].setAttribute('src', 'assets/images/memory/question-mark.png')
            alert('Try Again!')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Well Done!'
        }
    }

    /*----Card Flipping Function----*/
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