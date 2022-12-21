const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removetarget();
        panel.classList.add("active");
    })
} )

function removetarget() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}