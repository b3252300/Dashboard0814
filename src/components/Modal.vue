<template>

<Teleport to="body">
  <div class="modal" tabindex="-1" ref="modal" id="logOut">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <v-slot name="content">
            文字訊息
          </v-slot>
               
        </div>
        <div class="modal-footer">
          <v-slot name="btn">
            按鈕
          </v-slot>
        </div>
      </div>
     
    </div>
  </div>
</Teleport>

</template>


<script setup>
import { onMounted, ref, defineProps } from 'vue';
// import Modal from 'bootstrap/js/dist/modal';
import { ModalStore } from "@/stores/model";


import { storeToRefs } from 'pinia'
const ModalStoreView = ModalStore();
const { modal } = storeToRefs(ModalStoreView);
// const modal = ref(null);



// onMounted(() => {
//   myModal.value = new Modal(modal.value);
//   // console.log(modal.value);
// });


// const myModal_show = () => {

//   myModal.value.show();
// };

// const myModal_hide = () => {
//   myModal.value.hide();
// };


// defineExpose({
//   myModal_show,
//   myModal_hide,
// });



</script>
<style lang="scss" scoped>
.modal-content{
  position: absolute;
  text-align: center;
}
.modal-title{
  font-size: 1.5rem;
  border-bottom: none;
}
.modal-body{
  font-size: 1rem;
  line-height: 1.6;
}
.wark_name{
  font-size: 3rem;
  line-height: 1;
}
.modal-footer{
  border-top: none;
}
.modal-header{
  border-bottom: none;
}

</style>