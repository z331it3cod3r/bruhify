$(document).ready(function () {
    var timesBruhed = $('#times');
    var times = 0;
    var boost = 1;
    var hack = 0;
    kd.ENTER.down(function () {
        hack += 1;
        if (hack >= 50) kick();
    })
    kd.ENTER.up(function () {
        hack = 0;
    })
    $('#bruh').click(function () {
        kickcheck();
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
        finish();
    });
    $('#two').click(function () {
        buy(250, 2, this);
    });
    $('#three').click(function () {
        buy(500, 3, this)
    });
    kd.run(function () {
        //kd.tick();
    })

    function error(t) {
        $('#money').html(t);
    }

    function finish() {
        error('<br>');
        setTimeout(function () {
            $('#oneh').css('visibility', 'hidden');
            $('#twoh').css('visibility', 'hidden');
            $('#threeh').css('visibility', 'hidden');
        }, 250);
        if (times >= 1000000) {
            document.write('<div style="text-align:center;"<h1>YOU WON!</h1><p onclick="window.location.reload();">Play Again</p></div>')
        }
    }

    function sbruh(id) {
        $(id).css('visibility', 'visible');
    }

    function kick() {
        $('#welcome').html('You have been kicked for hacking and/or cheating :(.');
        $('#welcome').css('color', 'red');
        setTimeout(function () {
            window.location.reload();
        }, 1000);
    }

    function kickcheck() {
        if (times != timesBruhed.html()) {
            kick();
        }
    }

    function buy(num, up, ob) {
        if (times >= num) {
            kickcheck();
            times -= num;
            timesBruhed.html(times);
            boost = up;
            ob.remove();
        } else {
            error('You need ' + num + ' bruhes to buy x' + up + ' bruh.')
        }
    }
});
