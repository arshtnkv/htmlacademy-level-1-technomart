let buttonsBuy = document.querySelectorAll('.buy');
let modalBasket = document.querySelector('.modal-basket');
let closeBasket = document.querySelector('.close-basket');

buttonsBuy.forEach((button) => {
    button.onclick = function () {
    modalBasket.classList.remove("visually-hidden");
    }
});

closeBasket.onclick = function () {
    modalBasket.classList.add("visually-hidden");
};