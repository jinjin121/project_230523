$(function () {

    $('.tabLink li').on('click', function (event) {
        event.preventDefault();
        let idx = $(this).index();//0,1,2

        $(this).addClass('on')
            .siblings().removeClass('on');


        //$('.tabContent .con').removeClass('on');
        //$('.tabContent .con').eq(idx).addClass('on');

        // const con = document.querySelectorAll('.tabContent .con');
        // con.fotEach(it => it.addEventListener('click', function(){
        //     it.classList.remove('on');
        //     event.currentTarget.classList.add('on')
        // }))

        $('.tabContent .con').eq(idx).addClass('on')
            .siblings().removeClass('on'); //0,1,2

        console.log(event, event.target, event.currentTarget, $(this), $(this).index())
        //return false는 쓰지 말기

    });
    $('.tabMapLink li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();

        $('.tabMapLocation li').eq(idx).addClass('on').siblings().removeClass('on')
    })
})