<template>
<!-- v-show="globalStore.loading" -->
<!-- <div class="loading"  :class="{ active: globalStore.loading }" > -->
    <div class="loading"  :loading="loading" :class="{ active: globalStore.loading }" >
        <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
  <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
    <animateTransform attributeType="xml"
      attributeName="transform"
      type="rotate"
      from="0 25 25"
      to="360 25 25"
      dur="0.6s"
      repeatCount="indefinite"/>
    </path>
  </svg>
    </div>
    
</template>

<script setup>
import { ref } from 'vue';
import { useGlobalStore } from '@/stores/store'
const globalStore = useGlobalStore();


</script>

<style lang="scss" scoped>
.loader{
  margin: 0 0 2em;
  height: 100px;
  width: 20%;
  text-align: center;
  padding: 1em;
  margin: 0 auto 1em;
  display: inline-block;
  vertical-align: top;
}

/*
  Set the color of the icon
*/
svg path,
svg rect{
  fill: #1DA254;
}



.loading {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: fixed;
    z-index: 999999999;
    width: 100%;
    height: 100%;
    color: #fff;  
    pointer-events: none;
    // animation: slidein 2s infinite;
    transition: all 0.3s ease;
    opacity: 0;
 

    &.active{   
         opacity: 1;
  
    }
}
</style>