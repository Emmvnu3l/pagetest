window.addEventListener("scroll", function() {
    const nav = document.getElementById("scrollNav");
    if (window.scrollY > 100) { // al bajar más de 100px
        nav.style.position = "fixed";
        nav.style.top = "0";
        nav.style.width = "100%";
        nav.style.zIndex = "1030";
    } else {
        nav.style.position = "static"; // vuelve a su posición normal
    }
});