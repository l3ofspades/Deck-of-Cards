const drawButton = document.getElementById("draw-button");
const cardContainer = document.getElementById("card-container");

let deckId = null;

fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then(res => res.json())
    .then(data => {
        deckId = data.deck_id;
        console.log(deckId);
            });

    drawButton.addEventListener("click", () => { 
            if (!deckId) return;


            fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
                .then(res => res.json())
                .then(data => {
                    const card = data.cards[0];
                    const img =
            document.createElement("img");
                    img.src = card.image;
                    img.alt = `${card.value} of ${card.suit}`;
                    cardContainer.appendChild(img);

                    if (data.remaining === 0) {
                        drawButton.disabled = true;
                        drawButton.textContent = "No more cards to draw";
                    }
                });
        });
          

            
        