
'use strict';
//var Swiper = require('libs/swiper');//1
var Swiper = require('libs/swiper-3.4.min');//布局需为flex布局
var $ = require('libs/jquery');

class ScrollTest{
   constructor(){
      this.init();
   }
   init(){
      //console.log('0000000000')
      this.swiper1 = new Swiper('.swiper-big', {
         loop: true,
         loopAdditionalSlides: 3
      })
      this.swiper2 = new Swiper('.swiper-small', {
         loop: true,
         autoplay: 3000,
         autoplayDisableOnInteraction: true,
         slidesPerView: 4,
         centeredSlides: true,//第一块默认居左，设置后，第一块居中
         prevButton: '#left',
         nextButton: '#right',
         onSlideChangeEnd: function(swiper){
            //alert(swiper.activeIndex)
            $('.swiper-small .swiper-slide').removeClass('active');
            var index = swiper.activeIndex;
            $('.swiper-small .swiper-slide').eq(index).addClass('active');
            //$('.swiper-small .swiper-slide').eq(index).empty().append('<img src="/images/pages/sm'+index+'s.png"/>')
         }  
      })

      this.swiper1.params.control = this.swiper2;//双向控制
      this.swiper2.params.control = this.swiper1;
   }
}

new ScrollTest();