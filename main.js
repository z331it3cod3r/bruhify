$(document).ready(function () {
    var timesBruhed = $('#times');
    var times = 0;
    var boost = 1;
    var hack = 0;
    kd.ENTER.down(function () {
        hack += 1;
        if (hack >= 50) ban();
    })
    kd.ENTER.up(function () {
        hack = 0;
    })
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
        finish();
    });
    $('#two').click(function () {
        if (times >= 250) {
            times -= 250;
            timesBruhed.html(times);
            boost = 2;
            this.parentNode.removeChild(this);
        } else {
            error('You need 250 bruhes to buy x2 bruh.')
        }
    });
    $('#three').click(function () {
        if (times >= 500) {
            times -= 500;
            timesBruhed.html(times);
            boost = 3;
            this.parentNode.removeChild(this);
        } else {
            error('You need 500 bruhes to buy x3 bruh.')
        }
    });
    kd.run(function () {
        kd.tick();
    })

    function error(t) {
        $('#money').html(t);
    }

    function finish() {
        error('');
        setTimeout(function () {
            $('#oneh').css('visibility', 'hidden');
            $('#twoh').css('visibility', 'hidden');
            $('#threeh').css('visibility', 'hidden');
        }, 250);
        if (times >= 1000) {
            document.write('<div style="text-align:center;"<h1>YOU WON!</h1><p onclick="window.location.reload();">Play Again</p></div>')
        }
    }

    function sbruh(id) {
        $(id).css('visibility', 'visible');
    }

    function ban() {
        $('#welcome').html('You have been banned for hacking :(.');
        $('#welcome').css('color', 'red');
        setTimeout(function () {
            window.location.reload();
        }, 1000);
    }
});
