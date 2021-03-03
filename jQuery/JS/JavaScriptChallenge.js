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
});
