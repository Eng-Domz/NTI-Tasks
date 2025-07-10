let header = document.getElementById('header');
header.style.textAlign = "right";   


let navigation = document.getElementById('navigation');
navigation.style.textAlign = "right";

let nav = document.getElementById('nav');
nav.style.width = "fit-content";
nav.style.margin = "auto";
nav.style.listStyle = "circle";

let footer = document.createElement('div');
let centerClass = document.querySelector('.center');
let newImg = document.createElement('img');
newImg.src = "dom.jpg";
centerClass.appendChild(footer);
footer.appendChild(newImg);
footer.style.textAlign = "left"