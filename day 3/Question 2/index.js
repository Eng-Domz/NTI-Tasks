let submitButton = document.getElementById("submitButton");
let inputText = document.getElementById("inputField");
let outputField = document.getElementById("output");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
submitButton.addEventListener("click", function() {
    outputField.innerHTML = "The equivalent date : ";

    let testInput = inputText.value;
    let regex = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/;
    if (!regex.test(testInput)) {
        alert("Invalid date format , Please enter a valid date (MM/DD/YYYY)");
    }else{
        testInput = new Date(testInput);
        outputField.innerHTML += days[testInput.getDay()];
    }
});