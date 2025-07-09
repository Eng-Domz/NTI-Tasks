let container = document.getElementById("countainer");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
const allowed = /^[0-9+\-*/ ]*$/;
let link = "https://jsonplaceholder.typicode.com/posts/"
// Type 1 by promise
btn.addEventListener("click",()=>{
    container.innerHTML = "";
    let num = input.value;
    if (num === "" || !allowed.test(num)) {
        alert("Please enter a valid number");
        return;
    }else{
    num = parseInt(num);
    if (num <= 0) {
        alert("Please enter a positive number");
        return;
    }
    createCard(num)
    .then(cards => {
        cards.forEach(card => container.appendChild(card));
    })
    .catch(err => console.error(err));}
}) 


function createCard(num) {
    return new Promise((res, rej) => {
        fetch(link)
            .then(response => response.json())
            .then(posts => {
                if (posts.length < num) {
                    rej("Not enough data to create cards");
                    return;
                }

                let cards = [];

                for (let i = 0; i < num; i++) {
                    let cardData = posts[i];

                    let card = document.createElement("div");
                    card.style.width = "200px";
                    card.style.color = "blue";
                    card.style.margin = "10px";
                    card.style.textAlign = "center";
                    card.style.alignSelf = "center";
                    card.style.backgroundColor = "lightgreen";

                    let cardNum = document.createElement("h2");
                    cardNum.textContent = `Card ${i + 1}`;

                    let cardTitle = document.createElement("h3");
                    cardTitle.textContent = cardData.title;

                    let cardBody = document.createElement("p");
                    cardBody.textContent = cardData.body;

                    card.appendChild(cardTitle);
                    card.appendChild(cardBody);
                    card.appendChild(cardNum);

                    cards.push(card);
                }

                res(cards);
            })
            .catch(error => rej("Fetch error: " + error));
    });
}



// Type 2 by async await
btn.addEventListener("click", async () => {
    container.innerHTML = "";
    let num = input.value;
    if (num === "" || !allowed.test(num)) {
        alert("Please enter a valid number");
        return;
    } else {
        num = parseInt(num);
        if (num <= 0) {
            alert("Please enter a positive number");
            return;
        }
        try {
            let cards = await createCard(num);
            cards.forEach(card => {
                container.appendChild(card);
            });
        } catch (err) {
            alert(err);
        }
    }
});
async function createCard(num) {
    try {
        const response = await fetch(link);
        const posts = await response.json();

        if (posts.length < num) {
            throw "Not enough data to create cards";
        }

        let cards = [];

        for (let i = 0; i < num; i++) {
            let cardData = posts[i];

            let card = document.createElement("div");
            card.style.width = "200px";
            card.style.color = "blue";
            card.style.margin = "10px";
            card.style.textAlign = "center";
            card.style.alignSelf = "center";
            card.style.backgroundColor = "lightgreen";

            let cardNum = document.createElement("h2");
            cardNum.textContent = `Card ${i + 1}`;

            let cardTitle = document.createElement("h3");
            cardTitle.textContent = cardData.title;

            let cardBody = document.createElement("p");
            cardBody.textContent = cardData.body;

            card.appendChild(cardTitle);
            card.appendChild(cardBody);
            card.appendChild(cardNum);

            cards.push(card);
        }

        return cards;
    } catch (error) {
        throw "Fetch error: " + error;
    }
}

