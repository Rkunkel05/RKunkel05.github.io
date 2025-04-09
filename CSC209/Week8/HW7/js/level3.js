function imageVisibility() {
    const img = document.getElementById("myImg0");
    const checkbox = document.getElementById("myCheck");
    if (checkbox.checked) {
        if (img)
        img.style.opacity = "0";
    } else {
        img.style.opacity = "100";
    }
}