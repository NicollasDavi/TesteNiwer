document.addEventListener('DOMContentLoaded', function () {
    let navigation = document.querySelector(".navigation");

    document.querySelector('.menuToggle').addEventListener("click", function () {
        this.classList.toggle('active');
        navigation.classList.toggle('active');
    });
});