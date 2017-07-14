'use strict';
var index = require('./pages/index');
var swiper = require('./pages/swiper');

module.exports = function(app) {
    app.use('/', index);
    app.use('/swiper', swiper);

};