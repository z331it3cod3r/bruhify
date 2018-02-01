$(document).ready(function () {
    var timesBruhed = $('#times');
    var times = 752;
    var boost = 1;
    var two = false;
    var three = false;
    $('#bruh').click(function () {
        times += boost;
        timesBruhed.html(times);
        $('#oneh').css('visibility', 'visible');
        reset();
    });
    $('#two').click(function () {
        if (times >= 250) {
            if (!(two)) {
                times -= 250;
                timesBruhed.html(times);
                boost = 2;
                two = true;
            } else {
                error('You have already bought x2 bruh.');
            }
        } else {
            error('You need 250 bruhes to buy x2 bruh.');
        }
    });
    $('#three').click(function () {
        if (times >= 750) {
            if (!(three)) {
                times -= 750;
                timesBruhed.html(times);
                boost = 3;
                three = true;
            } else {
                error('You have already bought x3 bruh.');
            }
        } else {
            error('You need 750 bruhes to buy x3 bruh.');
        }
    });

    function error(t) {
        $('#money').html(t);
        $('#money').css('visibility', 'visible');
    }

    function reset() {
        error('<br>');
        setTimeout(function () {
            $('#oneh').css('visibility', 'hidden');
            $('#twoh').css('visibility', 'hidden');
            $('#threeh').css('visibility', 'hidden');
        }, 250);
    }
});
