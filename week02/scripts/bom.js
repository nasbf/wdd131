const header2 = document.querySelector("h1");
header2.style.color = "purple";



const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");



button.addEventListener('click', function () {
    if (input.value.trim() === " ") {
        input.focus();
        return;
    }
    const listItem = document.createElement("li");
    listItem.textContent = input.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    input.value == '';
    input.focus();
    deleteButton.addEventListener("click", function () {
        list.removeChild(listItem);
    });






});


