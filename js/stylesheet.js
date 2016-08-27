/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    $('.carousel').carousel();
//    $('#playButton').click(function () {
//        $('#mycarousel').carousel('cycle');
//    });
//    $('#pauseButton').click(function () {
//        $('#mycarousel').carousel('pause');
//    });

});

var $item = $('.carousel .item');
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight);
$item.addClass('full-screen');

$('.carousel img').each(function () {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
        'background-image': 'url(' + $src + ')',
        'background-color': $color
    });
    $(this).remove();
});

$(window).on('resize', function () {
    $wHeight = $(window).height();
    $item.height($wHeight);
});

$('.carousel').carousel({
    interval: 50000,
});

(function () {

    var parallax = document.querySelectorAll(".parallax"),
            speed = 0.5;

    window.onscroll = function () {
        [].slice.call(parallax).forEach(function (el, i) {

            var windowYOffset = window.pageYOffset,
                    elBackgrounPos = "0 " + (windowYOffset * speed) + "px";

            el.style.backgroundPosition = elBackgrounPos;

        });
    };

})();
