const konami_code = [];
const app = new Vue({
    el: '#app',
    data: {
        multiplier: 1,
        bruhs: 0,
        warning: ''
    },
    methods: {
        bruh: function() {
            this.bruhs += this.multiplier;
        },
        warn: function(message) {
            this.warning = message;
            $('#warning_modal').modal();
        }
    }
});
