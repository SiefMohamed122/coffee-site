function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}
window.addEventListener("load", () => {
    const footer = document.getElementById("footer");
    const page = document.body.dataset.page;

    // default behavior
    footer.style.height = "auto";

    // page-specific footer height
    if (page === "home") {
        footer.style.minHeight = "280px";
    }

    if (page === "About") {
        footer.style.minHeight = "30px";
    }

    if (page === "contact") {
        footer.style.minHeight = "450px";
    }
});
