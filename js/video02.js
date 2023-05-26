$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'aeJOyqdsMlU',
        containment: '#mainVisual',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('#bgm1').YTPlayer({
        videoURL: 'aeJOyqdsMlU',
        containment: '#bgm1',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });
    $('#bgm2').YTPlayer({
        videoURL: 'aeJOyqdsMlU',
        containment: '#bgm2',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });
    $('#bgm3').YTPlayer({
        videoURL: 'aeJOyqdsMlU',
        containment: '#bgm3',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('#mainVisual .pause').on('click', function () {
        $('#bgndVideo').YTPPause();
    })
    $('#mainVisual .play').on('click', function () {
        $('#bgndVideo').YTPPlay();
    })
})