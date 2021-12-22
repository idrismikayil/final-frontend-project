$(document).ready(function () {
    $(".filter-flower .all").click(function () {
        $(".all").css("color", "#f34f3f")
        $(".popular").css("color", "#1b1b1b")
        $(".winter").css("color", "#1b1b1b")
        $(".various").css("color", "#1b1b1b")
        $(".exotic").css("color", "#1b1b1b")
        $(".greens").css("color", "#1b1b1b")
        $(".cactuses").css("color", "#1b1b1b")

        $(".products.all").removeClass("d-none")
        $(".products.popular").addClass("d-none")
        $(".products.winter").addClass("d-none")
        $(".products.various").addClass("d-none")
        $(".products.exotic").addClass("d-none")
        $(".products.greens").addClass("d-none")
        $(".products.cactuses").addClass("d-none")
    });
    $(".filter-flower .popular").click(function () {
        $(".all").css("color", "#1b1b1b")
        $(".popular").css("color", "#f34f3f")
        $(".winter").css("color", "#1b1b1b")
        $(".various").css("color", "#1b1b1b")
        $(".exotic").css("color", "#1b1b1b")
        $(".greens").css("color", "#1b1b1b")
        $(".cactuses").css("color", "#1b1b1b")

        $(".products.all").addClass("d-none")
        $(".products.popular").removeClass("d-none");
        $(".products.winter").addClass("d-none")
        $(".products.various").addClass("d-none")
        $(".products.exotic").addClass("d-none")
        $(".products.greens").addClass("d-none")
        $(".products.cactuses").addClass("d-none")
    });
    $(".filter-flower .winter").click(function () {
        $(".all").css("color", "#1b1b1b")
        $(".popular").css("color", "#1b1b1b")
        $(".winter").css("color", "#f34f3f")
        $(".various").css("color", "#1b1b1b")
        $(".exotic").css("color", "#1b1b1b")
        $(".greens").css("color", "#1b1b1b")
        $(".cactuses").css("color", "#1b1b1b")

        $(".products.all").addClass("d-none")
        $(".products.popular").addClass("d-none");
        $(".products.winter").removeClass("d-none")
        $(".products.various").addClass("d-none")
        $(".products.exotic").addClass("d-none")
        $(".products.greens").addClass("d-none")
        $(".products.cactuses").addClass("d-none")
    });
    $(".filter-flower .various").click(function () {
        $(".all").css("color", "#1b1b1b")
        $(".popular").css("color", "#1b1b1b")
        $(".winter").css("color", "#1b1b1b")
        $(".various").css("color", "#f34f3f")
        $(".exotic").css("color", "#1b1b1b")
        $(".greens").css("color", "#1b1b1b")
        $(".cactuses").css("color", "#1b1b1b")

        $(".products.all").addClass("d-none")
        $(".products.popular").addClass("d-none");
        $(".products.winter").addClass("d-none")
        $(".products.various").removeClass("d-none")
        $(".products.exotic").addClass("d-none")
        $(".products.greens").addClass("d-none")
        $(".products.cactuses").addClass("d-none")
    });
    $(".filter-flower .exotic").click(function () {
        $(".all").css("color", "#1b1b1b")
        $(".popular").css("color", "#1b1b1b")
        $(".winter").css("color", "#1b1b1b")
        $(".various").css("color", "#1b1b1b")
        $(".exotic").css("color", "#f34f3f")
        $(".greens").css("color", "#1b1b1b")
        $(".cactuses").css("color", "#1b1b1b")


        $(".products.all").addClass("d-none")
        $(".products.popular").addClass("d-none");
        $(".products.winter").addClass("d-none")
        $(".products.various").addClass("d-none")
        $(".products.exotic").removeClass("d-none")
        $(".products.greens").addClass("d-none")
        $(".products.cactuses").addClass("d-none")
    });
    $(".filter-flower .greens").click(function () {
        $(".all").css("color", "#1b1b1b")
        $(".popular").css("color", "#1b1b1b")
        $(".winter").css("color", "#1b1b1b")
        $(".various").css("color", "#1b1b1b")
        $(".exotic").css("color", "#1b1b1b")
        $(".greens").css("color", "#f34f3f")
        $(".cactuses").css("color", "#1b1b1b")

        $(".products.all").addClass("d-none")
        $(".products.popular").addClass("d-none");
        $(".products.winter").addClass("d-none")
        $(".products.various").addClass("d-none")
        $(".products.exotic").addClass("d-none")
        $(".products.greens").removeClass("d-none")
        $(".products.cactuses").addClass("d-none")
    });
    $(".filter-flower .cactuses").click(function () {
        $(".all").css("color", "#1b1b1b")
        $(".popular").css("color", "#1b1b1b")
        $(".winter").css("color", "#1b1b1b")
        $(".various").css("color", "#1b1b1b")
        $(".exotic").css("color", "#1b1b1b")
        $(".greens").css("color", "#1b1b1b")
        $(".cactuses").css("color", "#f34f3f")

        $(".products.all").addClass("d-none")
        $(".products.popular").addClass("d-none");
        $(".products.winter").addClass("d-none")
        $(".products.various").addClass("d-none")
        $(".products.exotic").addClass("d-none")
        $(".products.greens").addClass("d-none")
        $(".products.cactuses").removeClass("d-none")
    });


    $('.slider.multiple-items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

})