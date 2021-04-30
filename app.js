

const hex = [0, 1, 2, 3 ,4 ,5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// event

btn.addEventListener("click", function() {
    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
// when clicking btn change btn color and background

color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;

});


// get random number in hex colors

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
};
