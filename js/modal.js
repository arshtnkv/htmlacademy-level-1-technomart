let button = document.querySelector('.company-btn');
let modal = document.querySelector('.modal-index-technomart');
let closeButton = document.querySelector('.modal-close');

button.onclick = function () {
    modal.classList.remove("visually-hidden");
};

closeButton.onclick = function () {
    modal.classList.add("visually-hidden");
};