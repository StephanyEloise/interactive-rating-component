const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");

const submitBtn = document.getElementById("submit-btn");
const result = document.getElementById('result');

const items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("click", scoreSelection)
});

submitBtn.addEventListener("click", () => {
    screen1.style.display = "none";
    screen2.style.display = "block";
});

function scoreSelection(evt) {
    const targetClicked = evt.target
    const valueSelected = targetClicked.attributes['data-index'].value
    console.log(targetClicked.classList.add('selected'))
    
}