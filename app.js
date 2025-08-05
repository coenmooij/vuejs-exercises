new Vue({
    el: '#app',
    data: {
        projects: [
            {
                name: 'Monster Game',
                description: 'A turn-based game to beat a monster with 4 simple moves.',
                demo: '/vuejs-exercises/monster-game',
                sourceCode: 'https://github.com/coenmooij/vuejs-exercises/tree/master/monster-game',
            }, {
                name: 'Wonderful quotes',
                description: 'A quotes displaying app in which you can add and remove quotes',
                demo: '/vuejs-exercises/wonderful-quotes',
                sourceCode: 'https://github.com/coenmooij/vuejs-exercises/tree/master/wonderful-quotes',
            }, {
                name: 'Super Quiz',
                description: 'A simple math quiz with some cool css animation',
                demo: '/vuejs-exercises/super-quiz',
                sourceCode: 'https://github.com/coenmooij/vuejs-exercises/tree/master/super-quiz',
            }, {
                name: 'Stock Trader',
                description: 'A stock trading game which you can buy and sell stocks',
                demo: '/vuejs-exercises/stock-trader',
                sourceCode: 'https://github.com/coenmooij/vuejs-exercises/tree/master/stock-trader',
            },
        ],
    }
});
