var btn = document.getElementById("changeImg");
var img = document.getElementById("myImg");

btn.addEventListener("click", function () {

    if (img.src.includes("1.webp")) {
        img.src = "images/2.webp";
    } else {
        img.src = "images/1.webp";
    }

});