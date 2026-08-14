<template>

    <Treetable  title="Radiographer’s Contactable Telephone Number" scrollSizeHeight="72vh">
    <template #tbody>
        <tr v-for="item in list" :key="item.Name">
            <td>{{ item.Name }} </td>
            <td>{{ item.PhoneNumber }} </td>
        </tr>

    </template> 

  </Treetable>
</template>

<script setup>
import Treetable from '@/components/Treetable.vue'; 
import { toRefs } from "vue";
const props = defineProps({
    list: {
        type: Array,
        default: () => {
            [];
        },
    },
    title: {
        type: String,
        default: () => {
            '';
        },
    },
});

const { list } = toRefs(props);

</script>

<style lang="scss" scoped></style>