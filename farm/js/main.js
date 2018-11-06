$(document).ready(function(){
    $("#open_navigation").click(function(){
        $("#navbar_large").animate({left: '0'});
        $("#navbar_close").css("opacity","1");
    });
});
$("#navbar_close").click(function(){
    $("#navbar_close").css("opacity","0");
    $("#navbar_large").animate({left: '-40vw'});
});