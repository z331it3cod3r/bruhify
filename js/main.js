const konami_code = [];
const app = new Vue({
    el: '#app',
    data: {
        multiplier: 1,
        bruhs: 0,
        warning: '',
        classes: {
            multiply: 'btn btn-danger'
        },
        cost: {
            multiply: 100
        }
    },
    methods: {
        bruh: function() {
            this.bruhs += this.multiplier;
            if(this.bruhs >= this.cost.multiply) {
                this.classes.multiply = 'btn-success';
        },
        warn: function(message) {
            this.warning = message;
            $('#warning_modal').modal();
        }
    }
});
