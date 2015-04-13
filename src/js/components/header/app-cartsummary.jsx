var React = require('react');
var Link = require('react-router-component').Link;

var CartSummary = React.createClass({

  render: function() {
    return (
      <div>
        <Link
          href="/cart">
          Cart items: QTY / $COST
        </Link>
      </div>
    );
  }

});

module.exports = CartSummary;