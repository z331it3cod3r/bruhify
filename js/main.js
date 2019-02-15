const konami_code = [];
const app = new Vue({
    el: '#app',
    data: {
        multiplier: 1,
        bruhs: 0,
        warning: '',
        bruh_img: 'stickfigure.png',
        classes: {
            upgrade: 'btn-danger'
        },
        cost: {
            upgrade: {
                i: 0,
                costs: [100, 250, 500, 1000, 1750, 2500, false]
            }
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
            this.tick();
        },
        warn: function(message) {
            this.warning = message;
            $('#warning_modal').modal();
        },
        upgrade: function() {
            let cost = this.cost.upgrade.costs[this.cost.upgrade.i];
            if(cost) {
                if(this.bruhs >= cost) {
                    this.bruhs -= cost;
                    this.multiplier += 1;
                    this.cost.upgrade.i++;
                }
            }
            this.tick();
        },
        tick: function() {
            if(this.bruhs >= this.cost.upgrade.costs[this.cost.upgrade.i]) {
                this.classes.upgrade = 'btn-success';
                $('#upgrade_btn').popover('disable');
            } else {
                this.classes.upgrade = 'btn-danger';
                $('#upgrade_btn').popover('enable');
            }
        }
    }
});
$(document).ready(function() {
    $('[data-toggle="popover"]').popover(); 
});
