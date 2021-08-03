const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".cancelbook");

function hideModal() {
    modal.classList.add("hide-modal");
    modal.classList.remove("show-modal");

}

function showModal(event) {
    console.log(event);
    let bookString = '<p> Title : ' + event['Title'] + '</p>' +
        '<p> Published : ' + event['Published'] + '</p>' +
        '<p> Author :' + event['Author'] + '</p>' +
        '<p> Version : ' + event['Version'] + '</p>' +
        '<p> Comments : ' + event['Version'] + '</p>'
    var modalBody = document.querySelector(".modal-book-display");
    console.log(bookString);
    modalBody.innerHTML = bookString;
    modal.classList.add("show-modal");
    modal.classList.remove("hide-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        // toggleModal();
    }
}

closeButton.addEventListener("click", hideModal);
window.addEventListener("click", windowOnClick);