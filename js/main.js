$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});
// noinspection JSUnresolvedFunction
const app = new Vue({
    el: '#app',
    data: {
        multiplier: 1,
        bruhs: 0,
        warning: '',
        bruh_img: 'stickfigure.png',
        bruh_sound: {
            object: new Audio('assets/bruh.mp3'),
            playing: false
        },
        promo: '',
        promos: {
            barrel_maker: true,
            bruh: true,
            aut0: true
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
        },
        idle_bruhes_shop: {
            grandpa: {
                bps: 0.1,
                title: 'Retro 1980s Grandpa',
                description: 'Lived in the stone age. Doesn\'t know slang. Took 4 hours to teach him how to bruh.',
                cost: 250,
                owned: 0
            }
        }
    },
    methods: {
        bruh: function () {
            this.bruhs += this.multiplier;
            // noinspection JSUnusedGlobalSymbols
            this.bruh_img = 'stickfigurewithtrollface.png';
            if (this.timeouts.troll_img) {
                clearTimeout(this.timeouts.troll_img);
            }
            if (!this.bruh_sound.playing) {
                this.bruh_sound.object.play();
                this.bruh_sound.playing = true;
                this.bruh_sound.object.onended = function () {
                    app.bruh_sound.playing = false;
                    app.bruh_sound.object.currentTime = 0;
                }
            }
            this.timeouts.troll_img = setTimeout(function () {
                app.bruh_img = 'stickfigure.png';
                app.timeouts.troll_img = false;
            }, 250);
            this.tick();
        },
        upgrade: function () {
            let cost = this.cost.upgrade.costs[this.cost.upgrade.i];
            if (cost) {
                if (this.bruhs >= cost) {
                    this.bruhs -= cost;
                    this.multiplier += 1;
                    this.cost.upgrade.i++;
                } else {
                    $('#upgrade_btn').popover('show');
                    if (this.timeouts.upgrade_popover) {
                        clearTimeout(this.timeouts.upgrade_popover);
                    }
                    setTimeout(function () {
                        $('#upgrade_btn').popover('hide');
                        app.timeouts.upgrade_popover = false;
                    }, 1000);
                }
            }
            this.tick();
        },
        tick: function () {
            if (this.bruhs >= this.cost.upgrade.costs[this.cost.upgrade.i]) {
                this.classes.upgrade = 'btn-success';
            } else {
                this.classes.upgrade = 'btn-danger';
            }
        },
        redeem: function () {
            this.promo = this.promo.trim().toLowerCase();
            if (promo_code('barrel maker')) {
                this.bruhs += 500;
            } else if (promo_code('bruh')) {
                this.multiplier += 3;
            } else if (promo_code('aut0')) {
                setInterval(this.bruh, 1000)
            } else {
                $('#promo').addClass('border-danger');
            }
            this.tick();
        }
    }
});

function promo_code(code) {
    let code_name = code.replace(' ', '_');
    if (app.promo === code && app.promos[code_name]) {
        app.promos[code_name] = false;
        $('#promo').removeClass('border-danger');
        app.promo = '';
        return true;
    }
    return false;
}
