<template>
<Teleport to="body">
<div  aria-live="polite" aria-atomic="true"  class="toastStyle">
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" ref="toastMy">
    <div class="toast-header">    
      <button type="button" class="btn-close btn-close-white ms-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  <div class="toast-body">
    <slot></slot>
  </div>
</div>
</div>
</Teleport>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Toast from 'bootstrap/js/dist/toast';
const toastMy = ref(null);
const mainToast = ref(null);


onMounted(() => {   
    // mainToast.value = new Toast(toastMy.value,{autohide:true, delay:1000});
});



const myToast_show = () => {
    mainToast.value.show();

};

const myToast_hide = () => {
    mainToast.value.hide();
};
defineExpose({
    myToast_show,
    myToast_hide,
});
</script>
<style lang="scss" scoped>



</style>