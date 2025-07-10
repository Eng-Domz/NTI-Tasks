let field = document.getElementById("field");
field.readOnly = true;
let regex = /^[0-9]$/;
document.addEventListener("keydown", function(event) {
    if(regex.test(event.key)) {
        field.value += event.key;
    }
});