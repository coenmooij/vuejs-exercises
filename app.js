new Vue({
    el: '#app',
    data: {
        projects: [
            {
                name: 'Monster Game',
                description: 'A turn-based game to beat a monster with 4 simple moves. It will attack you as well.',
                demo: '/monster-game',
                sourceCode: 'https://github.com/coenmooij/vuejs-exercises/tree/master/monster-game',
            }, {
                name: 'Wonderful quotes',
                description: 'A quotes displaying app in which you can add and remove quotes',
                demo: '/wonderful-quotes',
                sourceCode: 'https://github.com/coenmooij/vuejs-exercises/tree/master/wonderful-quotes',
            },
        ],
    }
});