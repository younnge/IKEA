$(function(){
    $('#young').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'footer'],
        navigation : true,
        navigationPosition : 'right',
    })

    $('.buttonM').mouseenter(function(){
        $(this).removeClass('back')
        $(this).addClass('on')    
    })
    $('.buttonM').mouseleave(function(){
        $(this).addClass('back')
        $(this).removeClass('on')    
    })
    $('.box2m').mouseenter(function(){
        $('.box2m').addClass('open') 
        $('.box2m').removeClass('close')
    })
    $('.box2m').mouseleave(function(){
        $('.box2m').removeClass('open')
        $('.box2m').addClass('close') 
    })
    $('.box2m').mouseenter(function(){
        $('.box2m h1').addClass('open') 
        $('.box2m h1').removeClass('close')
    })
    $('.box2m').mouseleave(function(){
        $('.box2m h1').removeClass('open')
        $('.box2m h1').addClass('close') 
    })
    $('.box2m1').mouseenter(function(){
        $('.box2m1').addClass('open') 
        $('.box2m1').removeClass('close')
    })
    $('.box2m1').mouseleave(function(){
        $('.box2m1').removeClass('open')
        $('.box2m1').addClass('close') 
    })
    $('.box2m1').mouseenter(function(){
        $('.box2m1 h1').addClass('open') 
        $('.box2m1 h1').removeClass('close')
    })
    $('.box2m1').mouseleave(function(){
        $('.box2m1 h1').removeClass('open')
        $('.box2m1 h1').addClass('close') 
    })
    $('.tabnav li').click(function(){
        $('.tabnav li').removeClass('on')
        $(this).addClass('on')
        $('.item').hide()

        let idx = $(this).index() //클릭한 번호
        // console.log(idx)
        $('.item').eq(idx).show()
    })
    //첫번째꺼가 클릭 되어 있는 상태 만들기
    $('.tabnav li').eq(0).trigger('click')
})