new Vue({
    el: '#app',
    data: {
        projects: [
            {
                name: 'Monster Game',
                description: 'A turn-based game to beat a monster with 4 simple moves.',
                demo: '/monster-game',
                sourceCode: 'https://github.com/coenmooij/vuejs-exercises/tree/master/monster-game',
            }, {
                name: 'Wonderful quotes',
                description: 'A quotes displaying app in which you can add and remove quotes',
                demo: '/wonderful-quotes',
                sourceCode: 'https://github.com/coenmooij/vuejs-exercises/tree/master/wonderful-quotes',
            }, {
                name: 'Super Quiz',
                description: 'A simple math quiz with some cool css animation',
                demo: '/super-quiz',
                sourceCode: 'https://github.com/coenmooij/vuejs-exercises/tree/master/super-quiz',
            }, {
                name: 'Stock Trader',
                description: 'A stock trading game which you can buy and sell stocks',
                demo: '/stock-trader',
                sourceCode: 'https://github.com/coenmooij/vuejs-exercises/tree/master/stock-trader',
            },
        ],
    }
});