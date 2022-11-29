/*!
=========================================================
* Dorang Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// toggle 
$(document).ready(function () {

    $('.search-toggle').click(function () {
        $('.search-wrapper').toggleClass('show');
    });

    $('.modal-toggle').click(function () {
        $('.modalBox').toggleClass('show');
        debugger
        switch (this.id) {
            case "darksouls":
                source = "https://www.youtube.com/embed/icEWwTG7Wz4"
                break;
            case "thelastofus":
                source = "https://www.youtube.com/embed/c2o2r2YuxQo"
                break;
            case "reddeadredemption":
                source = "https://www.youtube.com/embed/qV5x3R6zrzs"
                break;

            default:
                break;
        }

        $('.modalBox > div > iframe').attr("src", source);
    })

    $('.modalBox').click(function () {
        $(this).removeClass('show');
        $('.modalBox > div > iframe').attr("src", "");
    });

    $('.spinner').click(function () {
        $(".theme-selector").toggleClass('show');
    });
    $('.light').click(function () {
        $('body').addClass('light-theme');
        $('body').removeClass('dark-theme');
    });
    $('.dark').click(function () {
        $('body').toggleClass('dark-theme');
        $('body').removeClass('light-theme');
    });
});



// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
}); 
