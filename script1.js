const cardsData = [
    {
      name: "Zeus",
      mythology: "Greek",
      title: "King of the Gods",
      symbol: "⚡",
      description: "Ruler of Mount Olympus, god of the sky and thunder.",
      image: "zeus.png"
    },
    {
      name: "Ra",
      mythology: "Egyptian",
      title: "Sun God",
      symbol: "☀️",
      description: "Ra travels through the underworld at night and rises every morning.",
      image: "ra.png"
    },
    {
      name: "Thor",
      mythology: "Norse",
      title: "God of Thunder",
      symbol: "⚡",
      description: "Thor is known for wielding Mjölnir and his strength in battle.",
      image: "thor.png"
    }
    // Add more cards here
  ];
  
  const container = document.getElementById('card-container');
  const mythologyFilter = document.getElementById('mythology');
  
  // Function to create a card
  function createCard(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    
    cardElement.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <h3>${card.name}</h3>
          <p>${card.symbol}</p>
        </div>
        <div class="card-back">
          <h4>${card.title}</h4>
          <p>${card.description}</p>
        </div>
      </div>
    `;
    
    return cardElement;
  }
  
  // Function to load cards based on the selected mythology
  function loadCards() {
    container.innerHTML = ''; // Clear existing cards
    const filteredCards = cardsData.filter(card => {
      const selectedMythology = mythologyFilter.value;
      return selectedMythology === 'all' || card.mythology === selectedMythology;
    });
    
    filteredCards.forEach(card => {
      const cardElement = createCard(card);
      container.appendChild(cardElement);
    });
  }
  
  // Event listener for filter changes
  mythologyFilter.addEventListener('change', loadCards);
  
  // Initial load of cards
  loadCards();
  