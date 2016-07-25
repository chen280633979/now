$(".getInfo").on("click", function () {
    $(".sign2").css("display","block");
});
$(".close").on("click", function () {
    $(".sign2").css("display","none");
});
$(".submit").on("click", function () {
    var reg=/^1[34578]\d{9}$/,reg2=/^([\u4e00-\u9fa5]+|([a-zA-Z]+\s?)+)$/;
    if(reg.test($(".sign-phone").val())&&reg2.test($(".sign-person").val())){
        $(".signIn").css("display","none");
        $(".signIn-two").css("display","block");
        window.setTimeout(function () {
            $(".sign").css("display","none");
            //$(".signIn").css("display","block");
        },3000)
    }

});
function time(){
    var targetTime=new Date("2016/8/1 00:00:00");
    var nowTime=new Date();
    var diffTime=targetTime-nowTime;
    if(diffTime<=0){
        $("#day").html(0);
        $("#minute").html(0);
        $("#minute2").html(0);
        $("#second").html(0);
        $("#second2").html(0);
    }
    var day=Math.floor(diffTime/(1000*60*60*24));
    diffTime=diffTime-day*1000*60*60*24;
    var hour=Math.floor(diffTime/(1000*60*60));
    diffTime=diffTime-hour*1000*60*60;
    var minute=Math.floor(diffTime/(1000*60));
    diffTime=diffTime-minute*1000*60;
    //var second=Math.floor(diffTime/1000);
    $("#day").html(day);
    $("#minute").html(function(){
        if(hour>=10){
            $(this).html(1);
        }
        if(hour>=20){
            $(this).html(2);
        }
        if(hour<10){
            $(this).html(0);
        }

    });
    $("#minute2").html(function(){
        if(hour>=10&&hour<20){
            $(this).html(hour-10);
        }
        if(hour>=20){
            $(this).html(hour-20);
        }
        if(hour<10){
            $(this).html(hour);
        }
    });
    $("#second").html(function(){
        if(minute<10){
            $(this).html(0);
        }else if(minute>=10&&minute<20){
            $(this).html(1);
        }else if(minute>=20&&minute<30){
            $(this).html(2);
        }else if(minute>=30&&minute<40){
            $(this).html(3);
        }else if(minute>=40&&minute<50){
            $(this).html(4);
        }else if(minute>=50&&minute<60){
            $(this).html(5);
        }else {
            $(this).html(0);
        }
    });
    $("#second2").html(function(){
        if(minute<10){
            $(this).html(minute);
        }else if(minute>=10&&minute<20){
            $(this).html(minute-10);
        }else if(minute>=20&&minute<30){
            $(this).html(minute-20);
        }else if(minute>=30&&minute<40){
            $(this).html(minute-30);
        }else if(minute>=40&&minute<50){
            $(this).html(minute-40);
        }else if(minute>=50&&minute<60){
            $(this).html(minute-50);
        }else {
            $(this).html(0);
        }
    });
}
time();

//if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod')
//{
//    $(".limit ul li").css("width", "960");
//}
//



