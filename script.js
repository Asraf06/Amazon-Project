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

const scroll = new LocomotiveScroll ({
    el: document.querySelector('#main'),
    smooth: true
});

const back_to_top = document.querySelector("#back-to-top-link");

back_to_top.addEventListener("click", () => {
    scroll.scrollTo(0);
})