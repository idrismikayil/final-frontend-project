// $(document).ready(function () {
//     $(".title-icon").click(function () {
//         let next = $(this).next();
//         let icon = $(this).children(".icon");
//         $(".article").not(next).slideUp();
//         $(this).next().slideToggle();
//         $(".icon").not(icon).removeClass("active");
//         $(this).children(".icon").toggleClass("active");
//     });
// });

$(document).ready(function () {
    $("#acc #first .one .button").click(function () {
        $("#acc #first .one .button").css("background-color", "#f34f3f")
        $("#acc #first .one .button").css("color", "white")
        $("#acc #first .one .content").removeClass("d-none")

        $("#acc #first .two .button").css("background-color", "white")
        $("#acc #first .two .button").css("color", "#1b1b1b")
        $("#acc #first .two .content").addClass("d-none")

        $("#acc #first .three .button").css("background-color", "white")
        $("#acc #first .three .button").css("color", "#1b1b1b")
        $("#acc #first .three .content").addClass("d-none")
    })

    $("#acc #first .two .button").click(function () {
        $("#acc #first .one .button").css("background-color", "white")
        $("#acc #first .one .button").css("color", "#1b1b1b")
        $("#acc #first .one .content").addClass("d-none")

        $("#acc #first .two .button").css("background-color", "#f34f3f")
        $("#acc #first .two .button").css("color", "white")
        $("#acc #first .two .content").removeClass("d-none")

        $("#acc #first .three .button").css("background-color", "white")
        $("#acc #first .three .button").css("color", "#1b1b1b")
        $("#acc #first .three .content").addClass("d-none")
    })

    $("#acc #first .three .button").click(function () {
        $("#acc #first .one .button").css("background-color", "white")
        $("#acc #first .one .button").css("color", "#1b1b1b")
        $("#acc #first .one .content").addClass("d-none")

        $("#acc #first .two .button").css("background-color", "white")
        $("#acc #first .two .button").css("color", "#1b1b1b")
        $("#acc #first .two .content").addClass("d-none")

        $("#acc #first .three .button").css("background-color", "#f34f3f")
        $("#acc #first .three .button").css("color", "white")
        $("#acc #first .three .content").removeClass("d-none")
    })

    $("#acc #second .one .button").click(function () {
        $("#acc #second .one .button").css("background-color", "#f34f3f")
        $("#acc #second .one .button").css("color", "white")
        $("#acc #second .one .content").removeClass("d-none")

        $("#acc #second .two .button").css("background-color", "white")
        $("#acc #second .two .button").css("color", "#1b1b1b")
        $("#acc #second .two .content").addClass("d-none")

        $("#acc #second .three .button").css("background-color", "white")
        $("#acc #second .three .button").css("color", "#1b1b1b")
        $("#acc #second .three .content").addClass("d-none")
    })

    $("#acc #second .two .button").click(function () {
        $("#acc #second .one .button").css("background-color", "white")
        $("#acc #second .one .button").css("color", "#1b1b1b")
        $("#acc #second .one .content").addClass("d-none")

        $("#acc #second .two .button").css("background-color", "#f34f3f")
        $("#acc #second .two .button").css("color", "white")
        $("#acc #second .two .content").removeClass("d-none")

        $("#acc #second .three .button").css("background-color", "white")
        $("#acc #second .three .button").css("color", "#1b1b1b")
        $("#acc #second .three .content").addClass("d-none")
    })

    $("#acc #second .three .button").click(function () {
        $("#acc #second .one .button").css("background-color", "white")
        $("#acc #second .one .button").css("color", "#1b1b1b")
        $("#acc #second .one .content").addClass("d-none")

        $("#acc #second .two .button").css("background-color", "white")
        $("#acc #second .two .button").css("color", "#1b1b1b")
        $("#acc #second .two .content").addClass("d-none")

        $("#acc #second .three .button").css("background-color", "#f34f3f")
        $("#acc #second .three .button").css("color", "white")
        $("#acc #second .three .content").removeClass("d-none")
    })

    $("#acc #third .one .button").click(function () {
        $("#acc #third .one .button").css("background-color", "#f34f3f")
        $("#acc #third .one .button").css("color", "white")
        $("#acc #third .one .content").removeClass("d-none")

        $("#acc #third .two .button").css("background-color", "white")
        $("#acc #third .two .button").css("color", "#1b1b1b")
        $("#acc #third .two .content").addClass("d-none")

        $("#acc #third .three .button").css("background-color", "white")
        $("#acc #third .three .button").css("color", "#1b1b1b")
        $("#acc #third .three .content").addClass("d-none")
    })

    $("#acc #third .two .button").click(function () {
        $("#acc #third .one .button").css("background-color", "white")
        $("#acc #third .one .button").css("color", "#1b1b1b")
        $("#acc #third .one .content").addClass("d-none")

        $("#acc #third .two .button").css("background-color", "#f34f3f")
        $("#acc #third .two .button").css("color", "white")
        $("#acc #third .two .content").removeClass("d-none")

        $("#acc #third .three .button").css("background-color", "white")
        $("#acc #third .three .button").css("color", "#1b1b1b")
        $("#acc #third .three .content").addClass("d-none")
    })

    $("#acc #third .three .button").click(function () {
        $("#acc #third .one .button").css("background-color", "white")
        $("#acc #third .one .button").css("color", "#1b1b1b")
        $("#acc #third .one .content").addClass("d-none")

        $("#acc #third .two .button").css("background-color", "white")
        $("#acc #third .two .button").css("color", "#1b1b1b")
        $("#acc #third .two .content").addClass("d-none")

        $("#acc #third .three .button").css("background-color", "#f34f3f")
        $("#acc #third .three .button").css("color", "white")
        $("#acc #third .three .content").removeClass("d-none")
    })

    $("#acc #last .one .button").click(function () {
        $("#acc #last .one .button").css("background-color", "#f34f3f")
        $("#acc #last .one .button").css("color", "white")
        $("#acc #last .one .content").removeClass("d-none")

        $("#acc #last .two .button").css("background-color", "white")
        $("#acc #last .two .button").css("color", "#1b1b1b")
        $("#acc #last .two .content").addClass("d-none")

        $("#acc #last .three .button").css("background-color", "white")
        $("#acc #last .three .button").css("color", "#1b1b1b")
        $("#acc #last .three .content").addClass("d-none")
    })

    $("#acc #last .two .button").click(function () {
        $("#acc #last .one .button").css("background-color", "white")
        $("#acc #last .one .button").css("color", "#1b1b1b")
        $("#acc #last .one .content").addClass("d-none")

        $("#acc #last .two .button").css("background-color", "#f34f3f")
        $("#acc #last .two .button").css("color", "white")
        $("#acc #last .two .content").removeClass("d-none")

        $("#acc #last .three .button").css("background-color", "white")
        $("#acc #last .three .button").css("color", "#1b1b1b")
        $("#acc #last .three .content").addClass("d-none")
    })

    $("#acc #last .three .button").click(function () {
        $("#acc #last .one .button").css("background-color", "white")
        $("#acc #last .one .button").css("color", "#1b1b1b")
        $("#acc #last .one .content").addClass("d-none")

        $("#acc #last .two .button").css("background-color", "white")
        $("#acc #last .two .button").css("color", "#1b1b1b")
        $("#acc #last .two .content").addClass("d-none")

        $("#acc #last .three .button").css("background-color", "#f34f3f")
        $("#acc #last .three .button").css("color", "white")
        $("#acc #last .three .content").removeClass("d-none")
    })
})