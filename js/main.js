$("document").ready(function(){

        //当滚动条的位置处于距顶部500像素以下时，跳转链接出现，否则消失
        $(window).scroll(function(){
           judgeScrollTop();//回顶部按钮隐藏/出现            
           toggleNav();// 导航隐藏/展开
        });

        //回到顶部
            backTopBtn();

        // menu页的banner滑动效果
            $("#banner_box ul li").mouseover(function(){
                 menuBox(this);
            });

        // 点赞
            $(".praise").each(function(){
                $(this).children('span').text("赞");
                $(this).children('span').click(function(){
                   praise(this);
                });
            });

           
});


var h = $(window).height();
var Top = $(window).scrollTop();
var bescroll=Top;


function toggleNav(){

    var w=$(window).width();
    var afscroll=$(window).scrollTop();
    var res=afscroll-bescroll;

    if (w>768) {

        if (res<0) {
            $('#header_nav').stop().slideDown(200);
        }
        else{
            $('#header_nav').stop().slideUp(200);
        }
    }

        bescroll = $(window).scrollTop(); 
        return;
}



function judgeScrollTop(){

    if ($(window).scrollTop()>800){
       
        $(".back_up").stop().show(300);
    }
    else{
       
        $(".back_up").stop().hide(300);
    }
}

function backTopBtn(){

    $(".back_up").click(function(){
        
        $('body,html').stop().animate({scrollTop:0},1000);

        return false;
    });
}


function menuBox(obj){

    $(obj).stop().animate({"width":"70%"},300)
    .children().css({"background-color":"rgba(240,240,240,0.3)"});

    $(obj).siblings("li").stop(true,false).animate({"width":"10%"},300)
    .children().css({"background":"rgba(119,198,192,.3)"});
}

function praise(obj){
    var tag = $(obj).text();
    if(tag=="赞"){
        $(obj).text("取消赞").css({"color":"#BF0606"});

    }
    else{
       
        $(obj).text("赞").css({"color":"#757171"});
        
    }
   
} 

