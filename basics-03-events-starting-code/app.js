const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    confirmName(){
      this.confirmedName = this.name;
    },
    incrementNum(num){
      this.counter = this.counter + num;
    },
    decrementNum(num){
      this.counter = this.counter - num;
    },
    setName(event, lastname){
      this.name = event.target.value + ' ' + lastname;
    },
  }
});

app.mount('#events');
