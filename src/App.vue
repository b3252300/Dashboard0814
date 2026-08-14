<template>

<RouterView />



<Teleport to="body">
<div  aria-live="polite" aria-atomic="true"  class="pixelstoast">
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-body">
    The screen width is less than 1024 pixels.<br>
     Recommended to view on another device!
  </div>
</div>
</div>
</Teleport>

<!-- <div class="alert_container" v-show="pixels1024">
  <div class="alert alert_color">
    The screen width is less than 1024 pixels.<br>
     Recommended to view on another device !
  </div>

</div> -->

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterView } from 'vue-router';
import Toast from 'bootstrap/js/dist/toast';
// import Toasts from '@/components/Toasts.vue';


const toastShow = ref(null);
let toastInstance = null;
let toastShown = ref(0);  // 用來追蹤是否已經顯示過 Toast 的旗標

function updateWidth() {
  toastShow.value = document.querySelector(".pixelstoast .toast");
  if (toastShow.value) {
    if (!toastInstance) {  // 只初始化 Toast 一次
      toastInstance = new Toast(toastShow.value, { autohide: true, delay: parseInt(import.meta.env.VITE_TOAST_TIME_MS) });
    }

    // 如果需要，移除 .toast-header 元素
    // const toastHeader = document.querySelector(".toast-header");
    // if (toastHeader) {
    //   toastHeader.remove();
    // }

    if (window.matchMedia("(max-width: 1024px)").matches) {
        toastShown.value++; 
      if (toastShown.value < 2) {  // 如果 Toast 尚未顯示，則顯示 Toast
        toastInstance.show();
      }
        return;
      
    } else {
      toastInstance.hide();
    }
  }
}


onMounted(() => {
 
  updateWidth();
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});


</script>

<style lang="scss" scoped>

.alert{
&_container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1100;
    background: rgba(0, 0, 0, 0.8);
}
&_color{
    background: #fff;
    color: #000;
    padding: 2rem 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }
}

</style>

