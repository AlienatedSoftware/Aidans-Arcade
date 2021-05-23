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

    //Board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'assets/images/memory/question-mark.png')
            card.setAttribute('data-id', i)
            grid.appendChild(card)
        }
    }

    createBoard()

})