'use strict';

var React = require('react');
var AppStore = require('../../stores/app-store');
var AddToCart = require('./app-addtocart.jsx');

function getCatalog() {
  return { items: AppStore.getCatalog() };
}

var Catalog = React.createClass({

  getInitialState: function() {
    return getCatalog();
  },

  render: function() {
    var items = this.state.items.map(function(item) {
      return <tr><td>{item.title}</td><td>${item.cost}</td><td><AddToCart item={item}/></td></tr>;
    });

    return (
      <table>
        {items}
      </table>
    );
  }
});

module.exports = Catalog;