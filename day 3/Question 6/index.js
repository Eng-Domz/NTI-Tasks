let container = document.getElementById("countainer");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
const allowed = /^[0-9+\-*/ ]*$/;

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
            cards.forEach(card => {
                container.appendChild(card);
            });
        })
        .catch(err => {
            alert(err);
        });}
}) 


function createCard(num) {
    return new Promise((res,rej)=>{
        if (num <= 0 || !allowed.test(num)) {
            rej("Please enter a valid positive number");
        }else{
            let cards = [];
            for (let i = 0; i < num; i++) {
                let card = document.createElement("div");
                card.style.width = "200px";
                card.style.height = "100px";
                card.style.color = "blue";
                card.style.margin = "10px";
                card.style.textAlign = "center";
                card.style.alignSelf = "center";
                card.style.backgroundColor = "lightgreen";
                card.textContent = `Card ${i + 1}`;
                cards.push(card);
            }
            res(cards);
        }
    })
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
        let cards = [];
        for (let i = 0; i < num; i++) {
            let card = document.createElement("div");
            card.style.width = "200px";
            card.style.height = "100px";
            card.style.color = "blue";
            card.style.margin = "10px";
            card.style.textAlign = "center";
            card.style.alignSelf = "center";
            card.style.backgroundColor = "lightgreen";
            card.textContent = `Card ${i + 1}`;
            cards.push(card);
        }
        return cards;
}
