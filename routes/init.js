'use strict';
var index = require('./pages/index');
var swiper = require('./pages/swiper');
var scroll = require('./pages/scroll')

module.exports = function(app) {
    app.use('/', index);
    app.use('/swiper', swiper);
    app.use('/scroll', scroll);

};