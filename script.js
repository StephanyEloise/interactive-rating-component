const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");

const submitBtn = document.getElementById("submit-btn");
const items = document.querySelectorAll(".item");
const result = document.getElementById("score-value");

let dataIndex = 0

items.forEach(item => {
    item.addEventListener("click", scoreSelection)
});


function scoreSelection(evt) {
    const targetClicked = evt.target
    dataIndex = targetClicked.attributes['data-index'].value
    
    items.forEach(item => {
        item.classList.remove("selected");
    });
    
    targetClicked.classList.add("selected");
    }

    items.forEach(item => {
        item.addEventListener("click", scoreSelection);
});

submitBtn.addEventListener("click", () => {
    screen1.style.display = "none";
    screen2.style.display = "flex";
    
    result.textContent = "You selected " + dataIndex + " out of 5";
});