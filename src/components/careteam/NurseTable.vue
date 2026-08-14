<template>
    <Treetable class="nurse_table" scrollSizeHeight="auto">
    <template  #total> 
      Incharge nurse : {{ title }}
    </template>
    <template #thead> 
      <tr>
          <th width="76">Team</th>
          <th width="200">Nurse</th>
          <th width="161">Employee No.</th>
          <th>Beds</th>
          <th width="66">Total</th>
          <th width="80">Level 1</th>
          <th width="80">Level 2</th>
          <th width="80">Level 3</th>
          <th width="80">Level 4</th>
          <th width="80">Level 5</th>
          <th width="76" class="bg_jade py-0">EWS 0-4</th>
          <th width="76" class="bg_yellowed py-0">EWS 5-6 ≥3</th>
          <th width="76" class="bg_flatred py-0">EWS ≥7</th>
        </tr>
    </template>
    <template #tbody>
      <tr v-for="item in list" :key="item.Code">
          <td width="76">{{ item.Team }}</td>
          <td width="200">{{ item.Name }}</td>
          <td width="161">{{ item.Code }}</td>
          <td>
            <template v-for="bed in item.BedDataList" :key="bed.BedCode">
              <BedComponent
                :BedName="bed.BedName"
                :EwsLevel="bed.EwsLevel"
                :Acuity="bed.Acuity"
              />
            </template>
          </td>
          <td width="66">{{ item.TotalCount > 0 ? item.TotalCount : "" }}</td>
          <td  width="80">{{ item.Level1Count > 0 ? item.Level1Count : "" }}</td>
          <td  width="80">{{ item.Level2Count > 0 ? item.Level2Count : "" }}</td>
          <td  width="80">{{ item.Level3Count > 0 ? item.Level3Count : "" }}</td>
          <td  width="80">{{ item.Level4Count > 0 ? item.Level4Count : "" }}</td>
          <td  width="80">{{ item.Level5Count > 0 ? item.Level5Count : "" }}</td>
          <td width="76">{{ item.EwsLowCount > 0 ? item.EwsLowCount : "" }}</td>
          <td width="76">{{ item.EwsMediumCount > 0 ? item.EwsMediumCount : "" }}</td>
          <td width="76">{{ item.EwsHighCount > 0 ? item.EwsHighCount : "" }}</td>
        </tr>
    </template>

  </Treetable>

</template>

<script setup>
import { toRefs } from "vue";
//import cardLabel from '@/components/careteam/cardLabel.vue';
import BedComponent from "@/components/careteam/BedComponent.vue";
import Treetable from '@/components/Treetable.vue'; 

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
      "";
    },
  },
});
const { list, title } = toRefs(props);
</script>

<style lang="scss">
.nurse_table .p-treetable-thead{
  .caption{
    background: #667085 ;
  }
}
.nurse_table{
  .p-treetable-thead-div {
    background: $bg_flatred;
}
}
</style>




<style lang="scss" scoped>
.nurse_table{
  table{
  
  th:nth-child(1),  td:nth-child(1){
  

  @media screen and (max-width:1500px) {
      width: 60px;
    }
  }
  th:nth-child(2),  td:nth-child(2){
    @media screen and (max-width:1500px) {
       width: 110px;
    }
  }
  th:nth-child(3),  td:nth-child(3){
    @media screen and (max-width:1500px) {
       width: 110px;
    }
  }
}
}
// @media screen and (max-width: 1400px) {
//   table.table.table-default tbody td:nth-child(4) {
//     width: 71rem;
//   }
// }
</style>
