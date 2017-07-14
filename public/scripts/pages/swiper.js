
'use strict';
//var Swiper = require('libs/swiper');//1
var Swiper = require('libs/swiper2');//布局需为flex布局
var $ = require('libs/jquery');
class SwiperTest{
   constructor(){
      let clientWidth = $('.swiper-container').width();
      this.slidesPerView = this.slidesPerGroup = Math.floor(clientWidth/72);
      this.init();
      this.bindEvent();
   }
         
   init(){
      console.log('00000')
      this.mySwiper = new Swiper('.swiper-container', {
         observer: true,//2
         slidesPerView : this.slidesPerView,
         slidesPerGroup : this.slidesPerGroup
      })
      $('.arrow-left').on('click', (e) => {
         e.preventDefault()
         console.log('left')
         //this.mySwiper.swipePrev();//1
         this.mySwiper.slidePrev();//2
      })
      $('.arrow-right').on('click', (e) => {
         e.preventDefault()
         //this.mySwiper.swipeNext();//1
         this.mySwiper.slideNext();//2
      })
   }
   bindEvent(){
      $(window).on('resize', ()=>{
         console.log('resize')
         let clientWidth = $('.swiper-container').width();
         this.mySwiper.params.slidesPerView=this.mySwiper.params.slidesPerGroup=Math.floor(clientWidth/72);
         //this.mySwiper.reInit();//1
         //this.mySwiper.swipeTo(0,0);//1
         this.mySwiper.slideTo(0,0);//2
      })
   }
}

new SwiperTest();
