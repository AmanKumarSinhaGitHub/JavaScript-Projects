let boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("mouseenter", function () {
        box.childNodes[3].style.opacity = 1;
    });

    box.addEventListener("mouseleave", function () {
        box.childNodes[3].style.opacity = 0;
    });

    box.addEventListener("mousemove", function (details) {
        box.childNodes[3].style.left = details.x + "px";
    });
});
