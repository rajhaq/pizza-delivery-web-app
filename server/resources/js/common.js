export default {
    data() {
        return {
            showFullLoading: false,
            snackbar: false,
            snacktext: 'Lorem ipsum dolor sit amet',
            snackcolor: 'green',
            snackvertical: true,
            snacktop: true,
            snackright: true,
            snacktimeout: 5000,


        }
    },

    methods: {
        snacks(text, color) {
            this.snacktext = text;
            this.snackcolor = color;
            this.snackbar = true;
        },
        start() {
            this.showFullLoading = true;
        },
        set(num) {
            this.$Progress.set(num)
        },
        increase(num) {
            this.$Progress.increase(num)
        },
        decrease(num) {
            this.$Progress.decrease(num)
        },
        finish() {
            this.showFullLoading = false;
        },
        fail() {
            this.showFullLoading = false;
        },
        test() {
            this.$Progress.start()


        }
    },
}