const app = Vue.createApp({
    data() {
        return {
            userStyleInput: '',
            toggleVisibility: true,
            visibility: 'visible',
            inlineStyleInput: '',
        }
    },
    watch:{
        toggleVisibility(){
            if(this.toggleVisibility == true){
                this.visibility = 'visible';
            } else {
                this.visibility = 'hidden';
            }
        }
    },
    computed:{
        userStyle(){
            return this.userStyleInput;
        },
        inlineStyle(){
            return this.inlineStyleInput;
        }
    },
    methods: {
        toggleHide(){
            this.toggleVisibility = !this.toggleVisibility
        }
    },
}).mount("#assignment");