<template>
<div class="footerlist mx-0 row" :style="footerlist_h">

<div class="iconlist col-auto">
 <!-- Swiper -->
    <div class="swiper_list swiper">
        <div class="swiper-wrapper">
          <slot name="btn_FooterIcon"></slot>
            
        </div>
        
    </div>
    
<div class="swiper_custom_btn">
  <button type="button"  class="ms-auto button-prev btn_none">
            <Svg_left/>
    </button>
        <button type="button"  class="ms-auto button-next btn_none">
          <Svg_right/>
        </button>
</div>    
</div>
<div class="col-auto flex-nowrap d-flex px-0 tootlist">
<div class="d-flex">
        <slot name="btnlist"></slot>
</div>

<button type="button" class="btn_none btn_clear col-auto pe-0 ms-auto" @click="Clear(Page)">
    <Svg_clear/>
</button>

</div>
</div>
  
</template>


<script setup>
import { onMounted, ref, toRefs, computed, watchEffect } from "vue";

//svg 的 icon
import Svg_left from '@/components/footer/Svg_left.vue';
import Svg_right from '@/components/footer/Svg_right.vue';
import Svg_clear from '@/components/footer/Svg_clear.vue';

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

//pinia
import { storeToRefs } from 'pinia'
import { btn_footerIcon } from '@/stores/btn_footerIcon';
import { btn_bedfooterIcon } from '@/stores/btn_bedfooterIcon';
const footerIcon =btn_footerIcon();
const bedfooterIcon =btn_bedfooterIcon();

const  { clearClicked  } = footerIcon;
const  { clearBedClicked  } = bedfooterIcon;


const props = defineProps({
  Page: { type: String }
});
const { Page } = toRefs(props);



onMounted(async () => {
  var swiper = await new Swiper(".swiper_list", {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 0,
    freeMode: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    on: {
      init: function () {
        checkNavigationVisibility();
      },
      
      resize: function () {
        checkNavigationVisibility();
      }
    }
  });

   
  function checkNavigationVisibility() {
    const swiperContainer = document.querySelector('.swiper_list');

    if(swiperContainer){
      const swiperWrapper = swiperContainer.querySelector('.swiper-wrapper');

      const nextButton = document.querySelector('.button-next');
      const prevButton = document.querySelector('.button-prev');

      if (swiperWrapper.scrollWidth <= swiperContainer.clientWidth) {
        nextButton.style.display = 'none';
        prevButton.style.display = 'none';
      } else {
        nextButton.style.display = 'flex';
        prevButton.style.display = 'flex';
      }
    }

  }



  const nextButton = document.querySelector('.button-next');
  const prevButton = document.querySelector('.button-prev');


  nextButton.addEventListener('click', () => {
    // console.log(".button-next");
    swiper.slideNext();
  });



  prevButton.addEventListener('click', () => {
    swiper.slidePrev();
    // console.log(".button-prev");
  });
 
   
});







//全域動態style 控制
import { styledynamic } from '@/stores/style';
const styledynamicView = styledynamic();
const { footerlist_h } = storeToRefs(styledynamicView);

const emit = defineEmits(['IsClear']);

const Clear = (ByPage) => {
  if(ByPage == 'Home'){
    clearClicked();
  } else if(ByPage == 'BedStatus') {
    clearBedClicked();
  }
 
  emit('IsClear', true);
}



</script>


<style lang="scss" scoped>

.footerlist{
    background: #fff;
    padding:0.5rem 1.5rem;
    margin-bottom: 0.5rem;
    box-shadow: 0 -1px 2px rgba(16, 24, 40, 0.18);
    position: fixed;
    bottom:0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:start;
    z-index: 1046;
    @media screen and (max-width:1300px){
      padding:0.3rem 1rem;
      margin-bottom:0.3rem;
    }
}

.swiper_custom_btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    display: flex;
    .button-prev, .button-next{
      svg{
        width:1.43rem;
        height: auto;
      }
      &:hover, &:focus, &:active{
          opacity: 0.6;
      }       
    }
      
}

.iconlist{
    background: #EAECF0;
    border-radius: 0.31rem;
    padding:0.25rem 0 0.25rem 0.5rem; 
    padding-right: 6rem;
    // max-width: 80%;
    // width: 100%;
    position: relative;
    width:75%;
    .swiper-wrapper{
      // padding-right: 6rem;
      width: fit-content;

    }
    // @media screen and (max-width:1400px) {
    //   width: 65%;
    // }
 

}
.tootlist{
  width: 25%;
  // @media screen and (max-width: 1400px) {
  //       width: 35%;
   
  // }
}

.btn_clear{
  margin-left: 1rem;
  svg{
    width:1.56rem;
    height:auto;    
}
&:hover, &:focus, &:active{
  opacity: 0.6;
}
}
</style>
