var React = require('react');
var CartSummary = require('./app-cartsummary');

var Header = React.createClass({

  render: function() {
    return (
      <div className="header">
        <h1>Let Us Shop!</h1>
        <CartSummary />
        <hr />
      </div>
    );
  }

});

module.exports = Header;