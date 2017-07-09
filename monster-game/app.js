new Vue({
    el: '#app',
    data: {
        active: false,
        disabled: false,
        playerWon: false,
        gameOver: false,
        playerHealth: 100,
        monsterHealth: 100,
        name: '',
        defaultName: 'Player',
        logs: [],
    },
    computed: {
        playerColor: function () {
            return this.getColor(this.playerHealth);
        },
        monsterColor: function () {
            return this.getColor(this.monsterHealth);
        },
        turn: function () {
            return (this.disabled || this.gameOver && !this.playerWon) ? 'Monster' : this.name;
        }
    },
    methods: {
        getColor: function (health) {
            if (health > 65) {
                return 'green';
            } else if (health > 45) {
                return 'yellow';
            } else if (health > 20) {
                return 'orange';
            } else {
                return 'red';
            }
        },
        startGame: function () {
            this.name = this.name === '' ? this.defaultName : this.name;
            this.active = true;

        },
        attack: function () {
            var damage = this.getRandomDamage(1);
            var decrease = damage > this.monsterHealth ? this.monsterHealth : damage;
            this.monsterHealth -= decrease;
            this.log('player', 'monster', 'attack', decrease);
            this.changeTurn();
        },
        special: function () {
            var damage = this.getRandomDamage(Math.floor((Math.random() * 4) + 1));
            var decrease = damage > this.monsterHealth ? this.monsterHealth : damage;
            this.monsterHealth -= decrease;
            this.log('player', 'monster', 'special', decrease);
            this.changeTurn();
        },
        heal: function () {
            var potion = 12;
            var increase = this.playerHealth + potion > 100 ? 100 - this.playerHealth : potion;
            this.playerHealth += increase;
            this.log('player', 'player', 'heal', increase);
            this.changeTurn();
        },
        surrender: function () {
            this.playerHealth = 0;
            this.log('player', 'monster', 'surrender', 0);
            this.endGame(false);
        },
        getRandomDamage: function (multiplier) {
            return multiplier * Math.floor((Math.random() * 20) + 1);
        },
        changeTurn: function () {
            if (this.monsterHealth <= 0) {
                this.endGame(true);
            } else {
                this.disabled = true;
                scope = this;
                setTimeout(function () {
                    scope.monsterMove();
                }, 1000);
            }
        },
        monsterMove: function () {
            var damage = this.getRandomDamage(1);
            var decrease = damage > this.playerHealth ? this.playerHealth : damage;
            this.playerHealth -= decrease;
            this.log('monster', 'player', 'attack', decrease);
            if (this.playerHealth <= 0) {
                this.endGame(false);
            } else {
                this.disabled = false;
            }
        },
        endGame: function (playerWon) {
            if (playerWon) {
                this.playerWon = true;
            }
            this.gameOver = true;
        },
        resetGame: function () {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.logs = [];
            this.gameOver = false;
            this.disabled = false;
            this.playerWon = false;
        },
        log: function (actor, target, action, points) {
            this.logs.push(actor + ' did ' + action + ' with ' + points + ' points on ' + target);
        },
    },

});