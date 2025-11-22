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
