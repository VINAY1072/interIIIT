$(document).ready(function () {
            $('.navbar .menu li a').click(function () {
                // applying again smooth scroll on menu items click
                $('html').css("scrollBehavior", "smooth");
            });

            // toggle menu/navbar script
            $('.menu-btn').click(function () {
                $('.navbar .menu').toggleClass("active");
                $('.menu-btn i').toggleClass("active");
            });
});