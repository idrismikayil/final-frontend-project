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

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: true,
        loop: true
      }
    }
  })

   // let addBasketlink = document.querySelectorAll(".add")

    // if (localStorage.getItem("basket") === null) {
    //     localStorage.setItem("basket", JSON.stringify([]))
    // }

    // addBasketlink.forEach((btn) => {
    //     btn.addEventListener("click", function (e) {
    //         e.preventDefault();

    //         if (localStorage.getItem("basket") === null) {
    //             localStorage.setItem("basket", JSON.stringify([]))
    //         }

    //         let basket = JSON.parse(localStorage.getItem("basket"))
    //         let price = this.nextElementSibling.innerText;
    //         let image = this.parentElement.parentElement.previousElementSibling.children[0].children[0].src;
    //         let productName = this.parentElement.parentElement.children[0].children[0].innerText;
    //         let Id = this.nextElementSibling.getAttribute("data-id");
          
    //         console.log(price);
    //         let existedProduct = basket.find((p) => p.Id = Id);

    //         if (existedProduct == undefined) {
    //             let product = {
    //                 Id,
    //                 price,
    //                 productName,
    //                 image,
    //                 count: 1
    //             };
    //             basket.push(product);
    //         } else {
    //             existedProduct.count++;
    //         }

    //         localStorage.setItem("basket", JSON.stringify(basket));
    //         productCount();
    //         totalPrice();

    //     })
    // })

    // productCount();

    // function productCount() {
    //     let basket = JSON.parse(localStorage.getItem("basket"))
    //     let countElement = document.querySelector("#count_product");
    //     let count = 0;

    //     basket.forEach((p) => {
    //         count += p.count;
    //     });
    //     countElement.innerText = count;
    // }

    // totalPrice();

    // function totalPrice() {
    //     let basket = JSON.parse(localStorage.getItem("basket"))
    //     let priceElement = document.getElementById("cart-price")


    //     console.log(priceElement);

    //     let total = basket.reduce((total, p) => {
    //         return (total += p.price * p.count);
    //     }, 0)


    //     priceElement.innerText = `$ ${total}`;

    // }
    
})