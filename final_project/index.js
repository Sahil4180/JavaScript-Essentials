//by SAHIL SAWANT

let cards=[{
        image:"https://www.entertainmentearth.com/news/wp-content/uploads/2014/10/iron-man-wrap.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://www.entertainmentearth.com/news/wp-content/uploads/2014/10/iron-man-wrap.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://mocah.org/uploads/posts/330526-Captain-America-Mjolnir-Hammer-Shield-Avengers-Endgame-4K-iphone-wallpaper.jpg",
        value:2,
        status:"closed"

    },
    {
        image:"https://mocah.org/uploads/posts/330526-Captain-America-Mjolnir-Hammer-Shield-Avengers-Endgame-4K-iphone-wallpaper.jpg",
        value:2,
        status:"closed"

    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNC4P9-TOgRKlFn9bip3kedCKohQ3lDPZgg&usqp=CAU",
        value:3,
        status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNC4P9-TOgRKlFn9bip3kedCKohQ3lDPZgg&usqp=CAU",
        value:3,
        status:"closed"
    },
    {
        image:"https://lh3.googleusercontent.com/proxy/gw46XQSi7LrQ-Nxy8P8G2g4Fxqj8I4mwGqxJKdaweMrYoGWncmDpbIys1X9wHg5bUiOHMcyWxd9Gjn8BbJYADc8uWopTOCmNwUTYimCrLVuefj6Qgud-lWxWTfPI27kuz-iO0Me74cuB",
        value:4,
        status:"closed"
    },
    {
        image:"https://lh3.googleusercontent.com/proxy/gw46XQSi7LrQ-Nxy8P8G2g4Fxqj8I4mwGqxJKdaweMrYoGWncmDpbIys1X9wHg5bUiOHMcyWxd9Gjn8BbJYADc8uWopTOCmNwUTYimCrLVuefj6Qgud-lWxWTfPI27kuz-iO0Me74cuB",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/564x/c3/16/93/c31693af849337c76ea3f58769a25995.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/564x/c3/16/93/c31693af849337c76ea3f58769a25995.jpg",
        value:5,
        status:"closed"
    }   
]

                                                                                                            // durnsten shuffling alogorithm
for (let i = cards.length - 1; i >= 0; i--) {
let j = Math.floor(Math.random() * (i + 1));
temp = cards[i];
cards[i] = cards[j];
cards[j] = temp;
}
let cardsCopy = cards;
function displayCards(data) {
let cardsString = "";
data.forEach(function(card, index) {
    cardsString += `
        <div class="card" style="background-image:url('${card.image}')">
            <div class="overlay ${card.status}" onclick="openCards(${index})">
            </div>
        </div>     
    `;
});
document.getElementById('cards').innerHTML = cardsString;
}
displayCards(cards);
let cardCount = 1;
let val1 = null,
val2 = null;
let score = 0;
function openCards(index) {
console.log(cards);
cards[index].status = "opened";
if (cardCount === 1) {
    val1 = cards[index].value;
    cardCount++;
} else if (cardCount == 2) {
    val2 = cards[index].value;

    if (val1 === val2) {
        score++;
        document.getElementById('score').innerText = score;

        // reset after one guess
        val1 = null;
        val2 = null;
        cardCount = 1;
    } else {
        alert("YOUR GAME IS OVER");
        location.reload();
    }
}
displayCards(cards);
}
