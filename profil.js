window.onload = init;

function init() {
    var select = document.getElementById("choixMemory");
    var image = document.getElementById("imageMemory");

    select.addEventListener("change", function() {
        var option = select.options[select.selectedIndex];
        image.src = option.getAttribute("data-image");
    });

    var select2 = document.getElementById("choixTaille");
    var image2 = document.getElementById("imageTaille");

    select2.addEventListener("change", function() {
        var option2 = select2.options[select2.selectedIndex];
        image2.src = option2.getAttribute("data-image");
    });


}



