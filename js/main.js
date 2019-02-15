// noinspection JSUnresolvedFunction
const app = new Vue({
    el: '#app',
    data: {
        multiplier: 1,
        bruhs: 0,
        warning: '',
        bruh_img: 'stickfigure.png',
        promo: '',
        promos: {
            barrel_maker: true
        },
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
            troll_img: false,
            upgrade_popover: false
        }
    },
    methods: {
        bruh: function() {
            this.bruhs += this.multiplier;
            // noinspection JSUnusedGlobalSymbols
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
        upgrade: function() {
            let cost = this.cost.upgrade.costs[this.cost.upgrade.i];
            if(cost) {
                if(this.bruhs >= cost) {
                    this.bruhs -= cost;
                    this.multiplier += 1;
                    this.cost.upgrade.i++;
                } else {
                    $('#upgrade_btn').popover('show');
                    if(this.timeouts.upgrade_popover) {
                        clearTimeout(this.timeouts.upgrade_popover);
                    }
                    setTimeout(function() {
                        $('#upgrade_btn').popover('hide');
                        app.timeouts.upgrade_popover = false;
                    }, 1000);
                }
            }
            this.tick();
        },
        tick: function() {
            if(this.bruhs >= this.cost.upgrade.costs[this.cost.upgrade.i]) {
                this.classes.upgrade = 'btn-success';
            } else {
                this.classes.upgrade = 'btn-danger';
            }
        },
        redeem: function () {
            this.promo = this.promo.toLowerCase();
            if((this.promo == 'barrel maker') && this.promos.barrel_maker) {
                $('#promo').removeClass('border-danger');
                this.promos.barrel_maker = false;
                this.bruhs += 500;
                this.promo = '';
                this.tick();
            } else {
                $('#promo').addClass('border-danger');
            }
        }
    }
});
$(document).ready(function() {
    $('[data-toggle="popover"]').popover(); 
});
