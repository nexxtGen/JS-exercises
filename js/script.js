var counter = 5;
var Counter = React.createClass({
    // Etap Montowanie
    getDefaultProps: function() {
        console.log("Mozna tutaj ustalić domyślne właściwosci propsów. Obiekt ten jest wywoływany raz i buforowany, gdy klasa jest tworzona. Wartości w mapowaniu zostaną ustawione na this.props, jeśli prop nie jest określony przez komponent nadrzędny (tj. Za pomocą sprawdzania). Ta metoda jest wywoływana przed utworzeniem dowolnych instancji i dlatego nie może polegać na tym pliku. Ponadto należy pamiętać, że wszelkie złożone obiekty zwracane przez funkcję getDefaultProps () będą współużytkowane przez instancje, a nie kopiowane.");
    },

    getInitialState: function() {
        console.log("Określamy w nim poczatkowy stan komponentu, który później jest zwracany jako obiekt.");
        return {
            counter: 0,
            counter2: 10,
            tekst: 'Fizz',      
        };
    },

    componentWillMount: function() {
        console.log("Jest wywoływany tuż przed zamontowaniem komponentu. Ta metoda jest dobrym miejscem do skonfigurowania dowolnych subskrypcji. Jeśli to zrobisz, nie zapomnij zrezygnować z subskrypcji.");
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1,
            counter2: this.state.counter2 + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1,
            counter2: this.state.counter2 - 1
        })
    },

    multiple: function() {
        this.setState({
            counter: this.state.counter * this.state.counter
        })
    },

    counterVScounter2: function() {
        this.setState({
            counter: this.state.counter + this.state.counter2
        })
    },

    reset: function() {
        this.setState({
            counter: this.state.counter = 0,
            counter2: this.state.counter = 0
        })
    },

    tekst: function() {
        this.setState({
            counter: this.state.counter + this.state.tekst,
            counter2: this.state.counter2 + this.state.tekst
        })
    },



    render: function() {
        console.log("Montowanie komponentu.");

        return React.createElement('div', {},
            React.createElement('button', {onClick: this.increment, type: 'submit'}, "Dodaj 1"),
            React.createElement('button', {onClick: this.decrement, type: 'submit'}, "Odejmij 1"),
            React.createElement('button', {onClick: this.multiple, type: 'submit'}, "Pomnóż przez siebie"),
            React.createElement('button', {onClick: this.counterVScounter2, type: 'submit'}, "Dod do counter wart counter2"),
            React.createElement('button', {onClick: this.reset, type: 'submit'}, "Resetuj oba"),
            React.createElement('button', {onClick: this.tekst, type: 'submit'}, "Dodaj Fizz"),
            React.createElement('div', {}, 'counter: ' + this.state.counter),
            React.createElement('div', {}, 'counter2: ' + this.state.counter2)            
        );
    },
    // etap AKTUALIZACJA
    componentDidMount: function() {
        console.log("Okres: Mounting, Faza: Commit. Metoda wywoływana po pierwszej aktualizacji DOM(zamontowaniu komponentu). Świetnie nadaje się na wczytanie danych z serwera oraz nawiązanie kontaktu z Reduxem. Mamy możliwość wywołania this.setState(), ale wiąże się to z dodatkowym rerenderem, co może prowadzić do problemów z wydajnością. ");
    },

    componentWillReceiveProps: function() {
        console.log("Funkcja wywoływana m.in. gdy zmieniają się propsy (np. gdy element-rodzic je zmienia); warto porównać this.props z nextProps i sprawdzić czy rzeczywiście coś się zmieniło (bo nie zawsze musi…)");
    },

    shouldComponentUpdate: function() {
        console.log("Słuzy do zwrotu informacji, czy należy przerenderować drzewo DOM; jeśli z tej funkcji zwrócisz false to render() nie zostanie wykonany, a widok się raczej nie przerenderuje — można to wykorzystać do optymalizowania aplikacji. ");
        return true;
    },

    componentWillUpdate: function() {
        console.log("Jest wyłowywana przed przerenderowaniem. Ma podobne przeznaczenie jak componentWillMount. Nie powinna zawierać wywołania this.setState() ponieważ, nie spowoduje to kolejnego re-renderowania.");
    },

    //render();  Stan jest aktualizowany

    componentDidUpdate: function() {
        console.log("Metoda ta jest odpowiednikiem metody componentDidMount() znanej z etapu montowania. Przyjmuje ona parametry: prevProps oraz prevState, które zawierają poprzednią wartość obiektu this.props oraz stanu komponentu. Jest to również miejsce, w którym możemy aktualizować stan komponentu itp. ");
    },

    //Etap demontażu komponentu
    componentWillUnmount: function() {
        console.log("Nie przyjmuje ta metoda żadnych arg i służy do wykonywania ewentualnych zadań czyszczenia. MOgę tu np wywołać anulowanie żądań do serwera. Czy wyczyscic jakieś dynamiczne elementy DOM które np dodałem w metodzie componentDidMount.");
    }

});



var element = React.createElement(Counter);
var element2 = React.createElement(Counter);
var element3 = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));
ReactDOM.render(element2, document.getElementById('app2'));
ReactDOM.render(element3, document.getElementById('app3'));