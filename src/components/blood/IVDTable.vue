<template>
    <Treetable  title="Infusion IVD Regime"  scrollSizeHeight="30vh" minHeight="30vh">
    <template #total> 
        Total : {{total}}
    </template>
    <template #thead> 
        <tr>
            <th  width="100">Bed</th>
            <th width="179">Patient</th>
            <th width="179">Start Time</th>
            <th>IV Solution/Medication</th>
            <th>Status</th>
        </tr>
    </template>
    <template #tbody>
        <tr v-for="item in list" :key="item.BedCode">
            <td  width="100">{{ item.BedName }}</td>
            <td width="179">{{ item.PatientName }}</td>
            <td width="179">{{  GetDateTimeDDMMHHmm(new Date(item.StartDateTime)) }}</td>
            <td>{{ item.IvSolution }}</td>
            <td v-if="item.Status == 'Paused'" class="red">{{ item.Status }}</td>
            <td v-else>{{ item.Status }}</td>
        </tr>
    </template>

  </Treetable>
</template>

<script setup>
import Treetable from '@/components/Treetable.vue'; 
import { toRefs } from 'vue'
import useDate from "@/composable/useDate";

const { GetDateTimeDDMMHHmm } = useDate();

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

// const getTimeStr = (date) => {
//     if (date != null) {
//         return GetDateTimeDDMMHHmm(new Date(date));
//     } else {
//         return '';
//     }
// }

// const checkDataList = () => {
//     console.log(list.value);

//     if (list.value.length == 0) {
//         for(var i=0;i<10;i++){
//             list.value.push({});

//         }
        
//     }

//     console.log(list.value);
// }
// checkDataList();
</script>


<style lang="scss" scoped>
td.red {
    color: #DC2626;
}
</style>