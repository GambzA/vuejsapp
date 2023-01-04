//Test comment for push

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const app = Vue.createApp({
    data() {
        return {
            enemyHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: null,
        }
    },
    watch: {
        enemyHealth(value) {
            if (value <= 0) {
                this.winner = "player";
            } else if(value <= 0 && this.playerHealth <= 0) {
                this.winner = "draw";
            }
        },
        playerHealth(value) {
            if (value <= 0 && this.enemyHealth) {
                this.winner = "draw";
            } else if (value <= 0){
                this.winner = "monster";
            } 
        },
    },
    computed: {
        enemyHealthStyles() {
            return 'width: ' + this.enemyHealth + '%';
        },
        playerHealthStyles() {
            return 'width: ' + this.playerHealth + '%';
        },
        enableSpecialAttack(){
            return (this.currentRound % 3) !== 0 ? true : false;
        },
        getWinner(){
            if(this.winner){
                
            }

            return this.winner;
        }
    },
    methods: {
        attack() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.enemyHealth -= attackValue;
            this.counterAttack();
        },
        counterAttack(){
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
        },
        specialAttack(){
            this.currentRound++;
            const attackValue = getRandomValue(15, 25);  
            this.enemyHealth -= attackValue;
            this.counterAttack();
        },
        heal(){
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            this.playerHealth += healValue;
            
            if(this.playerHealth > 100){
                this.playerHealth = 100;
            }

            this.counterAttack();
        }
    },
});

app.mount('#game');
