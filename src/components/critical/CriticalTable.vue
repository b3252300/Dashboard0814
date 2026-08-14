<template>
<Treetable  title="Critical Lab Report" scrollSizeHeight="72vh"  minHeight="72vh">
    <template #total> 
        Total : {{total}}
    </template>
    <template #thead> 
        <tr>
            <th width="100">Bed</th>
            <th  class="white-nowrap">Patient</th>
            <th  class="white-nowrap">Time Report</th>
            <th>Test</th>
            <th>Result</th>
            <th >Acknowledged by</th>
            <th width="179"  class="white-nowrap">Acknowledged Time</th>
            <th>Action by</th>
            <th  width="125">Action Time</th>
        </tr>
    </template>
    <template #tbody>
        <tr v-for="item in list" :key="item.BedCode" :class="getTableClasses(item.HandleStatus)">
            <td width="100">{{ item.BedName }}</td>
            <td>{{ item.PatientName }}</td>
            <td>{{ item.ReportDateTime }}</td>
            <td>{{ item.ItemName }}</td>
            <td>{{ item.Result }}</td>
            <td>{{ item.AcknowledgedStaff }}</td>
            <td  width="179">{{ item.AcknowledgeDateTime }}</td>
            <td>{{ item.ActionStaff }}</td>
            <td  width="125">{{ item.ActionDateTime }}</td>
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
const { list,total } = toRefs(props);


function getTableClasses(HandleStatus) {

    if (HandleStatus == 1) {
        return 'delivered'
    } else if (HandleStatus == 2) {
        return 'Acknowledged'
    } else if (HandleStatus == 3) {
        return 'Action'
    }
}

</script>


<style lang="scss" scoped>

.delivered {
    background-color: #FEF2F2;
}

.Acknowledged {
    background-color: #FEF9E8;
}

.Action {
    background-color: #F0FDF3;
}
</style>
