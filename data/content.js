const plusButton = document.querySelector(".product-card-footer-button")
const plusIcon = document.querySelector('.plus');

eventListeners();

function eventListeners() {

    plusButton.eventListeners('click', changeIcon);

}

function changeIcon(e) {

    e.preventDefault();

    plusIcon.innerHTML= '<i class="fa-solid fa-field-hockey-stick-ball"></i>';

   
}