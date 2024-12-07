const header2 = document.querySelector("h1");
header2.style.color = "purple";



const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");



button.addEventListener('click', () => {
    if (input.value != ''){
        displayList(input.value);
        setChapterList();
        input.value = ''
        input.focus();
    }
});

function displayList (item){
    // if (input.value.trim() === " ") {
    //     input.focus();
    //     return;
    // }
    let listItem = document.createElement("li");
    listItem.textContent = item;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    input.value == '';
    input.focus();
    deleteButton.addEventListener("click", function () {
        list.removeChild(listItem);
    });
}
function setChapterList () {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

    
const chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList (chapter);
    
});
function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters'));

});


