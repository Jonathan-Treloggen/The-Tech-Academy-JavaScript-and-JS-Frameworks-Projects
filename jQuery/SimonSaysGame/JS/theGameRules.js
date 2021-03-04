/** The Game Rules **/

$(function() {

    var colors = $('#colors li');
    var mainColor = $('#main');
    var start = $('#start');
    var gameState = 'waiting';
    var gameSequence = new Array();
    var level = 1;
    var t;
    var flashNo;
    var clickedNo;

    //Animation
    $('#start').click(function() {
        $('ul').slideDown();
    });//End of function

    var setupLightSequence = function() {
        var randomNum = Math.floor(Math.random() * 4);
        gameSequence[level -1] = randomNum;
        showLightSequence();
    };//End of var function

    var lightOn = function(no) {
        colors.eq(gameSequence[no]).addClass('on');
    };//End of var function

    var lightOff = function() {
        colors.removeClass('on');
    };//End of var function
    
    var showLightSequence = function() {
        lightOff();

        if(flashNo < level) {
            var on = setTimeout(function() {
                var off = setTimeout(function() {
                    showLightSequence();
                    flashNo++;
                }, 500);
                lightOn(flashNo);
            }, 500);
        }
        else {
            gameState = 'playing';
            $('body').addClass('playing');
            start.text('Your turn...');
            clearTimeout(on);
        }
    };//End of var function

    colors.click(function() {
        if(gameState == 'playing') {
            var selectedSquare = $(this).index();
            var selectedColor = $(this).css('background-color');
            $(this).fadeOut('fast').fadeIn('fast');
            

            if(gameSequence[clickedNo] == selectedSquare) {
                if(clickedNo == level-1) {
                    gameState = 'waiting';
                    $('body').removeClass('playing');
                    start.text('WELL DONE. Go to the next level >>');
                    level++;
                }

                lightOn(clickedNo);
                var off = setTimeout(function() {
                    lightOff();
                    clickedNo++;
                }, 200);
            }
            else {
                gameState = 'waiting';
                $('body').removeClass('playing');
                start.text('GAME OVER. Try again?');
                $('body').removeClass('playing').addClass('game-over');
                gameSequence = new Array();
                level = 1;
            }
        }
    });//End of function

    var init = function() {
        $('#level').text('level ' + level);
        flashNo = 0;
        clickedNo = 0;
        $(this).text('Simon says...');
        $('body').removeClass('game-over');
        setupLightSequence();
    }
    start.click(init);
});