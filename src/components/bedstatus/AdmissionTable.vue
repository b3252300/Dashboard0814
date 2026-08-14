<template>
  <Treetable title="Admission / Transfer In" scrollSizeHeight="25vh">
    <template #total> 
      Total Patient : {{total}}
    </template>
    <template #thead> 
      <tr>
          <th>Time Initialed</th>
          <th>Arrival time</th>
          <th>Time taken</th>
          <th>Bed</th>
          <th>Patient</th>
          <th>Status</th>
        </tr>
    </template>
    <template #tbody>
      <tr v-for="item in list" :key="item.BedCode">
          <td>{{ TransferDateTime(item.KindDateTime) }}</td>
          <td>{{ TransferDateTime(item.ArrivalDateTime) }}</td>
          <td>{{ item.TimeTaken }}</td>
          <td>{{ item.BedName }}</td>
          <td>{{ item.Name }}</td>
          <td>{{ item.SatusText }}</td>
        </tr>
    </template>

  </Treetable>


</template>

<script setup>
import TableScroll from '@/components/TableScroll.vue'
import { toRefs } from 'vue'
import useDate from "@/composable/useDate";
import Treetable from '@/components/Treetable.vue'; 


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
const { list,total } = toRefs(props);

function TransferDateTime(date){
  if(date != null){
    return GetDateTimeDDMMHHmm(new Date(date));
  }else{
    return '';
  }
}

</script>
