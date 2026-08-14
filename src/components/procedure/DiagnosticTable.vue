<template>

  <Treetable  title="Diagnostic / Procedure" scrollSizeHeight="30vh" minHeight="30vh">
    <template #total> 
      Total Patient : {{total}}
    </template>
    <template #thead> 
        <tr>
          <th width="72">Bed</th>
          <th>Patient</th>
          <th>Scheduling Time</th>
          <th >Location</th>
          <th >Procedure</th>
          <th >Doctor</th>
          <th >Status</th>
          <th >Patient</th>
          <th >Scheduling Time</th>
          <th >Location</th>
          <th>Procedure</th> 
          <th>Status</th>
        </tr>
    </template>
    <template #tbody>
      <tr v-for="item in list" :key="item.BedCode">
          <td width="72">{{ item.BedName }}</td>
          <td>{{ item.PatientName }}</td>
          <td>{{ item.SchedulingDateTime }}</td>
          <td>{{ item.Location }}</td>
          <td>{{ item.Procedure }}</td>
          <td>{{ item.OrderingDoctor }}</td>
          <td>{{ item.Status }}</td> 
          <td>{{ item.PatientName }}</td>
          <td >{{ item.SchedulingDateTime }}</td>
          <td>{{ item.Location }}</td>
          <td>{{ item.Procedure }}</td> 
          <td>{{ item.Status }}</td> 
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


</script>
<style lang="scss" scoped>
.p-treetable-wrapper{
  .p-treetable-thead{
    table{
      th{
        
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

        &:nth-child(2){
          width: 300px;
          @media screen and (max-width:1200px){
            width: 200px;
          }
        }

      }
    }
  }
}
</style>