$(document).ready(function () {
    $(".bar-container").click(function () {
        $(this).toggleClass("change");

        $(".link-container").toggleClass("display").toggleClass("show", 500);
    })
})