$(document).ready(function () {

    $("._home").click(function () {
        $(".home_list").removeClass("d-none")
        $(".pages_list").addClass("d-none")
        $("._shop1").addClass("d-none")
        $("._portfolio_list").addClass("d-none")
        $("._blog_list").addClass("d-none")
        $("._elements_list").addClass("d-none")
        $(".prdct_list").addClass("d-none")
        $(".shop_pages_list").addClass("d-none")
        $(".shop_types_list").addClass("d-none")
        $(".shp_layouts_list").addClass("d-none")
    })
    $("._pages").click(function () {
        $(".home_list").addClass("d-none")
        $(".pages_list").removeClass("d-none")
        $("._shop1").addClass("d-none")
        $("._portfolio_list").addClass("d-none")
        $("._blog_list").addClass("d-none")
        $("._elements_list").addClass("d-none")
        $(".prdct_list").addClass("d-none")
        $(".shop_pages_list").addClass("d-none")
        $(".shop_types_list").addClass("d-none")
        $(".shp_layouts_list").addClass("d-none")
    })
    $("._shop").click(function () {
        $(".home_list").addClass("d-none")
        $(".pages_list").addClass("d-none")
        $("._shop1").removeClass("d-none")
        $("._portfolio_list").addClass("d-none")
        $("._blog_list").addClass("d-none")
        $("._elements_list").addClass("d-none")
        $(".prdct_list").addClass("d-none")
        $(".shop_pages_list").addClass("d-none")
        $(".shop_types_list").addClass("d-none")
        $(".shp_layouts_list").addClass("d-none")
    })
    $(".prdct").click(function () {
        $(".home_list").addClass("d-none")
        $(".pages_list").addClass("d-none")
        $("._shop1").removeClass("d-none")
        $("._portfolio_list").addClass("d-none")
        $("._blog_list").addClass("d-none")
        $("._elements_list").addClass("d-none")
        $(".prdct_list").removeClass("d-none")
        $(".shop_pages_list").addClass("d-none")
        $(".shop_types_list").addClass("d-none")
        $(".shp_layouts_list").addClass("d-none")
    })
    $(".shop_pages").click(function () {
        $(".home_list").addClass("d-none")
        $(".pages_list").addClass("d-none")
        $("._shop1").removeClass("d-none")
        $("._portfolio_list").addClass("d-none")
        $("._blog_list").addClass("d-none")
        $("._elements_list").addClass("d-none")
        $(".prdct_list").addClass("d-none")
        $(".shop_pages_list").removeClass("d-none")
        $(".shop_types_list").addClass("d-none")
        $(".shp_layouts_list").addClass("d-none")
    })
    $(".shop_types").click(function () {
        $(".home_list").addClass("d-none")
        $(".pages_list").addClass("d-none")
        $("._shop1").removeClass("d-none")
        $("._portfolio_list").addClass("d-none")
        $("._blog_list").addClass("d-none")
        $("._elements_list").addClass("d-none")
        $(".prdct_list").addClass("d-none")
        $(".shop_pages_list").addClass("d-none")
        $(".shop_types_list").removeClass("d-none")
        $(".shp_layouts_list").addClass("d-none")
    })
    $(".shop_layouts").click(function () {
        $(".home_list").addClass("d-none")
        $(".pages_list").addClass("d-none")
        $("._shop1").removeClass("d-none")
        $("._portfolio_list").addClass("d-none")
        $("._blog_list").addClass("d-none")
        $("._elements_list").addClass("d-none")
        $(".prdct_list").addClass("d-none")
        $(".shop_pages_list").addClass("d-none")
        $(".shop_types_list").addClass("d-none")
        $(".shp_layouts_list").removeClass("d-none")
    })
    $("._portfolio").click(function () {
        $(".home_list").addClass("d-none")
        $(".pages_list").addClass("d-none")
        $("._shop1").addClass("d-none")
        $("._portfolio_list").removeClass("d-none")
        $("._blog_list").addClass("d-none")
        $("._elements_list").addClass("d-none")
        $(".prdct_list").addClass("d-none")
        $(".shop_pages_list").addClass("d-none")
        $(".shop_types_list").addClass("d-none")
        $(".shp_layouts_list").addClass("d-none")
    })
    $("._blog").click(function () {
        $(".home_list").addClass("d-none")
        $(".pages_list").addClass("d-none")
        $("._shop1").addClass("d-none")
        $("._portfolio_list").addClass("d-none")
        $("._blog_list").removeClass("d-none")
        $("._elements_list").addClass("d-none")
        $(".prdct_list").addClass("d-none")
        $(".shop_pages_list").addClass("d-none")
        $(".shop_types_list").addClass("d-none")
        $(".shp_layouts_list").addClass("d-none")
    })
    $("._elements").click(function () {
        $(".home_list").addClass("d-none")
        $(".pages_list").addClass("d-none")
        $("._shop1").addClass("d-none")
        $("._portfolio_list").addClass("d-none")
        $("._blog_list").addClass("d-none")
        $("._elements_list").removeClass("d-none")
        $(".prdct_list").addClass("d-none")
        $(".shop_pages_list").addClass("d-none")
        $(".shop_types_list").addClass("d-none")
        $(".shp_layouts_list").addClass("d-none")
    })

    $(".hamburger").click(function () {
        $(".cl-4").css({
            width: "100%",
            transition: "0.3s"
        })
        $(".x").css({
            display: "block",
            transition: "0.3s"
        })
    })
    $('.fa-times').click(function () {
        $(".cl-4").css({
            width: "0",
            transition: "0.3s"
        })
        $(".x").css({
            display: "none",
            transition: "0.3s"
        })

    })

    $('#bar1').barfiller();
    $('#bar2').barfiller();
    $('#bar3').barfiller();
    $('#bar4').barfiller();
    $('#bar5').barfiller();
    $('#bar6').barfiller();
    $('#bar7').barfiller();
    $('#bar8').barfiller();
    $('#bar9').barfiller();
});