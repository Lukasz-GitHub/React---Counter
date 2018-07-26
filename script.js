'use strict';

var counter = 0;

var Counter = React.createClass({

    getInitialState: function(){
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        })
    },

    componentWillMount: function() {
        console.log('Wykonałem się zaraz przed metodą render.')
    },
    componentDidMount: function() {
      console.log('Pokazuje komponentu na stronie.')  
    },
    componentWillReceiveProps: function() {
        console.log('Wykonam się gdy dostenę nowe właściwości')
    },
    shouldComponentUpdate: function() {
        console.log('Sprawdzam czy faktycznie muszę przersyować komponent.')
        return true;
    },
    componentWillUpdate: function() {
        console.log('Przygotowuje nadchodzace zmiany.')
    },
    componentDidUpdate: function() {
      console.log('Wyświetlam zaktualizowany komponent')  
    },
    componentWillUnmount: function() {
        console.log('Usuwam zbędny komponent')
    },
    
    render: function() {
      return (
        React.createElement('div', {className: 'container'}, 
          React.createElement('div', {className: 'counter'}, 
            React.createElement('button', {className: 'btn-up',onClick: this.increment}, '+'),
            React.createElement('div', {}, 'Counter: ' + this.state.counter),
            React.createElement('button', {className: 'btn-down', onClick: this.decrement}, '-'),
          )
        )
      );
    }
});

var element = React.createElement('div', {}, 
    React.createElement(Counter, {}),
    React.createElement(Counter, {})
);

ReactDOM.render(element, document.getElementById('app'));
