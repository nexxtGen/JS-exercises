//Create object with elements for React.
var gamesArray = [
    {   
        idInArr: 1,
        titleInArr: 'Icewind Dale',
        descInArr: 'Dungeons & Dragons w górach mroźnego grzbietu.',
        imgInArr: 'images/1-icewind.jpg'
    },
    {   
        idInArr: 2,
        titleInArr: "Baldur's Gate 2",
        descInArr: 'D&D w krainie Amn.',
        imgInArr: 'images/2-baldur.jpg'
    },
    {   
        idInArr: 3,
        titleInArr: "League of Legends",
        descInArr: 'MOBA w krainie przez wieki targanej wojną i teraz też.',
        imgInArr: 'images/3-lol.jpg'
    },
    {   
        idInArr: 4,
        titleInArr: "Fallout 2",
        descInArr: 'Turowy RPG w postapokaliptycznym świecie.',
        imgInArr: 'images/4-fallout2.jpg'
    }
];
// Poprzednie zadanie
/*
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
*/

//Przekształcanie na komponenty- akt zad

/*
var GameDesc = React.createElement {
    propTypes: {
        descInProps: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('h2', {}, this.props.descInProps )
    }
}
*/


// Uważać na średniki, nawiasy itp!!!!!
// klasy third level
var GameTitle = React.createClass( {
    propTypes: {
        titleInProps: React.PropTypes.string.isRequired
    },

    // Mogę przekazać teraz do propsa odniesienie do klucza w Array lub później w klasie game jako this.props.valueInProps.titleInArr !!
    render: function() {
        return React.createElement('h2', {}, this.props.titleInProps.titleInArr); // Tu średnik is ok.
    }
});

var GameDescription = React.createClass( {
    propTypes: {
        descInProps: React.PropTypes.string.isRequired
    },
    // Mogę przekazać teraz do propsa odniesienie do klucza w Array lub później w klasie game. 
    render: function() {
        return React.createElement('h4', {}, this.props.descInProps.descInArr); // Tu średnik is ok.
    }
});
var GameImage = React.createClass( {
    propTypes: {
        imageInProps: React.PropTypes.string.isRequired
    },
    // Mogę przekazać teraz do propsa odniesienie do klucza w Array lub później w klasie game. 
    render: function() {
        return React.createElement('img', {src: this.props.imageInProps.imgInArr}, ); // Tu średnik is ok.
    }
});
// Klasa  second level
var singleGameAllData = React.createClass({
    propTypes: {
        objectInProps: React.PropTypes.object.isRequired, //objectInProps jest obiektem, ale juz w w klasie GameTitle została przekazana nazwa klucza!
    },

    render: function() {
        return (
            React.createElement('li', {},
                //Incepcja poprzednich klas o levelu 3
                React.createElement(GameTitle, { titleInProps: this.props.objectInProps }), // Gdy zakomentuję tworzone el niżej to Tu ; na końcu Nie zadziała!!!!!!! Pamiętaj!!!!!! 
                React.createElement(GameDescription, {descInProps: this.props.objectInProps}),
                React.createElement(GameImage, {imageInProps: this.props.objectInProps} )  //z ; nie zadziała.           
            ) // Nie dawać ; !!
        );  // Tu z ; zadziała, ale bez też będzie ok! 
    }
});
//klasa first level
var GamesList = React.createClass({
    propTypes: {
        arrayInProps: React.PropTypes.array.isRequired, 
    },

    render: function() {
        return ( // TTrzeba pamietać o return!!!!!!
            React.createElement('div', {},
                React.createElement('h1', {}, 'Lista Gier:'),
                React.createElement('ol', {}, 
                        //Incepcja incepcji poprzednich klas.Zwrócić uwagę na strukturę przekazywania wartosci!!
                        this.props.arrayInProps.map( function(elem) {
                            return React.createElement(singleGameAllData, {objectInProps: elem, key: elem.idInArr});
                        })
                    )
            )        
        )
        
    }
});

//Tworzę zmienną element i przypisuję do niej klasę GamesList. Jako propsa przekazuję tablicę z obiektami.
var element = React.createElement(GamesList, {arrayInProps: gamesArray});
//Renderuję drzewo DOM reacta ze zemiennej element.
ReactDOM.render(element, document.getElementById('app'));






