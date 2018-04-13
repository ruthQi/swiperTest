
'use strict';
var Swiper = require('libs/swiper-3.4.min');//布局需为flex布局
var $ = require('libs/jquery');

class Column{
   constructor(){
      this.init();
   }
   init(){
      new Swiper('.swiper-container', {
         slidesPerView: 4,//一行显示3个
         slidesPerColumn: 2,//显示2行
         slidesPerColumnFill : 'row',
      })
   }
}

new Column();