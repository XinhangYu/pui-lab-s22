function onAddItem() {
    let list = document.getElementById("grocery-list");
    let itemInput = document.getElementById("text_input");
    let newItem = document.createElement("li");

    newItem.appendChild(document.createTextNode(itemInput.value));
    list.appendChild(newItem);
}

function deleteListItem(item) {
    console.log(item);
    item.parentNode.removeChild(item);
}

function completeListItem(item) {
    if (item.checked) { // true if the input checkbox is checked
        item.parentNode.style.textDecoration = "line-through";
        // in css, this would be: "text-decoration: line-through"
    } else {
        item.parentNode.style.textDecoration = "none";
        // in css, this would be: "text-decoration: none"
    }
}