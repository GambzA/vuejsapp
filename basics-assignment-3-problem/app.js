const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    computed: {
        magicnumber(){
            if(this.counter > 37){
                return "Too much!";
            } else if(this.counter < 37) {
                return "Not there yet";
            }
            return this.counter;
        }
    },
    watch: {
        counter(value){
            const child = this;
            if(value > 0){
                setTimeout(function(){
                    child.counter = 0;
                }, 5000);
            }
        }
    },
    methods: {
        incNum(val){
            this.counter = this.counter + val;
        }
    },
}).mount('#assignment');