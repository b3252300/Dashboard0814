<template>
  <Treetable  title="OT/Cath Lab/ENDO" scrollSizeHeight="30vh" minHeight="30vh">
    <template #total> 
      Total Patient : {{total}}
    </template>
    <template #thead> 
      <tr>
          <th width="72">Bed</th>
          <th width="300">Patient</th>
          <th width="190">Type of Case</th>
          <th width="190">Scheduling Time</th>
          <th width="190">Location</th>
          <th>Procedure</th>
          <th width="190">Doctor</th>
          <th>Status</th>
      </tr>
    </template>
    <template #tbody>
      <tr v-for="item in list" :key="item.BedCode">
          <td width="72">{{ item.BedName }}</td>
          <td width="300">{{ item.PatientName }}</td>
          <td width="190">{{ item.CaseType }}</td>
          <td  width="190">{{ item.SchedulingDateTime }}</td>
          <td width="190">{{ item.Location }}</td>
          <td>{{ item.Procedure }}</td>
          <td width="190">{{ item.OrderingDoctor }}</td>
          <td>{{ item.Status }}</td> 
        </tr>
  
    </template>

  </Treetable>
</template>

<script setup>
import Treetable from '@/components/Treetable.vue'; 
import { onMounted, toRefs, ref } from 'vue'

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



</script>
<style lang="scss" scoped>
.p-treetable-wrapper{
  .p-treetable-thead{
    table{
      th{
        @media screen and (max-width:1200px){
            width: 150px;
          }
        &:nth-child(1){
          @media screen and (max-width:1200px){
            width: 72px;
          }
        }
        &:nth-child(2){
          width: 300px;
          @media screen and (max-width:1200px){
            width: 200px;
          }
        }
      }
    }
  }
  .p-treetable-tbody-content{
    table{
      td{
        @media screen and (max-width:1200px){
          width: 150px;
          }
        &:nth-child(2){
          width: 300px;
          @media screen and (max-width:1200px){
            width: 200px;
          }
        }
        &:nth-child(1){
          @media screen and (max-width:1200px){
            width: 72px;
          }
          
        }
      }
    }
  }
}

</style>