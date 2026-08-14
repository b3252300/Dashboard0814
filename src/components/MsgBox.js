import Modal from "./UrgentModal.vue";
import { createApp, ref, h } from 'vue';

export function MsgBox(id, bedName, labDateTime) {
    return new Promise((resolve, reject) => {
        let myForm = ref();

        const mountNode = document.createElement('div');

        document.body.appendChild(mountNode);

        const app = createApp({
            render() {
                return h(Modal, {
                    ref: myForm,
                    id: id,
                    bedName: bedName,
                    labDateTime: labDateTime,
                })
            }
        });

        let instance = app.mount(mountNode);

        myForm.value.myModal_show();
    })
}