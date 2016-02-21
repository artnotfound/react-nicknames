var newNick = require('./src/newNick');
var nicknames = require('./src/nicknames');

var map = {};

nicknames.forEach(function (nickname) {
  map[nickname] = newNick(nickname);
});

map.newNick = newNick;

module.exports = map;
