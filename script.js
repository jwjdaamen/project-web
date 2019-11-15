function buttonClass() {
    document.querySelector('form').classList.toggle('filtershow');
}

document.querySelector('button').addEventListener("click", buttonClass);