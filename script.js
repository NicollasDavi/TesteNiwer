document.addEventListener('DOMContentLoaded', function () {
    let cardCarussel = document.querySelectorAll(".cardCarussel");
    let currentIndex = 0;
    let intervalId;

    function toggleCards(index) {
        cardCarussel.forEach(function (card, i) {
            if (i === index) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }

    function startAutoPlay() {
        intervalId = setInterval(function () {
            toggleCards(currentIndex);
            currentIndex = (currentIndex + 1) % cardCarussel.length;
        }, 3000);
    }

    function stopAutoPlay() {
        clearInterval(intervalId);
    }

    cardCarussel.forEach(function (card, index) {
        card.addEventListener('mouseenter', function () {
            toggleCards(index);
            stopAutoPlay();
        });

        card.addEventListener('mouseleave', function () {
            startAutoPlay();
        });
    });

    startAutoPlay();

    let navigation = document.querySelector(".navigation");

    document.querySelector('.menuToggle').addEventListener("click", function () {
        this.classList.toggle('active');
        navigation.classList.toggle('active');
    });
});
