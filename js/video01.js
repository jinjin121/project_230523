$(function () {

    let btn = true;
    $('.ctr').on('click', function () {
        $(this).toggleClass('on');
        if (btn) {
            $('.mainVisual video').trigger('pause')
        } else {
            $('.mainVisual video').trigger('play')
        }
        btn = !btn;
        console.log(btn);
    });
    //toggleClass true<->false 왔다갔다 하게 만들기

    $('.case01 .pause').on('click', function () {
        $('.case01 video').trigger('pause');
    });
    $('.case01 .play').on('click', function () {
        $('.case01 video').trigger('play');
    });
})