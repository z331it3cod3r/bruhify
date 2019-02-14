const konami_code = [];
const app = new Vue({
    el: '#app',
    data: {
        multiplier: 1,
        bruhs: 0,
        warning: '',
        bruh_img: 'stickfigure.png',
        classes: {
            multiply: 'btn-danger'
        },
        cost: {
            multiply: 100
        },
        timeouts: {
            troll_img: false
        }
    },
    methods: {
        bruh: function() {
            this.bruhs += this.multiplier;
            this.bruh_img = 'stickfigurewithtrollface.png';
            if(this.timeouts.troll_img) {
                clearTimeout(this.timeouts.troll_img);
            }
            this.timeouts.troll_img = setTimeout(function() {
                app.bruh_img = 'stickfigure.png';
                app.timeouts.troll_img = false;
            }, 250);
            if(this.bruhs >= this.cost.multiply) {
                this.classes.multiply = 'btn-success';
            }
        },
        warn: function(message) {
            this.warning = message;
            $('#warning_modal').modal();
        }
    }
});
