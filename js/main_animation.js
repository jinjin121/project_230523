$(function () {
    //$('.mainSlide').slick({
    //    arrows: false,
    //    autoplay: true,
    //});
    //$('.mainSlide').on('afterChange', function () {
    //    console.log("변해라얍!")
    //})
    //$('.mainSlide.slick-current').addClass('on');
    //$('.mainSlide').on('afterChange', function () {
    //    let _this = $('.mainSlide .slick-current');
    //    _this.addClass('xxxxxx').siblings().removeClass('xxxxxx');
    //})
    const model = ['ioniq', 'gasper', 'sonata'];
    $('.mainSlide').on('init afterChange', function (e, s, c) {
        let _this = $(this).find('.slick-current');
        _this.addClass('on').siblings().removeClass('on');
        $('#mainVisual .num').text(c ? c + 1 : 1);
        $('#mainVisual .model').text(c ? model[(c + 1) % model.length] : model[1]);
    });
    $('.mainSlide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false
    });
    $('#mainVisual .model').on('click', function () {
        $('.mainSlide').slick('.slickNext');
    });

});