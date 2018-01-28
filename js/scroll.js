/**
 * Created by anna on 27.09.17.
 */

$("body").on("click",".menu a",function(){var e=$($(this).attr("href")).offset().top;return $("html,body").animate({scrollTop:e + 20 + 'vw'},800),!1});
$("body").on("click",".timer a",function(){var e=$($(this).attr("href")).offset().top;return $("html,body").animate({scrollTop:e},800),!1});
$("body").on("click",".hero a",function(){var e=$($(this).attr("href")).offset().top;return $("html,body").animate({scrollTop:e + 80 + 'vw'},800),!1});
$("body").on("click","#his",function(){var e=$($(this).attr("href")).offset().top;return $("html,body").animate({scrollTop:e + 200 + 'vw'},800),!1});

if ( screen.width < 550 ) {
    $("body").on("click","#mod",function(){var e=$($(this).attr("href")).offset().top;return $("html,body").animate({scrollTop:e + 110 + 'vw'},800),!1});
    $("body").on("click","#otz",function(){var e=$($(this).attr("href")).offset().top;return $("html,body").animate({scrollTop:e},800),!1});
}