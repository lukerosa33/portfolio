function toggleCard(card) {
    // Close any active popups.
    closeActivePopup();

    // Open the clicked card's popup.
    const popup = card.querySelector('.popup');
    popup.style.display = "block";
    setTimeout(() => {
        popup.style.opacity = "1";
        popup.style.transform = "scale(1)";
    }, 10);
    popup.classList.add('active');
}

function closeCard() {
    closeActivePopup();
}

function closeActivePopup() {
    const activePopups = document.querySelectorAll('.popup.active');
    activePopups.forEach(popup => {
        popup.style.opacity = "0";
        popup.style.transform = "scale(0.95)";
        setTimeout(() => {
            popup.style.display = "none";
            popup.classList.remove('active');
        }, 300);
    });
}

document.addEventListener('click', function(e) {
    const isProjectCard = e.target.closest('.project-card') && !e.target.closest('.popup');

    if (!e.target.closest('.popup') && !e.target.classList.contains('close-btn') && !isProjectCard) {
        closeActivePopup();
    }
});
document.addEventListener('click', function(e) {
    const isInsidePopup = e.target.closest('.popup');
    const isCloseBtn = e.target.classList.contains('close-btn');
    const isProjectCard = e.target.closest('.project-card') && !isInsidePopup;

    if (!isInsidePopup && !isCloseBtn && !isProjectCard) {
        closeActivePopup();
    }
});





