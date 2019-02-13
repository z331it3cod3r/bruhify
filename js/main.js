const konami_code = [];
const app = new Vue({
    el: '#app',
    data: {
        multiplier: 1,
        bruhs: 0
    },
    methods: {
        bruh: function() {
            this.bruhs += this.multiplier;
        },
        warn: function(message) {
            alert(message);
        }
    }
});
