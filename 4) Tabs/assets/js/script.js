$(document).ready(function () {
    
    $("#one .buttons #1").click(function () {
        $("#one .contents .first").removeClass("d-none")
        $("#one .buttons #1").css("background-color", "#f34f3f")
        $("#one .buttons #1").css("color", "white")

        $("#one .contents .second").addClass("d-none")
        $("#one .buttons #2").css("background-color", "white")
        $("#one .buttons #2").css("color", "#1b1b1b")

        $("#one .contents .third").addClass("d-none")
        $("#one .buttons #3").css("background-color", "white")
        $("#one .buttons #3").css("color", "#1b1b1b")
    })
    $("#one .buttons #2").click(function () {
        $("#one .contents .first").addClass("d-none")
        $("#one .buttons #1").css("background-color", "white")
        $("#one .buttons #1").css("color", "#1b1b1b")

        $("#one .contents .second").removeClass("d-none")
        $("#one .buttons #2").css("background-color", "#f34f3f")
        $("#one .buttons #2").css("color", "white")

        $("#one .contents .third").addClass("d-none")
        $("#one .buttons #3").css("background-color", "white")
        $("#one .buttons #3").css("color", "#1b1b1b")
    })
    $("#one .buttons #3").click(function () {
        $("#one .contents .first").addClass("d-none")
        $("#one .buttons #1").css("background-color", "white")
        $("#one .buttons #1").css("color", "#1b1b1b")

        $("#one .contents .second").addClass("d-none")
        $("#one .buttons #2").css("background-color", "white")
        $("#one .buttons #2").css("color", "#1b1b1b")

        $("#one .contents .third").removeClass("d-none")
        $("#one .buttons #3").css("background-color", "#f34f3f")
        $("#one .buttons #3").css("color", "white")

    })


    $("#two .buttons #4").click(function () {
        $("#two .contents .fourth").removeClass("d-none")
        $("#two .buttons #4").css("background-color", "#f34f3f")
        $("#two .buttons #4").css("color", "white")

        $("#two .contents .fifth").addClass("d-none")
        $("#two .buttons #5").css("background-color", "white")
        $("#two .buttons #5").css("color", "#1b1b1b")

        $("#two .contents .sixth").addClass("d-none")
        $("#two .buttons #6").css("background-color", "white")
        $("#two .buttons #6").css("color", "#1b1b1b")
    })
    $("#two .buttons #5").click(function () {
        $("#two .contents .fourth").addClass("d-none")
        $("#two .buttons #4").css("background-color", "white")
        $("#two .buttons #4").css("color", "#1b1b1b")

        $("#two .contents .fifth").removeClass("d-none")
        $("#two .buttons #5").css("background-color", "#f34f3f")
        $("#two .buttons #5").css("color", "white")

        $("#two .contents .sixth").addClass("d-none")
        $("#two .buttons #6").css("background-color", "white")
        $("#two .buttons #6").css("color", "#1b1b1b")
    })
    $("#two .buttons #6").click(function () {
        $("#two .contents .fourth").addClass("d-none")
        $("#two .buttons #4").css("background-color", "white")
        $("#two .buttons #4").css("color", "#1b1b1b")

        $("#two .contents .fifth").addClass("d-none")
        $("#two .buttons #5").css("background-color", "white")
        $("#two .buttons #5").css("color", "#1b1b1b")

        $("#two .contents .sixth").removeClass("d-none")
        $("#two .buttons #6").css("background-color", "#f34f3f")
        $("#two .buttons #6").css("color", "white")

    })


    $(".pro").click(function () {
        $(".frst").removeClass("d-none")
        $(".pro").css("color", "#f34f3f")

        $(".scnd").addClass("d-none")
        $(".shop").css("color", "#1b1b1b")

        $(".thrd").addClass("d-none")
        $(".ser").css("color", "#1b1b1b")
    })
    $(".shop").click(function () {
        $(".frst").addClass("d-none")
        $(".pro").css("color", "#1b1b1b")

        $(".scnd").removeClass("d-none")
        $(".shop").css("color", "#f34f3f")

        $(".thrd").addClass("d-none")
        $(".rev").css("color", "#1b1b1b")
    })
    $(".ser").click(function () {
        $(".frst").addClass("d-none")
        $(".pro").css("color", "#1b1b1b")

        $(".scnd").addClass("d-none")
        $(".shop").css("color", "#1b1b1b")

        $(".thrd").removeClass("d-none")
        $(".ser").css("color", "#f34f3f")
    })


    $("#prd").click(function () {
        $(".metus").removeClass("d-none")
        $("#prd").css("background-color", "#f34f3f")
        $("#prd").css("color", "white")

        $(".dapibus").addClass("d-none")
        $("#shp").css("background-color", "white")
        $("#shp").css("color", "#1b1b1b")

        $(".enim").addClass("d-none")
        $("#srv").css("background-color", "white")
        $("#srv").css("color", "#1b1b1b")
    })
    $("#shp").click(function () {
        $(".metus").addClass("d-none")
        $("#prd").css("background-color", "white")
        $("#prd").css("color", "#1b1b1b")

        $(".dapibus").removeClass("d-none")
        $("#shp").css("background-color", "#f34f3f")
        $("#shp").css("color", "white")

        $(".enim").addClass("d-none")
        $("#srv").css("background-color", "white")
        $("#srv").css("color", "#1b1b1b")
    })
    $("#srv").click(function () {
        $(".metus").addClass("d-none")
        $("#prd").css("background-color", "white")
        $("#prd").css("color", "#1b1b1b")

        $(".dapibus").addClass("d-none")
        $("#shp").css("background-color", "white")
        $("#shp").css("color", "#1b1b1b")

        $(".enim").removeClass("d-none")
        $("#srv").css("background-color", "#f34f3f")
        $("#srv").css("color", "white")

    })

})