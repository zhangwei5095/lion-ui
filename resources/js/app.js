/**
 * Created by ibh1 on 14/12/31.
 */

$(function(){
    //菜单分类tab点击
    $("li.md_left_tab_li").click(function(){
        $("li.md_left_tab_li").removeClass("md_left_tab_active");
        $(this).addClass("md_left_tab_active");
        var target = $(this).attr("data-target");
        $(".menu-link").fadeOut();
        $("."+target).fadeIn();
    });
    //组件页面左侧菜单点击
    $("div.md_left_list li").click(function(){
        $("div.md_left_list li").removeClass("md_left_list_active");
        $(this).addClass("md_left_list_active");
        var url = $(this).attr("data-url");
        $("#demoiframe").attr("src",url);
    });
    //文档页面左侧菜单点击
    $("#docs_left_div li").click(function(){
        $("div.md_left_list li").removeClass("md_left_list_active");
        $(this).addClass("md_left_list_active");
        var url = $(this).attr("data-url")||"";
        if(url==""){
            return;
        }
        $.get(url, function(response){
            $("#docs_right_div").html("");
            $("#docs_right_div").html(response);
        })
    });
    //模式页面左侧菜单点击
    $("#patterns_left_list li").click(function(){
        var url = $(this).attr("data-url")||"";
        if(url==""){
            return;
        }
        $("#demoiframe").attr("src",url);
    });
});
