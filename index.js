$(document).ready(function() {
    var counter;
    var session;
    var audio = new Audio('./audio/coffee_break_time.mp3');
    // Start Timer
    $('#startTimer').click(function() {
        counter = parseInt($('#timer').text());
        // Prevent negative values from starting timer
        console.log(counter);
        if (counter <= 0) {
            audio.play();
        } else {
            // Multiply 60 to change counter to seconds
            counter = counter * 60;
            // Set Timer
            session = setInterval(timer, 1000);
            // Timer to be executed every 1 sec
            function timer() {
                $('#startTimer').css('visibility', 'hidden');
                counter -= 1;
                // Stop condition for timer
                if (counter <= 0) {
                    // Play Audio when counter is 0
                    audio.play();
                    $('#startTimer').css('visibility', 'visible');
                    clearInterval(session);
                }
                // Display 4:05, the 0 if seconds is less than 10 seconds
                if (counter % 60 < 10) {
                    $('#timer').text(Math.floor(counter/60) + ":0" + counter % 60);
                } else {
                    $('#timer').text(Math.floor(counter/60) + ":" + counter % 60);
                }
            }
        }
    })
    // Reset Timer
    $('#resetTimer').click(function() {
        // Pause audio and clear interval if clicked
        audio.pause();
        clearInterval(session);
        $('#startTimer').css('visibility', 'visible');
        $('#timer').text('5:00');
    })
    // Increase Session Length
    $('#Plus1Timer').click(function() {
        // Pause audio and clear interval if clicked
        audio.pause();
        $('#startTimer').css('visibility', 'visible');
        counter = parseInt($('#timer').text());
        counter += 1;
        $('#timer').text(counter + ":00");
        // Clear Interval if button clicked
        clearInterval(session);
    });
    // Decrease Session Length
    $('#Minus1Timer').click(function() {
        $('#startTimer').css('visibility', 'visible');
        // Pause audio and clear interval if clicked
        audio.pause();
        // Limit Sesison Length by disallowing negative minutes
        if (parseInt($('#timer').text()) <= 1) {
            $('#timer').text('1:00');
        } else {
            counter = parseInt($('#timer').text());
            counter -= 1;
            $('#timer').text(counter + ":00");
            // Clear Interval if button clicked
            clearInterval(session);
        }
    });
})