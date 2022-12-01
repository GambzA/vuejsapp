const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lname: '',
      // fullname: '',
    };
  },
  computed: {
    fullname(){
      // if(this.name===''){
      //   return '';  
      // }
      return this.name + ' ' + this.lname;
    },
  },
  watch: {
    counter(value){
      if(value > 50){
        this.counter = 0;
      }
    }
    // name(value) {
    //   this.fullname = value + ' ' + this.lname;
    // },
    // lname(value) {
    //   this.fullname = this.name + ' ' + value;
    // }
  },
  methods: {
    setName(event, lastName) {
      // this.name = event.target.value + ' ' + lastName;
      this.name = event.target.value;
    },
    resetInput(){
      this.name="";
      this.lname="";
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    outputFullName(){
      if(this.name===''){
        return '';  
      }
      return this.name + ' ' + 'Gamba';
    },
  }
});

app.mount('#events');
