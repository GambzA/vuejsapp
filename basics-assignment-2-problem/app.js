const app = Vue.createApp({
    data(){
        return{
            alertMsg: '',
            keyDownMessage: '',
            stringToFeed: '',
            stringToShow: '',
        };
    },
    methods: {
        showAlert(){
            this.alertMsg = 'Hello, I am an alert.';
            alert(this.alertMsg);
        },
        updateOnKeyDown(event){
            this.keyDownMessage = event.target.value;
        },
        updateString(event){
            this.stringToFeed = event.target.value;
        },
        feedString(){
            this.stringToShow = this.stringToFeed;
        }
    }
}).mount('#assignment');