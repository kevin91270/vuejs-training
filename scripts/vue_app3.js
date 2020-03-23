var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    },
    methods: {
        messageHidden: function () {
            if (this.seen == false) {
                this.seen = true
            }
            else (
                this.seen = false
                
            )
            console.log(this.seen)

        }
    }
})