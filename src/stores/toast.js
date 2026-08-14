import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import Toast from 'bootstrap/js/dist/toast';

export const toastMyStore = defineStore('toastMy', () => {
const toastMy = ref(null);
const mainToast = ref(null);
onMounted(() => {   
    mainToast.value = new Toast(toastMy.value);
});



const myToast_show = () => {
    mainToast.value.show();

};

const myToast_hide = () => {
    mainToast.value.hide();
};

  return { toastMy, myToast_show, myToast_hide }
})
