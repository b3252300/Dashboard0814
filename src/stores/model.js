import { onMounted } from 'vue';
import { defineStore } from 'pinia'
import Modal from 'bootstrap/js/dist/modal';
export const ModalStore = defineStore('ModalMy', () => {
    const modal = ref(null);
    const myModal = ref(null);
    
    onMounted(() => {
      myModal.value = new Modal(modal.value);     
    });
    
    
    const myModal_show = () => {    
      myModal.value.show();
    };
    
    const myModal_hide = () => {
      myModal.value.hide();
    };
return {
    modal,
    myModal_show
}    
});





