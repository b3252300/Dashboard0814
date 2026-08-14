<template>

    <Treetable  title="Catheter View" scrollSizeHeight="30vh" minHeight="30vh">
    <template #total> 
        Total : {{total}}
    </template>
    <template #thead> 
        <tr>
            <th width="134">Bed</th>
            <th>Patient</th>
            <th class="white-nowrap" width="180">Insert Date</th>
            <th>Catheter Type</th>
            <th width="180">Due Date</th>
            <th class="white-nowrap" width="180">Device Day</th>
        </tr>
    </template>
    <template #tbody>
        <tr v-for="item in list" :key="item.BedCode">
            <td width="134">{{ item.BedName }}</td>
            <td>{{ item.PatientName }}</td>
            <td class="white-nowrap" width="180">{{ item.InsertDate }}</td>
            <td>{{ item.CatheterType }}</td>
            <td width="180">{{ item.DueDate }}</td>
            <td  class="white-nowrap" width="180">{{ item.DeviceDay }}</td>
        </tr>
    </template>

  </Treetable>




</template>

<script setup>

import Treetable from '@/components/Treetable.vue'; 
import { toRefs } from 'vue'

const props = defineProps({
    list: {
        type: Array,
        default: () => {
            [];
        },
    },
    total: {
        type: Number,
        default: () => {
            0;
        },
    },
});
const { list, total } = toRefs(props);

</script>


<style lang="scss" scoped>

</style>