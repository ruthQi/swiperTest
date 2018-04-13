'use strict';
var index = require('./pages/index');
var swiper = require('./pages/swiper');
var scroll = require('./pages/scroll');
var effect = require('./pages/effect')

module.exports = function(app) {
    app.use('/', index);
    app.use('/swiper', swiper);
    app.use('/effect', effect);
    app.use('/scroll', scroll);
    app.use('/column', function(req, res, next) {
        res.render('pages/column');
    })
};