function sair() {
    sessionStorage.clear()
    window.location = "../index.html";
}

if (sessionStorage.getItem("ID_USUARIO") != null) {
    document.querySelectorAll(".is_logged").forEach(item => {
        item.style.display = "block";
    });
    document.querySelectorAll(".is_logged_false").forEach(item => {
        item.style.display = "none";
    });

}else {
    document.querySelectorAll(".is_logged").forEach(item => {
        item.style.display = "none";
    });
    document.querySelectorAll(".is_logged_false").forEach(item => {
        item.style.display = "block";
    });
}
document.querySelectorAll(".selects-links").forEach(trigger => {
    trigger.addEventListener("click", (e) => {
        e.preventDefault();
        let panel = trigger.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});
