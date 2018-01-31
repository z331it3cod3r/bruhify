$(document).ready(function () {
    var timesBruhed = $('#times');
    var times = 0;
    $('#one').click(function () {
        times += 1;
        timesBruhed.html(times);
        $('#oneh').show();
        setTimeout(function () {
            $('#oneh').hide();
        }, 250);
    });
    $('#two').click(function () {
        times += 2;
        if ((timesBruhed.html()) >= 250) {
            timesBruhed.html(times);
            $('#oneh').show();
            $('#twoh').show();
            setTimeout(function () {
                $('#oneh').hide();
                $('#twoh').hide();
            }, 250);
        } else {
            alert('You need 250 bruhes to x2 bruh.');
        }
    });
    $('#three').click(function () {
        if ((timesBruhed.html()) >= 500) {
            times += 3;
            timesBruhed.html(times);
            $('#oneh').show();
            $('#twoh').show();
            $('#threeh').show();
            setTimeout(function () {
                $('#oneh').hide();
                $('#twoh').hide();
                $('#threeh').hide();
            }, 250);
        } else {
            alert('You need 500 bruhes to x3 bruh.');
        }
    });
});
