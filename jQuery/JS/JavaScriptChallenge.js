/* 
$(document).ready(function(){}); is the same as
$(function() {});
*/
$(document).ready(function() {

    // Hidden functions
    $("b").hover(function() {
        $("#boldHidden").hide();
    });// End of function

    $("#hideList").click(function() {
        $(".list").hide();
    });// End of function

    $("#hideFirsts").click(function() {
        $("ul li:first-child").hide(1000);
    })// End of function


    // Shows all hidden items
    $("#re-appear").click(function() {
        $("#boldHidden, .list, ul li:first-child").show();
    });// End of function


    // Toggle hides then shows on second click
    $("#hideAllP").click(function() {
        $("p").toggle();
    });// End of function


    // Focus & blur
    $("input").focus(function() {
        $(this).css("background-color", "lightblue");
    });// End of function

    $("input").blur(function() {
        $(this).css("background-color", "silver");
    });// End of function


    // fadeIn()
    $("#divButton").click(function() {
        $("#div1").fadeIn();
    });// End of function

    // fadeOut()
    $("#div2Button").click(function() {
        $("#div2").fadeOut();
    });// End of function

    // slideToggle()
    $("#top").click(function() {
        $("#bottom").slideToggle(3000);
    });// End of function

    // stop()
    $("#stopButton").click(function() {
        $("#bottom").stop();
    });// End of function


    // animate() + callbacks
    $("#aniBlock").click(function() {
        var div = $("#theBlock");
        div.animate({left: "300px", height: "300px", width: "300px"}, "slow", function() {
            div.animate({height: "100px", width: "100px"}, "slow", function() {
                div.animate({height: "toggle"}, "slow");
            });
        });
    });// End of function


    // chaining
    $("#clickButton").click(function() {
        $("#magic").css("color", "blue")
            .slideUp("slow")
            .slideDown("slow");
    });//End of function


    // Get text()
    $("#alertButton").click(function() {
        alert("Text: " + $("#p1").text());
    });//End of function

    // Set text()
    $("#changeButton").click(function() {
        $("#p2").text(function(i, origText) {
            return "Old text: " + origText + " new text: Well, that sucks." +
            "(index: " + i + " )";
        });
    });//End of function

    $("#linkChange").click(function() {
        $("#w3").attr("href", "https://www.learncodinganywhere.com/");
    });//End of function
});
