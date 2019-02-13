const konami_code = [];
const app = new Vue({
    el: '#app',
    data: {
        multiplier: 1,
        bruhs: 0,
        warning: '',
        classes: {
            multiply: 'btn btn-danger'
        }
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
