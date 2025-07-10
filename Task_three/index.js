import { circle } from "./circle.js";
import { rectangle } from "./rectangle.js";
import { square } from "./square.js";
const select = document.getElementById("selection");
const calculateButton = document.getElementById("calculate");
const resultsArea = document.getElementById("results");
const circleInputs = document.getElementById("circleInputs");
const rectangleInputs = document.getElementById("rectangleInputs");
const squareInputs = document.getElementById("squareInputs");

select.addEventListener("change", (e) => {
    showInputs();
});
calculateButton.addEventListener("click" , (e)=>{
    calculateShape();
})

function showInputs(){
    let selectedShape = select.value;
    resultsArea.innerHTML = "";
    if(selectedShape == ""){
        calculateButton.classList.add("disabled");
    }else{
        calculateButton.classList.remove("disabled");
    }

    
    switch(selectedShape){
        case "circle":
            circleInputs.classList.remove("hidden");
            rectangleInputs.classList.add("hidden");
            squareInputs.classList.add("hidden");
            break;
        case "rectangle":
            circleInputs.classList.add("hidden");
            rectangleInputs.classList.remove("hidden");
            squareInputs.classList.add("hidden");
            break;
        case "square":
            circleInputs.classList.add("hidden");
            rectangleInputs.classList.add("hidden");
            squareInputs.classList.remove("hidden");
            break;
        default:
            circleInputs.classList.add("hidden");
            rectangleInputs.classList.add("hidden");
            squareInputs.classList.add("hidden");
    }
        
}


function calculateShape(){
    let selectedShape = select.value;
    switch(selectedShape){
        case "circle":
            let radius = parseFloat(document.getElementById("radius").value);
            if(isNaN(radius) || radius <= 0){
                resultsArea.innerHTML = "Please enter a valid radius.";
                return;
            }
            let circleShape = new circle(radius);
            resultsArea.innerHTML = circleShape.toString();
            break;
        case "rectangle":
            let length = parseFloat(document.getElementById("length").value);
            let width = parseFloat(document.getElementById("width").value);
            if(isNaN(length) || length <= 0 || isNaN(width) || width <= 0){
                resultsArea.innerHTML = "Please enter valid length and width.";
                return;
            }
            let rectangleShape = new rectangle(length, width);
            resultsArea.innerHTML = rectangleShape.toString();
            break;
        case "square":
            let side = parseFloat(document.getElementById("side").value);
            if(isNaN(side) || side <= 0){
                resultsArea.innerHTML = "Please enter a valid side length.";
                return;
            }
            let squareShape = new square(side);
            resultsArea.innerHTML = squareShape.toString();
            break;
        default:
            resultsArea.innerHTML = "Please select a shape.";
            return;
}
}

