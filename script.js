var opnBtn = document.querySelector(".js-open");
var modalBg = document.getElementById("modal-background");
var modalBox = document.getElementById("modal-box");
var closeBtns = document.querySelectorAll(".js-close");
opnBtn.addEventListener('click', function(event) {
    event.preventDefault(); //Usually things that happen after a button is clicked (eg. form actions) are not done
    modalBg.classList.add("active");
    modalBox.classList.add("active");

})
closeBtns.forEach(node => {
    node.addEventListener('click', function(event) {
        event.preventDefault();
        modalBg.classList.remove("active");
        modalBox.classList.remove("active");
    })
})
