
'use strict';
//var Swiper = require('libs/swiper');//1
var Swiper = require('libs/swiper-3.4.min');//布局需为flex布局
var $ = require('libs/jquery');

class Effect{
   constructor(){
      this.init();
   }
   init(){
      new Swiper('.swiper-container', {
         effect: 'coverflow',
         //grabCursor: true,
         centeredSlides: true,
         slidesPerView: 3,
         coverflow: {
            rotate: 50,
            stretch: 0,
            depth: -100,
            modifier: 1,
            slideShadows : true
         }
      })
   }
}

new Effect();