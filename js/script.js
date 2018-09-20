//Create object with elements for React.
var games = [
    {   
        id: 1,
        title: 'Icewind Dale',
        desc: 'Dungeons & Dragons w górach mroźnego grzbietu.',
        img: 'images/1-icewind.jpg'
    },
    {   
        id: 2,
        title: "Baldur's Gate 2",
        desc: 'D&D w krainie Amn.',
        img: 'images/2-baldur.jpg'
    },
    {   
        id: 3,
        title: "League of Legends",
        desc: 'MOBA w krainie przez wieki targanej wojną i teraz też.',
        img: 'images/3-lol.jpg'
    },
    {   
        id: 4,
        title: "Fallout 2",
        desc: 'Turowy RPG w postapokaliptycznym świecie.',
        img: 'images/4-fallout2.jpg'
    }
]

var gamesElements = games.map(function(game){
    return React.createElement('li', {key: game.id},
        React.createElement('h2', {}, game.title),
        React.createElement('p', {}, game.desc),
        React.createElement('img', {src: game.img})
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista Gier:'),
        React.createElement('ol', {}, gamesElements)
    );

ReactDOM.render(element, document.getElementById('app'));