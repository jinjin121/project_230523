$(function () {
    $('.topBanner .btn').on('click', function () {
        $('.topBanner').toggleClass('on')
    });
    $('.rightBanner .btn').on('click', function () {
        $('.rightBanner').toggleClass('on')
    });
    $('.leftBanner .btn').on('click', function () {
        $('.leftBanner').toggleClass('on')
    });
});