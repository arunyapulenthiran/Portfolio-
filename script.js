console.log("Welcome to Arunya's portfolio!");
document.querySelectorAll(".progress").forEach(function(bar) {
    const level = bar.getAttribute("data-level");
    bar.style.width = level + "%";
});
