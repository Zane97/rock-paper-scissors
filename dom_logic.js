// Get player selection and play a round
function btn_clicked(e){
    game(e.target.dataset.typeIndex);
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", btn_clicked)
});



// Display Game output
const output = document.querySelector("#output");
function display_results(results){
    output.innerHTML = "";
    const out_text = document.createElement("H1");
    out_text.textContent = results;
    output.appendChild(out_text)
}