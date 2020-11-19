function btn_clicked(e){
    console.log(e.target.dataset.typeIndex);
    game(e.target.dataset.typeIndex);
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", btn_clicked)
});
