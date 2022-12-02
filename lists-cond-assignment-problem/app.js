const app = Vue.createApp({
    data() {
        return {
            taskName: "",
            taskList: [],
            showList: true,
        }
    },
    computed: {
        toggleLabel(){
            return this.showList ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask(){
            this.taskList.push(this.taskName);

        },
        toggleList(){
            this.showList = !this.showList;
        }
    },
}).mount("#assignment");