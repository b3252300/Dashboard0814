<template>
<div class="icon_style" v-if="iconApi != 0">
<div v-if="iconApi > 1" class="num">{{ iconApi }}</div>
  <div  :class="['icon_circle', bgColor]">
     <img :src="svgImg">
  </div>
</div>

</template>

<script setup>

defineProps({
  iconApi: Number,
  svgImg: String,
  bgColor: String

});

</script>
<style lang="scss" scoped>
.num {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(17%, -46%);
    background: #fff;
    border: solid #000 thin;
    display: block;
    border-radius: 1.87rem;
    font-size: 0.52vw;
    width: 0.93vw;
    height: 0.677vw;
    /* text-align: center; */
    display: flex;
    align-items: center;
    justify-content: center;
}
.icon_style{
  position: relative;
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  .num {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

$card_alert_img: 100%;
// $card_alert_img_s: 1.3rem; 
.icon_circle {
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: $card_alert_img;
    height:$card_alert_img;
  }
}
</style>