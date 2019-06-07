$(document).ready(function () {
    $(".bar-container").click(function () {
        $(this).toggleClass("change");
        $(".link-container").toggleClass("show");
    })
})