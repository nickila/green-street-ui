$(document).ready(function () {
    $(".bar-container").click(function () {
        $(this).toggleClass("change");
        $(".link-container").toggleClass("show", 500);
    })
    $(".link").click(function () {
        $(".link-container").toggleClass("show", 500);
        $(".bar-container").toggleClass("change");
    })

    $(".login").click(function () {
        $(".login-modal").addClass("modal-show");
    })
    $(".join").click(function () {
        $(".join-modal").addClass("modal-show");
    })
    $(".close").click(function () {
        $(this).parent().parent().removeClass("modal-show");
    })
})