$(document).ready(function () {
    // init popovers
    $('[data-toggle="popover"]').popover();
    // idle bruhes
    app.idle_bruhes_worker.postMessage(app.idle_bruhes_shop);
    app.idle_bruhes_worker.onmessage = function(e) {
        let data = e.data;
        if(typeof data === 'boolean' && data) {
            app.bruhs++;
        }
    }
});
// noinspection JSUnresolvedFunction
const app = new Vue({
    el: '#app',
    data: {
        multiplier: 1,
        bruhs: 0,
        bruh_img: 'stickfigure.png',
        bruh_sound: {
            object: new Audio('assets/bruh.mp3'),
            playing: false
        },
        promo: '',
        cache: {
            aut0: false,
            promos: {
                barrel_maker: false,
                bruh: false,
                aut0: false
            }
        },
        upgrade: {
            i: 0,
            costs: [100, 250, 500, 1000, 1750, 2500, 5000, 7500, 10000, false]
        },
        timeouts: {
            troll_img: false,
            upgrade_popover: false
        },
        idle_bruhes_worker: new Worker('js/idle_bruhes.js'),
        idle_bruhes_shop: {
            grandpa: {
                bps: 0.1,
                title: 'Retro 1980s Grandpa',
                description: 'Lived in the stone age. Doesn\'t know slang. Took 4 hours to teach him how to bruh.',
                cost: 250,
                cost_add: 10,
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
            let cost = this.upgrade.costs[this.upgrade.i];
            if (cost) {
                if (this.bruhs >= cost) {
                    this.bruhs -= cost;
                    this.multiplier += 1;
                    this.upgrade.i++;
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
            if(this.bruhs >= 4500 && cache('aut0')) {
                alert('promo code: aut0');
            }
        },
        redeem: function () {
            this.promo = this.promo.trim().toLowerCase();
            if (promo_code('barrel maker')) {
                this.bruhs += 500;
            } else if (promo_code('bruh')) {
                this.multiplier += 3;
            } else if (promo_code('aut0')) {
                setInterval(this.bruh, 750)
            } else {
                $('#promo').addClass('border-danger');
            }
            this.tick();
        },
        buy: function(name) {
            idle_object = this.idle_bruhes_shop[name];
            if(this.bruhs >= idle_object.cost) {
                idle_object.owned++;
                this.bruhs -= idle_object.cost;
                this.idle_bruhes_worker.postMessage(this.idle_bruhes_shop);
            }
        }
    }
});

function promo_code(code) {
    let code_name = code.replace(' ', '_');
    if (app.promo === code && cache('promos', code_name) {
        $('#promo').removeClass('border-danger');
        app.promo = '';
        return true;
    }
    return false;
}
function cache() {
    let variable = app.cache;
    for(let i = 0; i < arguments.length; i++) {
        variable = variable[arguments[i]];
    }
    if(!variable) {
        variable = true;
        return false;
    }
    return true;
}
