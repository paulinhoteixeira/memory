let flippedCards = []
let matchedPairs = 0
let attempts = 0
let isCheckingPair = false

const cardItems = [
  { id: 1, content: "🚀", matched: false },
  { id: 2, content: "🚀", matched: false },
  { id: 3, content: "😎", matched: false },
  { id: 4, content: "😎", matched: false },
  { id: 5, content: "🎮", matched: false },
  { id: 6, content: "🎮", matched: false },
  { id: 7, content: "🎨", matched: false },
  { id: 8, content: "🎨", matched: false },
  { id: 9, content: "🎯", matched: false },
  { id: 10, content: "🎯", matched: false },
  { id: 11, content: "🎲", matched: false },
  { id: 12, content: "🎲", matched: false },
  { id: 13, content: "🎸", matched: false },
  { id: 14, content: "🎸", matched: false },
  { id: 15, content: "🎪", matched: false },
  { id: 16, content: "🎪", matched: false }
]

function shuffleCards(array) {
  const shuffled = array.sort(() => Math.random() > 0.5 ? 1 : -1)
  return shuffled
}

function createCard(card) {
  const cardElement = document.createElement("div")
  cardElement.className = "card"

  const emoji = document.createElement("span")
  emoji.className = "card-emoji"
  emoji.textContent = card.content

  cardElement.appendChild(emoji)

  cardElement.addEventListener("click", () => handleCardClick(cardElement, card))

  return cardElement
}

function renderCards() {
  const deck = document.getElementById("deck")
  deck.innerHTML = ""


  const cards = shuffleCards(cardItems)
  cards.forEach(item => {
    const cardElement = createCard(item)

    deck.appendChild(cardElement)

  });

}

function handleCardClick(cardElement, card) {    
  

  if (isCheckingPair || cardElement.classList.contains("revealed")) {
    return
  }

  cardElement.classList.add("revealed")
  flippedCards.push({ cardElement, card })

  if (flippedCards.length === 2) {
    isCheckingPair = true
    attempts++

    const [firstCard, secondCard] = flippedCards

    if (firstCard.card.content === secondCard.card.content) {
      matchedPairs++


      cardItems.forEach(item => {
        if (item.content === firstCard.card.content) {
          item.matched = true
        }
      })

      flippedCards = []
      isCheckingPair = false
      updateStats()

      const toFind = cardItems.find(item => item.matched === false)
      if (!toFind) {
        setTimeout(() => alert("Parabéns, você encontrou todos os pares!"), 100)
      }
    } else {
      setTimeout(() => {
        firstCard.cardElement.classList.remove("revealed")
        secondCard.cardElement.classList.remove("revealed")
        console.log("apaguei")

        flippedCards = []
        isCheckingPair = false
        updateStats()

      }, 600)
    }
    
  }

}

function updateStats() {
  document.getElementById("stats").textContent = `${matchedPairs} acertos de ${attempts} tentativas`
}

function resetGame() {
  flippedCards = []
  isCheckingPair = false
  attempts = 0
  matchedPairs = 0

  cardItems.forEach((card) => (card.matched = false))
  renderCards()
  updateStats()
}


function initGame() {

  renderCards()

  document.getElementById("restart").addEventListener("click", resetGame)
}

initGame()

