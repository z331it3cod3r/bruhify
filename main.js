$(document).ready(function () {
    var timesBruhed = $('#times');
    $('#one').click(function () {
        timesBruhed.html(Number(timesBruhed.html()) + 1);
        $('#oneh').show();
        setTimeout(function () {
            $('#oneh').hide();
        }, 250);
    });
    $('#two').click(function () {
        if ((timesBruhed.html()) >= 100) {
            timesBruhed.html(Number(timesBruhed.html()) + 2);
            $('#oneh').show();
            $('#twoh').show();
            setTimeout(function () {
                $('#oneh').hide();
                $('#twoh').hide();
            }, 250);
        } else {
            alert('You need 100 bruhes to x2 bruh');
        }
    });
    $('#three').click(function () {
        if ((timesBruhed.html()) >= 250) {
            timesBruhed.html(Number(timesBruhed.html()) + 3);
            $('#oneh').show();
            $('#twoh').show();
            $('#threeh').show();
            setTimeout(function () {
                $('#oneh').hide();
                $('#twoh').hide();
                $('#threeh').hide();
            }, 250);
        } else {
            alert('You need 250 bruhes to x3 bruh');
        }
    });
});
