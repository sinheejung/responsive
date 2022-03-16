$(function(){
    $('#toggle-btn').click(function(){
        $('#gnb').toggleClass('on');
    })

    // 사이트맵 버튼
    $('#site-map-btn').click(function(){
        $('.sitemap-modal').addClass('on');
    })

    $('#sitemap-modal-close').click(function(){
        $('.sitemap-modal').removeClass('on');
    })
    
});

// contents .box

function changeImg(num) {
        $('#contents .box').removeClass('on');
    
        if(num == 0) {
            $('#contents .musicion').addClass('on'),
            $('#contents .title-box').removeClass('on');
            $('#contents .actor').removeClass('on');
        } else if(num == 1) {
            $('#contents .actor').addClass('on'),
            $('#contents .musicion').removeClass('on');
            $('#contents .entertainment').removeClass('on');
        } else if(num == 2) {
            $('#contents .entertainment').addClass('on'),
            $('#contents .actor').removeClass('on');
            $('#contents .model').removeClass('on');
        } else if(num == 3) {
            $('#contents .model').addClass('on'),
            $('#contents .entertainment').removeClass('on');
            $('#contents .athlete').removeClass('on');
        } else if(num == 4) {
            $('#contents .athlete').addClass('on'),
            $('#contents .model').removeClass('on');
        }
    }

    function changeCircle(num) {
        $('#contents .circle-box').removeClass('on');
    
        if(num == 0) {
            $('#contents .c1').addClass('on'),
            $('#contents .c2').removeClass('on');
            $('#contents .c3').removeClass('on');
        } else if(num == 1) {
            $('#contents .c2').addClass('on'),
            $('#contents .c1').removeClass('on');
            $('#contents .c3').removeClass('on');
        } else if(num == 2) {
            $('#contents .c3').addClass('on'),
            $('#contents .c1').removeClass('on');
            $('#contents .c2').removeClass('on');
        } 
    }