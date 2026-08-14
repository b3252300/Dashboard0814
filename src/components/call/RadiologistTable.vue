<template>

    <Treetable  :title="title" scrollSizeHeight="auto">
    <template #tbody>

        <tr v-for="item in list" :key="item.Type">
            <td>{{ item.Type }} </td>
            <td>{{ item.Name }} </td>
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

<style lang="scss" scoped>

</style>