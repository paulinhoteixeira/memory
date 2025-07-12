let flippedCards = []
let matchedPairs = 0
let attempts = 0
let isCheckingPair = false

const cardItems = [
  {id: 1, content: "🚀", matched: false},
  {id: 2, content: "🚀", matched: false},
  {id: 3, content: "😎", matched: false},
  {id: 4, content: "😎", matched: false},
  {id: 5, content: "🎮", matched: false},
  {id: 6, content: "🎮", matched: false},
  {id: 7, content: "🎨", matched: false},
  {id: 8, content: "🎨", matched: false},
  {id: 9, content: "🎯", matched: false},
  {id: 10, content: "🎯", matched: false},
  {id: 11, content: "🎲", matched: false},
  {id: 12, content: "🎲", matched: false},
  {id: 13, content: "🎸", matched: false},
  {id: 14, content: "🎸", matched: false},
  {id: 15, content: "🎪", matched: false},
  {id: 16, content: "🎪", matched: false}
]

function shuffleCards(array){
  const shuffled = array.sort(() => Math.random() > 0.5 ? 1 : -1)
  return shuffled
}

const cards = shuffleCards(cardItems)
console.log(cards)