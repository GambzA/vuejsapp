const app = Vue.createApp({
    data(){
      return {
        fullName: 'Roi Mark Gamba',
        age: 25,
        img: 'http://localhost/vuejsapp/basics-assignment-1-problem/basics-assignment-1-problem/img.jpg'
      };
    },
    methods: {
      calculateFutureAge(){
        const age           = this.age;
        const additionalAge = 5;
        return age + additionalAge;
      },
      outputRandNum(){
        return Math.random().toFixed(2);
      }
    }
  });
  
  app.mount('#assignment');