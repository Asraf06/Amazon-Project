// Back to top functionality
document.getElementById("back-to-top-link").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Adjust main content margin when window resizes
window.addEventListener('resize', function() {
    const headerHeight = document.querySelector('header').offsetHeight;
    document.querySelector('main').style.marginTop = headerHeight + 'px';
});