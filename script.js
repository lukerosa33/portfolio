document.addEventListener("DOMContentLoaded", function() {
    let projectCards = document.querySelectorAll('.project-card');
    let detailViews = document.querySelectorAll('.details-view');
    let backArrow = document.querySelector('.back-arrow');

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            let project = card.getAttribute('data-project');
            
            // Hide other cards
            projectCards.forEach(c => {
                if(c !== card) c.style.opacity = "0";
            });
            
            setTimeout(() => {
                // Show detailed view
                document.querySelector(`[data-project="${project}"].details-view`).style.display = "block";
                
                // Show back arrow
                backArrow.style.display = "block";
            }, 500); // This delay matches the CSS transition time
        });
    });

    backArrow.addEventListener('click', function() {
        // Hide detailed view
        detailViews.forEach(view => view.style.display = "none");

        // Hide back arrow
        backArrow.style.display = "none";
        
        // Show cards again
        projectCards.forEach(c => c.style.opacity = "1");
    });
});






