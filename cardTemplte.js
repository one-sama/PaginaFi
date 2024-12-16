
let template = document.getElementById("temp");

let cards = template.content.cloneNode(true);

let main = document.querySelector("main");

main.appendChild(cards);

for (let i = 0; i < 3; i++) { 
    let cardClone = template.content.cloneNode(true);
    main.appendChild(cardClone);
}