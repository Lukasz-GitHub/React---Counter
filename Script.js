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

    render: function() {
      return (
        React.createElement('div', {className: 'counter'}, 
          React.createElement('div', {className: 'btn-group'}, 
            React.createElement('button', {className: 'btn',onClick: this.decrement}, '-'),
            React.createElement('div', {}, 'Counter: ' + this.state.counter),
            React.createElement('button', {className: 'btn', onClick: this.increment}, '+'),
          )
        )
      );
    }
});

var element = React.createElement('div', {}, 
    React.createElement(Counter, {})
);

ReactDOM.render(element, document.getElementById('app'));