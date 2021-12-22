$(document).ready(function () {
    $(".desc").click(function () {
        $(".first").removeClass("d-none")
        $(".desc").css("background-color", "#f34f3f")
        $(".desc").css("color", "white")

        $(".second").addClass("d-none")
        $(".add").css("background-color", "white")
        $(".add").css("color", "#1b1b1b")

        $(".third").addClass("d-none")
        $(".rev").css("background-color", "white")
        $(".rev").css("color", "#1b1b1b")
    })
    $(".add").click(function () {
        $(".first").addClass("d-none")
        $(".desc").css("background-color", "white")
        $(".desc").css("color", "#1b1b1b")

        $(".second").removeClass("d-none")
        $(".add").css("background-color", "#f34f3f")
        $(".add").css("color", "white")

        $(".third").addClass("d-none")
        $(".rev").css("background-color", "white")
        $(".rev").css("color", "#1b1b1b")
    })
    $(".rev").click(function () {
        $(".first").addClass("d-none")
        $(".desc").css("background-color", "white")
        $(".desc").css("color", "#1b1b1b")

        $(".second").addClass("d-none")
        $(".add").css("background-color", "white")
        $(".add").css("color", "#1b1b1b")

        $(".third").removeClass("d-none")
        $(".rev").css("background-color", "#f34f3f")
        $(".rev").css("color", "#fff")
    })
})