$("a[href='#top']").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

var lastScrollTop = 300;

window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        $("a.scroll").removeClass("off");
        $("a.scroll").addClass("on");
    }
    else {
        $("a.scroll").removeClass("on");
        $("a.scroll").addClass("off");
    }
});

window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        $("#skiny.skiny_header").slideDown(400);
    }
    else {
        $("#skiny.skiny_header").slideUp(400);
    }
});