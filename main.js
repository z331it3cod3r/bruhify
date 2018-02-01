$(document).ready(function () {
    var timesBruhed = $('#times');
    var times = 0;
    var boost = 1;
    var two = false;
    var three = false;
    $('#bruh').click(function () {
        times += boost;
        timesBruhed.html(times);
        switch (boost) {
            case 3:
                sbruh('#threeh');
            case 2:
                sbruh('#twoh');
            case 1:
                sbruh('#oneh');
        }
        reset();
    });
    $('#two').click(function () {
        if (!(two)) {
            if (times >= 250) {
                times -= 250;
                timesBruhed.html(times);
                boost = 2;
                two = true;
            } else {
                error('You need 250 bruhes to buy x2 bruh.')
            }
        } else {
            error('You have already bought x2 bruh.');
        }
    });
    $('#three').click(function () {
        if (!(three)) {
            if (times >= 750) {
                times -= 750;
                timesBruhed.html(times);
                boost = 3;
                three = true;
            } else {
                error('You need 750 bruhes to buy x3 bruh.')
            }
        } else {
            error('You have already bought x3 bruh.');
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

    function sbruh(id) {
        $(id).css('visibility', 'visible');
    }
});
